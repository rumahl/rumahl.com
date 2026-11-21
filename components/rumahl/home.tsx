import {IntegrationStory} from './integration-story';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bug,
  Cable,
  Code2,
  EyeOff,
  GitFork,
  HardDrive,
  MessageSquare,
  Server,
  ShieldCheck,
  UserRound,
  Users,
} from 'lucide-react';
import {formatPostDate} from '@/lib/blog';
import {getBlogPosts, communityUrl} from '@/lib/discourse';
import {CommunityUnavailable} from './community-unavailable';
import styles from './home.module.css';

const REPO_URL = 'https://github.com/rumahl/rumahl';

function ExternalLink({href, children}: {href: string; children: React.ReactNode}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function HomeAbout() {
  return <IntegrationStory />;
}

export function HomePaths() {
  return (
    <section className={styles.paths}>
      <div className={styles.sectionHead}>
        <div>
          <span className="eyebrow muted">START WHERE YOU ARE</span>
          <h2>Ways to get started.</h2>
        </div>
        <p>
          Start with rumahl OS, bring the services you already run, or build the integration that is still missing.
          The guides explain the current requirements and limitations.
        </p>
      </div>

      <div className={styles.pathGrid}>
        <article className={styles.pathCard}>
          <UserRound size={22} />
          <h3>Try the development version</h3>
          <p>
            Begin with the browser demo or run the developer server on Linux or WSL2. The current system uses local
            accounts and is intended for development and testing. A general-purpose hardware installer is not available yet.
          </p>
          <div className={styles.pathLinks}>
            <Link href="/docs/installation">
              Installation guide <ArrowRight size={14} />
            </Link>
            <Link href="/docs">Documentation</Link>
            <Link href="/demo">Live demo</Link>
          </div>
        </article>

        <article className={styles.pathCard}>
          <Cable size={22} />
          <h3>Bring your existing setup</h3>
          <p>
            Read the proposed integration model for TrueNAS, OpenMediaVault, Nextcloud and Home Assistant.
            Provider support is still being developed; the documentation describes the current boundaries.
          </p>
          <div className={styles.pathLinks}>
            <Link href="/docs/external-integrations">
              Connect a service <ArrowRight size={14} />
            </Link>
            <Link href="/docs/integration-capabilities">Capabilities</Link>
            <Link href="/integrations">Integration levels</Link>
          </div>
        </article>

        <article className={styles.pathCard}>
          <Code2 size={22} />
          <h3>Build an integration</h3>
          <p>
            Write a connector or a provider against the open developer contracts. Apps and integrations share the same
            package and capability model, so a new system can become part of the same home.
          </p>
          <div className={styles.pathLinks}>
            <Link href="/developers/connectors">
              Connector docs <ArrowRight size={14} />
            </Link>
            <Link href="/developers/app-packages">App development</Link>
            <ExternalLink href={REPO_URL}>
              <span className={styles.inlineLink}>GitHub</span>
            </ExternalLink>
          </div>
        </article>
      </div>
    </section>
  );
}

type LatestCard = {
  kind: 'release' | 'post';
  eyebrow: string;
  title: string;
  text: string;
  date: string;
  href: string;
};

export async function HomeLatest() {
  const {posts, status} = await getBlogPosts('all');
  const cards: LatestCard[] = posts.slice(0, 4).map((post) => ({
    kind: post.category === 'Release' ? 'release' : 'post',
    eyebrow: post.category,
    title: post.title,
    text: post.excerpt,
    date: formatPostDate(post.date),
    href: '/blog/' + post.slug,
  }));
  return (
    <section className={styles.latest} id="latest">
      <div className={styles.sectionHead}>
        <div>
          <span className="eyebrow muted">LATEST</span>
          <h2>Updates, releases and notes.</h2>
        </div>
        <div className={styles.headLinks}>
          <Link href="/releases">
            All releases <ArrowRight size={14} />
          </Link>
          <Link href="/blog">
            All posts <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {status === 'unavailable' ? (
        <CommunityUnavailable url={communityUrl} />
      ) : (
        <div className={styles.latestGrid}>
          {cards.map((card) => (
            <Link
              className={styles.latestCard}
              key={card.eyebrow + card.title}
              href={card.href}
              data-kind={card.kind}
            >
              <span className={styles.latestEyebrow}>{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <span className={styles.latestMeta}>
                {card.date}
                <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

const community = [
  {icon: GitFork, title: 'Source & issues', text: 'The Apache-2.0 repository on GitHub.', href: REPO_URL},
  {
    icon: MessageSquare,
    title: 'Discussions',
    text: 'Ask questions, propose ideas, share setups.',
    href: REPO_URL + '/discussions',
  },
  {icon: Bug, title: 'Report a bug', text: 'Open an issue with a clear reproduction.', href: REPO_URL + '/issues/new'},
  {icon: Users, title: 'Contributing', text: 'Branches, commits, sign-off and reviews.', href: '/legal/contributing'},
  {icon: ShieldCheck, title: 'Security', text: 'Report vulnerabilities privately.', href: '/security'},
  {
    icon: BookOpen,
    title: 'Code of conduct',
    text: 'How we treat each other across the project.',
    href: '/legal/code-of-conduct',
  },
] as const;

export function HomeCommunity() {
  return (
    <section className={styles.community}>
      <div className={styles.sectionHead}>
        <div>
          <span className="eyebrow muted">OPEN &amp; COMMUNITY</span>
          <h2>Take part in the project.</h2>
        </div>
        <p>
          rumahl is developed in public and grows through the people who use it. You don&apos;t have to be a developer to
          take part — feedback, bug reports, ideas and translations all help. If you do write code, you are just as
          welcome.
        </p>
      </div>
      <div className={styles.communityGrid}>
        {community.map((item) => {
          const inner = (
            <>
              <item.icon size={20} />
              <div>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            </>
          );
          return item.href.startsWith('http') ? (
            <a className={styles.communityCard} key={item.title} href={item.href} target="_blank" rel="noreferrer">
              {inner}
            </a>
          ) : (
            <Link className={styles.communityCard} key={item.title} href={item.href}>
              {inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

const privacyPoints = [
  {icon: EyeOff, text: 'No tracking, no advertising and no profiling.'},
  {icon: UserRound, text: 'Local accounts authenticate access to the platform.'},
  {icon: HardDrive, text: 'Your files, photos and apps stay on your own hardware.'},
  {icon: Server, text: 'Only your IP address and standard server logs are processed, to deliver this website securely.'},
] as const;

export function HomePrivacy() {
  return (
    <section className={styles.privacy}>
      <div className={styles.privacyCopy}>
        <span className="eyebrow muted">PRIVACY</span>
        <h2>Local data and website privacy.</h2>
        <p>
          rumahl is local-first, and so is this website. There is no tracking, no advertising and no profiling — and we
          never sell data. The only thing processed when you visit is your IP address and standard server logs, which are
          needed to deliver the page securely.
        </p>
        <div className={styles.aboutLinks}>
          <Link href="/legal/privacy">
            Read the privacy policy <ArrowRight size={15} />
          </Link>
          <Link href="/legal/cookies">Cookie policy</Link>
        </div>
      </div>

      <ul className={styles.privacyList}>
        {privacyPoints.map((point) => (
          <li key={point.text}>
            <point.icon size={20} />
            <span>{point.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
