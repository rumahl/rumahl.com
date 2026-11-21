'use client';
import {useEffect, useMemo, useState} from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  Cpu,
  Download,
  Gauge,
  HardDrive,
  Network,
  Puzzle,
  Search,
  Sparkles,
  Terminal,
  Wrench,
  Zap,
} from 'lucide-react';
import {apps, devices, requiredResources, deviceMeets, deviceFitsApp, valueScore, formatRam, baseRequirements} from './installer-data';
import {DeviceArt} from './device-art';
import styles from './installer.module.css';

type Step = 1 | 2 | 3 | 4;
type Path = 'have' | 'need';
type Level = 'beginner' | 'experienced';

const steps = [
  {id: 1, label: 'Start'},
  {id: 2, label: 'Device & services'},
  {id: 3, label: 'Experience'},
  {id: 4, label: 'Install'},
];

const guideSteps: Record<Level, {title: string; text: string}[]> = {
  beginner: [
    {title: 'Start with the current development build', text: 'There is no signed public installer yet. Choose the developer server for platform work or the QEMU image for acceptance.'},
    {title: 'Run the developer server', text: 'Install the frontend workspace, then run pnpm --dir frontend dev and open https://localhost:8443.'},
    {title: 'Or build the QEMU image', text: 'Use platform-buildroot/image/build.sh, create the data disk and boot it with boot.sh.'},
    {title: 'Trust the local certificate', text: 'Use a dedicated browser profile and trust the generated localhost certificate. Do not click through the warning.'},
    {title: 'Sign in', text: 'Use the generated developer account or a locally provisioned account. There is no default password.'},
    {title: 'Explore the platform', text: 'The app, capability, OIDC and connector foundations are available; generic NAS and smart-home adapters are still in development.'},
  ],
  experienced: [
    {title: 'Install and start', text: 'pnpm --dir frontend install --frozen-lockfile && pnpm --dir frontend dev'},
    {title: 'First login', text: 'Read .rumahl-dev/credentials.json, trust the localhost certificate and open https://localhost:8443.'},
    {title: 'Image path', text: 'platform-buildroot/image/build.sh, then create-data.py and boot.sh with a separate data disk.'},
    {title: 'Account provisioning', text: 'Use rumahl-platform-service provision-account with a hidden password prompt; there are no default accounts.'},
    {title: 'Checks', text: 'Run the frontend, Rust and HTTPS acceptance checks before relying on an image.'},
  ],
};

const prerequisites = [
  {icon: Terminal, text: 'Linux or WSL2 development host'},
  {icon: Cpu, text: 'Rust toolchain, Node 22.12+ with ICU and pnpm 11.19.0'},
  {icon: HardDrive, text: 'QEMU and a separate data disk for the image path'},
  {icon: Wrench, text: 'A trusted localhost certificate for WSS and service workers'},
];

