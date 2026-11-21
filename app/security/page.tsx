import type {CSSProperties} from 'react';
import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowRight, Award, Bug, CheckCircle2, FileText, Lock, Mail, ShieldCheck} from 'lucide-react';
import {Navigation} from '@/components/rumahl/navigation';
import {Footer} from '@/components/rumahl/sections';
import {company} from '@/lib/legal/company';

export const metadata: Metadata = {
  title: 'Security — rumahl',
  description:
    'How to report a vulnerability in rumahl software, what qualifies, how we score severity, how coordinated disclosure and CVE assignment work, and why we do not offer bounties.',
  alternates: {canonical: '/security', types: {'text/markdown': '/security.md'}},
};

const steps = [
  {
    icon: Mail,
    title: 'Report privately',
    text: `Email ${company.securityEmail} or open a private security advisory on GitHub. Please do not open a public issue for a suspected vulnerability.`,
  },
  {
    icon: FileText,
    title: 'Include the details',
    text: 'Affected project and version, a description, reproduction steps, potential impact and any proof of concept. Remove credentials and personal data.',
  },
  {
    icon: Lock,
    title: 'Keep it confidential',
    text: 'Give us time to investigate and fix the issue before any public disclosure. We will coordinate the timing with you.',
  },
  {
    icon: CheckCircle2,
    title: 'We respond',
    text: 'We acknowledge your report within the target for its severity, keep you updated and credit you once a fix is released (unless you prefer to stay anonymous).',
  },
];

const nonQualifying = [
  'Missing security headers or best-practice hardening on the marketing website without a concrete, demonstrable impact.',
  'Self-XSS or issues that require the victim to paste code into their own developer console.',
  'Attacks that require physical access to the device or an already compromised host.',
  'Social engineering, phishing or physical security issues.',
  'Denial-of-service, brute-force or volumetric attacks.',
  'Automated scanner output without a validated, reproducible finding.',
  'Issues in outdated browsers, plugins or unsupported platforms.',
  'Already public, already reported or third-party services we do not control.',
];

const severity = [
  ['Critical', '9.0 – 10.0', 'Acknowledge within 24 hours; fix as soon as possible'],
  ['High', '7.0 – 8.9', 'Acknowledge within 48 hours'],
  ['Medium', '4.0 – 6.9', 'Acknowledge within 5 business days'],
  ['Low', '0.1 – 3.9', 'Acknowledge within 10 business days'],
];

export default function SecurityPage() {
  return (
    <>
      <Navigation />
      <main className="portal-scope content-main" style={{'--content-accent': 'var(--accent)'} as CSSProperties}>
        <section className="content-hero">
          <div className="content-hero-inner">
            <span className="content-eyebrow">
              <ShieldCheck size={13} /> Security
            </span>
            <h1>
              Security at <span className="gradient-text">rumahl</span>.
            </h1>
            <p className="lead">
              We take the security of our software and your home seriously. Here is how to report a vulnerability, what
              qualifies, how we handle disclosure — and why we do not offer bounties.
            </p>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30}}>
              <a className="button" href={`mailto:${company.securityEmail}`}>
                Report a vulnerability
              </a>
              <a className="text-link" href="https://github.com/rumahl">
                Security advisories on GitHub <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="content-section" id="reporting">
          <div className="content-head">
            <div>
              <h2>Reporting a vulnerability</h2>
              <p>Please report suspected vulnerabilities privately — never in a public issue.</p>
            </div>
          </div>
          <div className="content-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
            {steps.map((step) => (
              <div className="about-value" key={step.title}>
                <step.icon size={20} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <div className="content-note" style={{marginTop: 24}}>
            For sensitive reports you can request our PGP key. Never include passwords, tokens, recovery codes or
            personal data in a report.
          </div>
        </section>

        <section className="content-section" id="non-qualifying">
          <div className="content-head">
            <div>
              <h2>Non-qualifying vulnerabilities</h2>
              <p>The following reports do not qualify as security vulnerabilities.</p>
            </div>
          </div>
          <ul className="about-list">
            {nonQualifying.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="content-section" id="severity">
          <div className="content-head">
            <div>
              <h2>Severity scoring</h2>
              <p>We assess reports using CVSS and respond according to severity.</p>
            </div>
          </div>
          <div className="rich-table">
            <table>
              <thead>
                <tr>
                  <th>Severity</th>
                  <th>CVSS score</th>
                  <th>Target response</th>
                </tr>
              </thead>
              <tbody>
                {severity.map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{marginTop: 16, fontSize: 13, color: 'var(--foreground-muted)'}}>
            A CVSS score is not the only factor. Reachability, required privileges, user interaction and real-world
            impact also matter.
          </p>
        </section>

        <section className="content-section" id="disclosure">
          <div className="content-head">
            <div>
              <h2>Public disclosure &amp; CVE assignment</h2>
              <p>We follow coordinated disclosure.</p>
            </div>
          </div>
          <ul className="about-list">
            <li>We work with you on a disclosure timeline — our default is 90 days from acknowledgement.</li>
            <li>If a fix is ready earlier, we publish earlier with your agreement.</li>
            <li>We request a CVE ID for confirmed vulnerabilities. GitHub acts as the CNA for our repositories.</li>
            <li>We publish a GitHub security advisory and credit the reporter, unless you prefer to remain anonymous.</li>
          </ul>
        </section>

        <section className="content-section" id="bounties">
          <div className="content-head">
            <div>
              <h2>Bounties</h2>
              <p>We are open source — and we do not offer bug bounties.</p>
            </div>
          </div>
          <div className="content-note" style={{display: 'flex', gap: 18, alignItems: 'flex-start'}}>
            <Award size={22} style={{color: 'var(--content-accent)', flexShrink: 0, marginTop: 2}} />
            <div>
              rumahl and all of our projects are open source, and <strong>none of them offer a bug bounty</strong>.
              There are no monetary rewards for vulnerability reports. We still value your work: we investigate every
              valid report, fix confirmed issues and credit reporters in the security advisory.
            </div>
          </div>
        </section>

        <section className="content-section" id="issues">
          <div className="content-head">
            <div>
              <h2>Reporting issues</h2>
              <p>For non-security bugs, features and questions, use the public trackers.</p>
            </div>
          </div>
          <div className="content-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
            <a className="content-card" href="https://github.com/rumahl" style={{borderRadius: 22}}>
              <div className="content-card-body">
                <Bug size={22} style={{color: 'var(--content-accent)', marginBottom: 16}} />
                <h3>GitHub issues</h3>
                <p>Report reproducible bugs and request features in the relevant repository.</p>
                <div className="content-card-meta">
                  <b>
                    Open GitHub <ArrowRight size={14} />
                  </b>
                </div>
              </div>
            </a>
            <Link className="content-card" href="/legal/contributing" style={{borderRadius: 22}}>
              <div className="content-card-body">
                <FileText size={22} style={{color: 'var(--content-accent)', marginBottom: 16}} />
                <h3>Contributing</h3>
                <p>How to write a good bug report and submit a pull request.</p>
                <div className="content-card-meta">
                  <b>
                    Read the guide <ArrowRight size={14} />
                  </b>
                </div>
              </div>
            </Link>
            <Link className="content-card" href="/help" style={{borderRadius: 22}}>
              <div className="content-card-body">
                <ShieldCheck size={22} style={{color: 'var(--content-accent)', marginBottom: 16}} />
                <h3>Support</h3>
                <p>Guides, how-to&rsquo;s and answers for everyday questions.</p>
                <div className="content-card-meta">
                  <b>
                    Visit support <ArrowRight size={14} />
                  </b>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
