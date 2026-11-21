import Link from 'next/link';
import {ArrowDown, ArrowUpRight, GitFork} from 'lucide-react';
import {BrandIcon} from './brand';

const REPO_URL = 'https://github.com/rumahl/rumahl';

// Set this to the final rumahl film URL. No third-party stock footage.
const HERO_VIDEO: string | undefined = undefined;

export function Hero() {
  return (
    <section className="hero-scroll" data-scroll>
      <div className="hero-sticky">
        <div className="hero-media" data-media-slot="hero-video">
          {HERO_VIDEO && <video autoPlay muted loop playsInline preload="none" src={HERO_VIDEO} />}
          <div className="hero-grain" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-line" /> INTEGRATE, DON’T REPLACE · LOCAL-FIRST · YOUR HARDWARE
          </p>
          <h1>
            Give your home
            <br />
            a <span>new face.</span>
          </h1>
          <p className="hero-description">
            rumahl OS is the open place where the apps and services you already run come together. Keep them where they
            are, or let rumahl provide them — in one home on your hardware.
          </p>
          <div className="hero-buttons">
            <Link className="button white" href="/os">
              Explore rumahl OS <ArrowUpRight size={18} />
            </Link>
            <Link className="text-link" href="/integrations">
              How integration works <ArrowUpRight size={16} />
            </Link>
            <a className="text-link" href={REPO_URL} target="_blank" rel="noreferrer">
              GitHub <GitFork size={16} />
            </a>
          </div>
        </div>
        <div className="hero-bottom">
          <span>INTEGRATE, DON’T REPLACE.</span>
          <a href="#latest">
            Project updates <ArrowDown size={16} />
          </a>
        </div>
        <a className="surface-notch hero-notch" href="#latest" aria-label="Explore rumahl">
          <span>01 — EXPLORE</span><ArrowDown size={20} />
        </a>
        <div className="hero-arrival" aria-hidden="true">
          <BrandIcon />
          <span>Your apps. One home.</span>
        </div>
      </div>
    </section>
  );
}