export function Installer() {
  const [step, setStep] = useState<Step>(1);
  const [path, setPath] = useState<Path | null>(null);
  const [selectedApps, setSelectedApps] = useState<string[]>(['home-assistant']);
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [level, setLevel] = useState<Level | null>(null);
  const [copied, setCopied] = useState(false);
  const [deviceQuery, setDeviceQuery] = useState('');
  const [archFilter, setArchFilter] = useState<'all' | 'x86_64' | 'arm64'>('all');
  const [onlyCompatible, setOnlyCompatible] = useState(false);

  const requirements = useMemo(() => requiredResources(selectedApps), [selectedApps]);
  const selectedDevice = devices.find((d) => d.id === deviceId) ?? null;

  const compatible = useMemo(() => devices.filter((d) => deviceMeets(d, requirements)), [requirements]);
  const bestValueId = useMemo(() => {
    const ranked = [...compatible].filter((d) => d.price > 0).sort((a, b) => valueScore(b) - valueScore(a));
    return ranked[0]?.id ?? null;
  }, [compatible]);

  const remaining = selectedDevice
    ? {
        ram: Math.max(0, selectedDevice.ram - requirements.ram),
        storage: selectedDevice.storage ? Math.max(0, selectedDevice.storage - requirements.storage) : 0,
        cores: Math.max(0, selectedDevice.cores - requirements.cores),
      }
    : null;

  const alsoPossible = useMemo(() => {
    if (!selectedDevice) return [];
    return apps.filter((app) => !selectedApps.includes(app.id) && deviceFitsApp(selectedDevice, app, requirements));
  }, [selectedDevice, selectedApps, requirements]);

  const filteredDevices = useMemo(() => {
    const q = deviceQuery.trim().toLowerCase();
    return devices.filter((device) => {
      if (archFilter !== 'all' && device.arch !== archFilter) return false;
      if (onlyCompatible && !deviceMeets(device, requirements)) return false;
      if (q && !(device.name + ' ' + device.brand + ' ' + device.notes + ' ' + device.ethernet).toLowerCase().includes(q)) return false;
      return true;
    });
  }, [deviceQuery, archFilter, onlyCompatible, requirements]);

  // Restore from a shared URL
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const sp = new URLSearchParams(window.location.search);
      const s = Number(sp.get('step'));
      if (s >= 1 && s <= 4) setStep(s as Step);
      const p = sp.get('path');
      if (p === 'have' || p === 'need') setPath(p);
      const a = sp.get('apps');
      if (a) setSelectedApps(a.split(',').filter(Boolean));
      const d = sp.get('device');
      if (d) setDeviceId(d);
      const l = sp.get('level');
      if (l === 'beginner' || l === 'experienced') setLevel(l);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Keep the URL shareable
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    const set = (key: string, value: string | null) => {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    };
    set('step', String(step));
    set('path', path);
    set('apps', selectedApps.length ? selectedApps.join(',') : null);
    set('device', deviceId);
    set('level', level);
    window.history.replaceState(null, '', url.toString());
  }, [step, path, selectedApps, deviceId, level]);

  function toggleApp(id: string) {
    setSelectedApps((current) => (current.includes(id) ? current.filter((v) => v !== id) : [...current, id]));
  }

  function copyLink() {
    navigator.clipboard?.writeText(window.location.href).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      },
      () => {}
    );
  }


  const canContinue = step === 1 ? path !== null : step === 2 ? selectedDevice !== null || path === 'have' : true;

  return (
    <div className={styles.installer}>
      <ol className={styles.stepper}>
        {steps.map((entry) => (
          <li
            key={entry.id}
            className={styles.stepperItem}
            data-active={step === entry.id}
            data-done={step > entry.id}
          >
            <span className={styles.stepperNumber}>{step > entry.id ? <Check size={13} /> : entry.id}</span>
            {entry.label}
          </li>
        ))}
      </ol>

      {step === 1 && (
        <section className={styles.panel}>
          <span className={styles.eyebrow}>Step 1 — Your starting point</span>
          <h2>Do you already have a device?</h2>
          <p className={styles.lead}>
            rumahl OS runs on hardware you own. Tell us whether you already have a suitable device or want to find one.
          </p>
          <div className={styles.choiceGrid}>
            <button type="button" className={styles.choiceCard} data-active={path === 'have'} onClick={() => setPath('have')}>
              <HardDrive size={26} />
              <strong>I already have a device</strong>
              <span>An old PC, a Raspberry Pi, a mini PC or a server.</span>
            </button>
            <button type="button" className={styles.choiceCard} data-active={path === 'need'} onClick={() => setPath('need')}>
              <Sparkles size={26} />
              <strong>Help me find one</strong>
              <span>We recommend hardware that fits what you want to run.</span>
            </button>
          </div>

          <div className={styles.requirements}>
            <div>
              <h3>Recommended</h3>
              <ul>
                <li>x86_64 with UEFI (Intel / AMD)</li>
                <li>2 GB+ RAM</li>
                <li>16 GB+ storage</li>
                <li>Gigabit Ethernet</li>
              </ul>
            </div>
            <div>
              <h3>ARM support</h3>
              <ul>
                <li>Raspberry Pi 4 (4 GB+ model)</li>
                <li>Rock Pi 4</li>
                <li>Odroid N2+</li>
                <li>Generic ARMv8 boards</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {step === 2 && (
        <>
          <section className={styles.panel}>
            <span className={styles.eyebrow}>Step 2 — Services</span>
            <h2>What do you want to run?</h2>
            <p className={styles.lead}>Select your services — the requirements update live and we match them to your device.</p>
            <div className={styles.appGrid}>
              {apps.map((app) => {
                const selected = selectedApps.includes(app.id);
                const fits = !selectedDevice || deviceFitsApp(selectedDevice, app, {...baseRequirements});
                return (
                  <button
                    key={app.id}
                    type="button"
                    className={styles.appCard}
                    data-active={selected}
                    onClick={() => toggleApp(app.id)}
                  >
                    <span className={styles.appIcon}>
                      <app.icon size={19} />
                    </span>
                    <span className={styles.appBody}>
                      <strong>{app.name}</strong>
                      <small>{app.text}</small>
                    </span>
                    <span className={styles.appMeta}>
                      {formatRam(app.ram)} · {app.storage} GB
                    </span>
                    {selected && <span className={styles.appCheck}><Check size={13} /></span>}
                    {selectedDevice && !fits && <span className={styles.appWarn}>tight</span>}
                  </button>
                );
              })}
            </div>
          </section>

          <section className={styles.panel}>
            <span className={styles.eyebrow}>Step 2 — Device</span>
            <h2>{path === 'have' ? 'Which device do you have?' : 'Choose a device'}</h2>
            <p className={styles.lead}>
              {path === 'have'
                ? 'Pick the machine you want to use. We check it against your services.'
                : 'Compatible devices with approximate prices. The best value is highlighted.'}
            </p>
            <div className={styles.deviceToolbar}>
              <label className={styles.deviceSearch}>
                <Search size={16} />
                <input
                  value={deviceQuery}
                  onChange={(event) => setDeviceQuery(event.target.value)}
                  placeholder="Search devices…"
                  aria-label="Search devices"
                />
              </label>
              <div className={styles.deviceFilters}>
                {(['all', 'x86_64', 'arm64'] as const).map((filter) => (
                  <button key={filter} type="button" data-active={archFilter === filter} onClick={() => setArchFilter(filter)}>
                    {filter === 'all' ? 'All' : filter === 'x86_64' ? 'x86_64' : 'ARM'}
                  </button>
                ))}
                <button type="button" data-active={onlyCompatible} onClick={() => setOnlyCompatible((value) => !value)}>
                  Only compatible
                </button>
              </div>
            </div>
            <div className={styles.deviceGrid}>
              {filteredDevices.map((device) => {
                const meets = deviceMeets(device, requirements);
                const isBest = device.id === bestValueId;
                const selected = deviceId === device.id;
                return (
                  <button
                    key={device.id}
                    type="button"
                    className={styles.deviceCard}
                    data-active={selected}
                    data-disabled={!meets}
                    onClick={() => setDeviceId(device.id)}
                  >
                    <span className={styles.deviceArt}>
                      {device.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={device.image} alt={device.name} loading="lazy" />
                      ) : (
                        <DeviceArt kind={device.kind} />
                      )}
                      {isBest && <span className={styles.bestBadge}>Best value</span>}
                      {device.popular && !isBest && <span className={styles.popBadge}>Popular</span>}
                    </span>
                    <span className={styles.deviceBody}>
                      <strong>{device.name}</strong>
                      <span className={styles.deviceBrand}>{device.brand}</span>
                      <span className={styles.deviceSpecs}>
                        <em><Cpu size={12} /> {device.arch === 'arm64' ? 'ARM64' : 'x86_64'}</em>
                        <em><HardDrive size={12} /> {device.ram ? formatRam(device.ram) : 'custom'} RAM</em>
                        <em><Network size={12} /> {device.ethernet}</em>
                      </span>
                      <span className={styles.deviceMeters}>
                        <em><Zap size={12} /> {device.power} W</em>
                        <em><Gauge size={12} /> Ease {device.ease}/5</em>
                        <em><Puzzle size={12} /> Expand {device.expand}/5</em>
                      </span>
                      <span className={styles.devicePrice}>
                        {device.price ? `~ €${device.price}` : 'Owned'} <small>{device.priceNote}</small>
                      </span>
                      <span className={styles.value}>
                        <Gauge size={12} /> Value
                        <span className={styles.valueBar}>
                          <span style={{width: `${Math.min(100, Math.round(valueScore(device) / 3))}%`}} />
                        </span>
                      </span>
                      {!meets && (
                        <span className={styles.warn}>
                          <AlertTriangle size={12} /> Needs more than {formatRam(requirements.ram)} RAM / {requirements.storage} GB
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
              {filteredDevices.length === 0 && <p className={styles.lead}>No devices match your search.</p>}
            </div>
          </section>

          <section className={styles.panel}>
            <span className={styles.eyebrow}>Calculated for you</span>
            <h2>Your requirements</h2>
            <div className={styles.reqRow}>
              <div className={styles.reqStat}><Cpu size={18} /><strong>{requirements.cores}</strong><span>CPU cores</span></div>
              <div className={styles.reqStat}><HardDrive size={18} /><strong>{formatRam(requirements.ram)}</strong><span>RAM</span></div>
              <div className={styles.reqStat}><Download size={18} /><strong>{requirements.storage} GB</strong><span>Storage</span></div>
            </div>
            {selectedDevice ? (
              <>
                <p className={styles.result}>
                  <CheckCircle2 size={16} /> {selectedDevice.name} {deviceMeets(selectedDevice, requirements) ? 'comfortably covers' : 'is below'} your selection.
                </p>
                {remaining && deviceMeets(selectedDevice, requirements) && (
                  <p className={styles.remaining}>
                    Left after install: {formatRam(remaining.ram)} RAM{selectedDevice.storage ? `, ${remaining.storage} GB storage` : ''}.
                  </p>
                )}
                {alsoPossible.length > 0 && (
                  <div className={styles.also}>
                    <span>Still possible on this device:</span>
                    {alsoPossible.slice(0, 6).map((app) => (
                      <em key={app.id}>{app.name}</em>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p className={styles.result}>
                <Sparkles size={16} /> {compatible.length} device{compatible.length === 1 ? '' : 's'} match your selection. Pick one above.
              </p>
            )}
          </section>
        </>
      )}

      {step === 3 && (
        <section className={styles.panel}>
          <span className={styles.eyebrow}>Step 3 — Experience</span>
          <h2>How familiar are you with this?</h2>
          <p className={styles.lead}>We tailor the installation guide to your level.</p>
          <div className={styles.choiceGrid}>
            <button type="button" className={styles.choiceCard} data-active={level === 'beginner'} onClick={() => setLevel('beginner')}>
              <Sparkles size={26} />
              <strong>I&rsquo;m a beginner</strong>
              <span>Step-by-step instructions with explanations.</span>
            </button>
            <button type="button" className={styles.choiceCard} data-active={level === 'experienced'} onClick={() => setLevel('experienced')}>
              <Terminal size={26} />
              <strong>I&rsquo;m experienced</strong>
              <span>Short commands, no hand-holding.</span>
            </button>
          </div>
        </section>
      )}

      {step === 4 && (
        <>
          <section className={styles.panel}>
            <span className={styles.eyebrow}>Step 4 — Installation</span>
            <h2>Everything you need.</h2>
            <p className={styles.lead}>
              Your setup: <strong>{selectedDevice?.name ?? 'Your device'}</strong> with {selectedApps.length} service{selectedApps.length === 1 ? '' : 's'}.
            </p>

            <h3 className={styles.subhead}>Prerequisites</h3>
            <ul className={styles.prereqList}>
              {prerequisites.map((item) => (
                <li key={item.text}>
                  <item.icon size={16} /> {item.text}
                </li>
              ))}
            </ul>

            <div className={styles.downloadRow}>
              <Link className={styles.primary} href="/docs/installation">
                <ArrowRight size={17} /> Open the installation guide
              </Link>
              <span className={styles.downloadNote}>No public installer release yet · development builds only</span>
            </div>
          </section>

          <section className={styles.panel}>
            <div className={styles.guideHead}>
              <h2>Installation guide</h2>
              <button type="button" className={styles.ghost} onClick={copyLink}>
                {copied ? <><Check size={15} /> Link copied</> : <><Copy size={15} /> Save this guide</>}
              </button>
            </div>
            <p className={styles.lead}>
              {level === 'beginner' ? 'Follow along at your own pace.' : 'The quick version.'} Save the link and open it on the device you install from — your choices come back.
            </p>
            <ol className={styles.guide}>
              {guideSteps[level ?? 'beginner'].map((entry, i) => (
                <li key={entry.title}>
                  <span className={styles.guideNumber}>{i + 1}</span>
                  <span>
                    <strong>{entry.title}</strong>
                    <small>{entry.text}</small>
                  </span>
                </li>
              ))}
            </ol>
            <div className={styles.finish}>
              <Wrench size={18} />
              <span>
                Need help? Read the <Link href="/docs/installation">installation documentation</Link> or visit the <Link href="/help">support center</Link>.
              </span>
            </div>
          </section>
        </>
      )}

      <div className={styles.actions}>
        <button type="button" className={styles.ghost} onClick={() => setStep((s) => Math.max(1, s - 1) as Step)} disabled={step === 1}>
          <ArrowLeft size={15} /> Back
        </button>
        {step < 4 ? (
          <button type="button" className={styles.primary} onClick={() => setStep((s) => Math.min(4, s + 1) as Step)} disabled={!canContinue}>
            Continue <ArrowRight size={15} />
          </button>
        ) : (
          <button type="button" className={styles.ghost} onClick={copyLink}>
            {copied ? <><Check size={15} /> Link copied</> : <><Copy size={15} /> Copy setup link</>}
          </button>
        )}
      </div>
    </div>
  );
}
