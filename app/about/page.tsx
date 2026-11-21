import type {CSSProperties} from 'react';
import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowRight, Home, MapPin, Move, Palette, Ruler, Volume2} from 'lucide-react';
import {Navigation} from '@/components/rumahl/navigation';
import {Footer} from '@/components/rumahl/sections';
import {BrandIcon, BrandLogo} from '@/components/rumahl/brand';

export const metadata: Metadata = {
  title: 'About the project — rumahl',
  description:
    'rumahl is an independent open-source project. Read about its development, how to contribute and the origin of its name.',
  alternates: {canonical: '/about', types: {'text/markdown': '/about.md'}},
};

const chips = ['Bahasa Indonesia', 'Bahasa Melayu', 'house · home · place to live'];

const pronunciations = [
  {label: 'English (phonetic)', value: 'ROO-mahl', note: 'rhymes with “room” + “mall”'},
  {label: 'IPA', value: '/ˈruː.mɑːl/', note: 'stress on the first syllable'},
  {label: 'Bahasa Indonesia', value: 'ru-mahl', note: 'same spelling, soft “r”'},
  {label: 'Bahasa Melayu', value: 'ru-mahl', note: '“rumah” with an “l”'},
];

const syllables = [
  {s: 'ru', d: 'like “room”'},
  {s: 'mahl', d: 'like “mall”'},
];

const markPoints = [
  'Lowercase wordmark, drawn as one shape',
  'The “r” is the brand icon — it appears nine times in the wordmark',
  'The final “l” is the straight stem',
  'Any single solid colour; white or black on photography',
  'The icon and the wordmark are separate marks — never combined',
];

const brandFacts = [
  {
    icon: Move,
    label: 'Clear space',
    value: '1× the mark height',
    text: 'Keep the height of the “r” free around the mark. Nothing belongs inside that space.',
  },
  {
    icon: Ruler,
    label: 'Minimum size',
    value: '16 px · 72 px',
    text: 'Below the wordmark minimum, use the monogram on its own.',
  },
  {
    icon: Palette,
    label: 'One solid colour',
    value: 'Any hue · white or black on photos',
    text: 'The whole mark uses one colour value. It never carries a gradient or several colours.',
  },
];

