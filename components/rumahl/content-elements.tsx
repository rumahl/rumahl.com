'use client';
import {useEffect, useState} from 'react';
import {AlertTriangle, Blocks, Cable, Info, Lightbulb, LockKeyhole, Server, ShieldCheck, Workflow} from 'lucide-react';
import type {ApiEndpointGroup} from './knowledge';

export type CalloutTone = 'note' | 'tip' | 'important' | 'warning' | 'caution';

const toneIcons = {
  note: Info,
  tip: Lightbulb,
  important: ShieldCheck,
  warning: AlertTriangle,
  caution: AlertTriangle,
} as const;

const toneLabels: Record<CalloutTone, string> = {
  note: 'Note',
  tip: 'Tip',
  important: 'Important',
  warning: 'Warning',
  caution: 'Caution',
};

export function Callout({tone = 'note', title, text}: {tone?: CalloutTone; title?: string; text: string}) {
  const Icon = toneIcons[tone] ?? Info;
  return (
    <div className="callout" data-tone={tone}>
      <Icon size={18} />
      <div>
        <strong>{title ?? toneLabels[tone] ?? 'Note'}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

export function Checklist({id, title, items}: {id: string; title?: string; items: string[]}) {
  const storageKey = 'rumahl-checklist-' + id;
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) setChecked(items.map((_, index) => Boolean(parsed[index])));
        }
      } catch {
        /* ignore */
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [storageKey, items]);

  function toggle(index: number) {
    setChecked((current) => {
      const next = current.map((value, i) => (i === index ? !value : value));
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  function reset() {
    setChecked(items.map(() => false));
    try {
      window.localStorage.removeItem(storageKey);
    } catch {
      /* ignore */
    }
  }

  const done = checked.filter(Boolean).length;
  const complete = items.length > 0 && done === items.length;

  return (
    <div className="checklist" data-complete={complete}>
      <div className="checklist-head">
        <strong>{title ?? 'Checklist'}</strong>
        <span className="checklist-progress">
          {done} / {items.length} done
        </span>
        {done > 0 && (
          <button type="button" className="checklist-reset" onClick={reset}>
            Reset
          </button>
        )}
      </div>
      <div className="checklist-bar">
        <span style={{width: `${items.length ? (done / items.length) * 100 : 0}%`}} />
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={item} data-checked={checked[index]}>
            <label>
              <input type="checkbox" checked={checked[index]} onChange={() => toggle(index)} />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}


export function ApiDiagram({kind}: {kind: 'request-flow' | 'app-model'}) {
  if (kind === 'request-flow') {
    return (
      <div className="api-flow" role="img" aria-label="A request moves from the shell or an app through the gateway and Rust authorization before it reaches the domain operation.">
        <div className="api-flow-step">
          <span className="api-flow-icon"><Blocks size={17} /></span>
          <strong>Shell or app</strong>
          <span>A user action or bridge call starts.</span>
        </div>
        <span className="api-flow-arrow" aria-hidden="true">→</span>
        <div className="api-flow-step">
          <span className="api-flow-icon"><LockKeyhole size={17} /></span>
          <strong>Gateway</strong>
          <span>Same-origin request, session cookie, Origin and CSRF.</span>
        </div>
        <span className="api-flow-arrow" aria-hidden="true">→</span>
        <div className="api-flow-step">
          <span className="api-flow-icon"><ShieldCheck size={17} /></span>
          <strong>Rust authorization</strong>
          <span>Account, session, installation and grants are rechecked.</span>
        </div>
        <span className="api-flow-arrow" aria-hidden="true">→</span>
        <div className="api-flow-step">
          <span className="api-flow-icon"><Workflow size={17} /></span>
          <strong>Domain operation</strong>
          <span>The platform performs the operation or denies it.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="api-flow" role="img" aria-label="An app package is signed, hosted by rumahl and connected to the shell through the bridge.">
      <div className="api-flow-step">
        <span className="api-flow-icon"><Blocks size={17} /></span>
        <strong>Signed package</strong>
        <span>Manifest, payload files and an Ed25519 signature.</span>
      </div>
      <span className="api-flow-arrow" aria-hidden="true">→</span>
      <div className="api-flow-step">
        <span className="api-flow-icon"><Server size={17} /></span>
        <strong>Platform hosting</strong>
        <span>The importer publishes assets and authorizes launch.</span>
      </div>
      <span className="api-flow-arrow" aria-hidden="true">→</span>
      <div className="api-flow-step">
        <span className="api-flow-icon"><Workflow size={17} /></span>
        <strong>Bridge</strong>
        <span>Window, theme, notification and capability methods.</span>
      </div>
      <span className="api-flow-arrow" aria-hidden="true">→</span>
      <div className="api-flow-step">
        <span className="api-flow-icon"><Cable size={17} /></span>
        <strong>Service or provider</strong>
        <span>The app uses a granted capability, not a broad platform token.</span>
      </div>
    </div>
  );
}

export function EndpointGroup({group}: {group: ApiEndpointGroup}) {
  return (
    <div className="api-endpoints">
      <div className="api-endpoints-head">
        <h3>{group.title}</h3>
        {group.note ? <p>{group.note}</p> : null}
      </div>
      <ul className="api-endpoints-list">
        {group.rows.map((row) => (
          <li key={row.method + row.path}>
            <code className="api-method" data-method={row.method}>{row.method}</code>
            <code className="api-path">{row.path}</code>
            <span className="api-purpose">{row.purpose}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
