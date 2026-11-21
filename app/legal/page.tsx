'use client';
import {useState} from 'react';
import Link from 'next/link';
import {ArrowRight, Code2, FileText, Globe, HardDrive, ShieldCheck, Mail, Scale} from 'lucide-react';
import {company} from '@/lib/legal/company';
import {useLang} from '@/components/rumahl/language';

type Card = {href: string; title: string; description: string};
type Category = {key: string; label: string; icon: typeof FileText; cards: Card[]};

const categories: Record<'en' | 'de', Category[]> = {
  en: [
    {
      key: 'website',
      label: 'Website Policies',
      icon: Globe,
      cards: [
        {href: '/legal/impressum', title: 'Imprint (Impressum)', description: 'Mandatory provider information in accordance with § 5 DDG — contact, legal form and liability notes.'},
        {href: '/legal/tos', title: 'Terms of Service', description: 'Your rights and responsibilities when using our website.'},
        {href: '/legal/privacy', title: 'Privacy Policy', description: 'How we collect, use and protect your personal data — GDPR-compliant.'},
        {href: '/legal/cookies', title: 'Cookie Policy', description: 'Which cookies and local storage the website uses and how you control them.'},
      ],
    },
    {
      key: 'os',
      label: 'rumahl OS Policies',
      icon: HardDrive,
      cards: [
        {href: '/legal/rumahlos/tos', title: 'Software Terms Agreement', description: 'The legal terms governing your use of the rumahl OS operating system (Apache-2.0 License).'},
        {href: '/legal/rumahlos/privacy', title: 'Privacy Policy', description: 'Local-first by design: what stays on your device and what is transmitted.'},
      ],
    },
    {
      key: 'opensource',
      label: 'Open Source & Community',
      icon: Code2,
      cards: [
        {href: '/legal/apps', title: 'Apps (public repository)', description: 'Apps live in github.com/rumahl/apps and are submitted by pull request — no store service, no account.'},
        {href: '/legal/contributing', title: 'Contributing Guidelines', description: 'How to report bugs, propose features and submit pull requests.'},
        {href: '/legal/code-of-conduct', title: 'Code of Conduct', description: 'How we treat each other across all projects and discussions.'},
        {href: '/legal/trademark', title: 'Trademark Policy', description: 'How the rumahl name and logo may be used — forks, redistribution and references.'},
        {href: '/security', title: 'Security', description: 'Reporting a vulnerability, severity scoring, disclosure and CVE assignment.'},
      ],
    },
  ],
  de: [
    {
      key: 'website',
      label: 'Website-Richtlinien',
      icon: Globe,
      cards: [
        {href: '/legal/impressum', title: 'Impressum', description: 'Pflichtangaben gemäß § 5 DDG — Anbieter, Kontakt und Haftungshinweise.'},
        {href: '/legal/tos', title: 'Nutzungsbedingungen', description: 'Deine Rechte und Pflichten bei der Nutzung unserer Website.'},
        {href: '/legal/privacy', title: 'Datenschutzerklärung', description: 'Wie wir deine personenbezogenen Daten verarbeiten — DSGVO-konform.'},
        {href: '/legal/cookies', title: 'Cookie-Richtlinie', description: 'Welche Cookies und lokalen Speicherungen die Website nutzt und wie du sie steuerst.'},
      ],
    },
    {
      key: 'os',
      label: 'rumahl OS-Richtlinien',
      icon: HardDrive,
      cards: [
        {href: '/legal/rumahlos/tos', title: 'Software-Lizenzbedingungen', description: 'Die rechtlichen Bedingungen für die Nutzung des Betriebssystems rumahl OS (Apache-2.0-Lizenz).'},
        {href: '/legal/rumahlos/privacy', title: 'Datenschutzerklärung', description: 'Local-First-Prinzip: Was auf deinem Gerät bleibt und was übertragen wird.'},
      ],
    },
    {
      key: 'opensource',
      label: 'Open Source & Community',
      icon: Code2,
      cards: [
        {href: '/legal/apps', title: 'Apps (öffentliches Repository)', description: 'Apps liegen in github.com/rumahl/apps und werden per Pull Request eingereicht — kein Store-Dienst, kein Konto.'},
        {href: '/legal/contributing', title: 'Contributing Guidelines', description: 'Wie du Fehler meldest, Funktionen vorschlägst und Pull Requests einreichst.'},
        {href: '/legal/code-of-conduct', title: 'Code of Conduct', description: 'Wie wir in der rumahl-Community miteinander umgehen.'},
        {href: '/legal/trademark', title: 'Markenrichtlinie', description: 'Wie der Name und das Logo „rumahl“ verwendet werden dürfen — Forks, Weitergabe und Referenzen.'},
        {href: '/security', title: 'Security', description: 'Sicherheitslücken melden, Severity-Scoring, Disclosure und CVE-Vergabe.'},
      ],
    },
  ],
};