const values = [
  {title: 'Local', text: 'Runs on your hardware, inside your home.'},
  {title: 'Open', text: 'Connects external and native services through public contracts.'},
  {title: 'Independent', text: 'No forced migration, no lock-in and no dependency on rumahl.'},
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="portal-scope content-main" style={{'--content-accent': 'var(--accent)'} as CSSProperties}>
        <section className="content-hero">
          <div className="content-hero-inner">
            <span className="content-eyebrow">Independent open source project</span>
            <BrandLogo className="about-wordmark" />
            <h1>
              A project developed <span className="gradient-text">in public</span>.
            </h1>
            <p className="lead">
              rumahl is an independent open-source project, not a company. It explores a local platform for apps
              and home services. The code, documentation and technical decisions are open to inspection and contribution.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="about-status-grid">
            <div className="content-head"><div><h2>Current work and participation</h2>
              <p>The platform is in active development. The developer server and QEMU image are for exploration and testing;
              broader integrations and installation paths remain work in progress.</p>
              <p>Contributions can be small: reproduce an issue, improve an explanation, test a change or discuss a proposed contract.
              There is no commercial support offering or promised response time.</p>
              <p><Link href="/docs/quick-start">Read the getting-started guide</Link> · <Link href="/developers/contributing">Contribute to rumahl</Link></p>
            </div></div>
            <aside className="about-status" aria-label="Project at a glance">
              <p className="about-card-label">At a glance</p>
              <dl>
                <div><dt>Status</dt><dd>Active development</dd></div>
                <div><dt>License</dt><dd>Apache-2.0</dd></div>
                <div><dt>Current builds</dt><dd>Developer server · Buildroot QEMU image</dd></div>
                <div><dt>Hardware installer</dt><dd>Not yet available</dd></div>
                <div><dt>Support</dt><dd>Community only</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="about-split">
            <div>
              <span className="content-eyebrow">Where it comes from</span>
              <h2>
                “rumah” — <span className="gradient-text">house, home</span>
              </h2>
              <p>
                In Bahasa Indonesia and Bahasa Melayu, <strong>rumah</strong> means house or home — the place where your
                life happens. The name reflects the project’s focus on software that runs on your own hardware.
              </p>
              <div className="about-chips">
                {chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>
            <div className="about-word-card">
              <p className="about-card-label">The word</p>
              <p className="about-word">rumah</p>
              <p className="about-loc">
                <MapPin size={14} /> Indonesia · Malaysia · Singapore · Brunei
              </p>
              <div className="about-word-divider" />
              <p className="about-card-label">The OS</p>
              <p className="about-word">
                rumah<span style={{color: 'var(--content-accent)'}}>l</span>
              </p>
              <p className="about-note">“rumah” + one letter — the same word, made into a mark.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="content-head">
            <div>
              <h2>
                It&rsquo;s pronounced <span className="gradient-text">ROO-mahl</span>
              </h2>
              <p>Two syllables, stress on the first. Say it like “room” followed by “mall” — the same in English, Indonesian and Malay.</p>
            </div>
          </div>
          <div className="content-grid">
            {pronunciations.map((entry) => (
              <div className="about-pron" key={entry.label}>
                <span>
                  <Volume2 size={12} /> {entry.label}
                </span>
                <strong>{entry.value}</strong>
                <small>{entry.note}</small>
              </div>
            ))}
          </div>
          <div className="about-syllables">
            <span className="about-card-label" style={{margin: 0}}>
              Syllables
            </span>
            {syllables.map((syllable) => (
              <span key={syllable.s} style={{display: 'flex', alignItems: 'baseline', gap: 8}}>
                <strong>{syllable.s}</strong>
                <small>{syllable.d}</small>
              </span>
            ))}
            <span className="about-ipa">/ˈruː.mɑːl/</span>
          </div>
        </section>

        <section className="content-section">
          <div className="about-split">
            <div>
              <span className="content-eyebrow">Brandmark</span>
              <h2>
                One word, built from the <span className="gradient-text">r</span>.
              </h2>
              <p>
                The wordmark is lowercase and geometric — calm, like the OS itself. The same “r” shape appears nine times
                across the wordmark and doubles as the standalone icon: it sits in the header, the launcher and the app
                icons of rumahl OS.
              </p>
              <ul className="about-list">
                {markPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="about-mark-pair">
              <div className="about-mark-card">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
                  <div className="about-mark-icon">
                    <BrandIcon />
                  </div>
                  <span className="about-card-label" style={{margin: 0}}>
                    the icon — separate
                  </span>
                </div>
              </div>
              <div className="about-mark-card">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
                  <BrandLogo className="about-mark-word" />
                  <span className="about-card-label" style={{margin: 0}}>
                    the wordmark — separate
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="about-brand-note">
            The icon and the wordmark are never displayed together as a combined logo.
          </p>
          <div className="about-brand-facts">
            {brandFacts.map((fact) => (
              <div className="about-value" key={fact.label}>
                <fact.icon size={20} />
                <h3>{fact.label}</h3>
                <p>
                  <strong>{fact.value}</strong>
                  <br />
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
          <div className="about-brand-cta">
            <Link className="text-link" href="/brand">
              Explore the brand guidelines <ArrowRight size={15} />
            </Link>
            <span>Variants, clear space, colour and the original SVG files.</span>
          </div>
        </section>

        <section className="content-section">
          <div className="content-head" style={{justifyContent: 'center', textAlign: 'center'}}>
            <div>
              <h2>
                A home OS, named after <span className="gradient-text">home</span>.
              </h2>
              <p style={{marginLeft: 'auto', marginRight: 'auto'}}>
                Everything about rumahl points back to the word: it runs at home, keeps your data at home, and treats your
                household like a place to live in — not a subscription.
              </p>
            </div>
          </div>
          <div className="content-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
            {values.map((value) => (
              <div className="about-value" key={value.title}>
                <Home size={20} />
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section" style={{textAlign: 'center'}}>
          <BrandIcon className="about-cta-icon" />
          <h2 style={{fontSize: 'clamp(28px,3.6vw,44px)', fontWeight: 500, letterSpacing: '-.05em', margin: '22px 0 14px', color: 'var(--foreground)'}}>
            Come <span className="gradient-text">home</span>.
          </h2>
          <p style={{maxWidth: 460, margin: '0 auto', color: 'var(--foreground-muted)', fontSize: 16, lineHeight: 1.7}}>
            Get rumahl OS running on your own hardware — in about five minutes.
          </p>
          <div className="about-cta-actions">
            <Link className="button" href="/get-rumahl">
              Get rumahl <ArrowRight size={16} />
            </Link>
            <Link className="text-link" href="/">
              Back to the homepage
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