const copy = {
  en: {
    badge: 'Legal',
    title: 'Legal',
    titleAccent: 'Policies',
    lead: 'Find all the information you need about our policies and terms in one convenient location.',
    complianceTitle: 'EU & German law compliance',
    compliance:
      'Our policies follow the General Data Protection Regulation (GDPR), the Digital Services Act (DSA), the German Digital Services Act (DDG) and German civil law (BGB). Every document is available in English and German.',
    questions: 'Questions?',
    questionsText: 'If you have any questions or concerns, please don’t hesitate to contact us.',
  },
  de: {
    badge: 'Rechtliches',
    title: 'Rechtliche',
    titleAccent: 'Richtlinien',
    lead: 'Alle Richtlinien und rechtlichen Informationen von rumahl an einem Ort.',
    complianceTitle: 'DSGVO- & DDG-Konformität',
    compliance:
      'Unsere Richtlinien folgen der Datenschutz-Grundverordnung (DSGVO), dem Digital Services Act (DSA), dem Digitale-Dienste-Gesetz (DDG) und dem BGB. Jedes Dokument ist auf Deutsch und Englisch verfügbar.',
    questions: 'Fragen?',
    questionsText: 'Bei Fragen oder Anliegen kontaktiere uns gerne.',
  },
};

export default function LegalPage() {
  const {lang} = useLang();
  const t = copy[lang];
  const [query,setQuery]=useState('');
  const shown=categories[lang].map(category=>({...category,cards:category.cards.filter(card=>(category.label+' '+card.title+' '+card.description).toLowerCase().includes(query.trim().toLowerCase()))})).filter(category=>category.cards.length);
  return (
    <>
      <section className="content-hero">
        <div className="content-hero-inner">
          <span className="content-eyebrow">
            <Scale size={13} /> {t.badge}
          </span>
          <h1>
            {t.title} <span className="gradient-text">{t.titleAccent}</span>
          </h1>
          <p className="lead">{t.lead}</p>
          <div className="content-search"><FileText size={19}/><input aria-label={lang==='de'?'Rechtsdokumente suchen':'Find a legal document'} placeholder={lang==='de'?'Rechtsdokumente suchen…':'Find a legal document…'} value={query} onChange={event=>setQuery(event.target.value)}/></div>
        </div>
      </section>

      <section className="content-section" id="documents">
        {shown.length===0&&<p role="status">{lang==='de'?'Keine passenden Dokumente.':'No matching documents.'}</p>}
        {shown.map((category) => (
          <div className="content-legal-group" key={category.key}>
            <h3 style={{display: 'flex', alignItems: 'center', gap: 12}}>
              <category.icon size={20} style={{color: 'var(--content-accent)'}} />
              {category.label}
            </h3>
            <div className="content-grid legal-directory">
              {category.cards.map((card) => (
                <Link key={card.href} href={card.href} className="content-card" style={{borderRadius: 22}}>
                  <div className="content-card-body">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="content-card-meta">
                      <b>
                        {lang === 'de' ? 'Lesen' : 'Read'} <ArrowRight size={14} />
                      </b>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="content-section" id="compliance">
        <div className="content-note" style={{display: 'flex', gap: 18, alignItems: 'flex-start'}}>
          <ShieldCheck size={22} style={{color: 'var(--content-accent)', flexShrink: 0, marginTop: 2}} />
          <div>
            <strong style={{display: 'block', color: 'var(--foreground)', marginBottom: 6}}>{t.complianceTitle}</strong>
            {t.compliance}
          </div>
        </div>
      </section>

      <section className="content-section" id="contact">
        <div style={{maxWidth: 560}}>
          <div className="content-card" style={{padding: 30, borderRadius: 26}}>
            <FileText size={22} style={{color: 'var(--content-accent)'}} />
            <h2 style={{fontSize: 20, fontWeight: 600, marginTop: 12}}>{t.questions}</h2>
            <p style={{marginTop: 10, fontSize: 14, lineHeight: 1.6, color: 'var(--foreground-muted)'}}>{t.questionsText}</p>
            <a
              href={`mailto:${company.email}`}
              style={{display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 18, color: 'var(--content-accent)', fontSize: 14, fontWeight: 600}}
            >
              <Mail size={16} /> {company.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
