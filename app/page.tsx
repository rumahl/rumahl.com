import {Navigation} from '@/components/rumahl/navigation';
import {Hero} from '@/components/rumahl/hero';
import {ScrollMotion} from '@/components/rumahl/motion';
import {HomeContinuation} from '@/components/rumahl/home-continuation';
import {OS, Footer} from '@/components/rumahl/sections';
import {HomeAbout, HomePaths, HomeLatest, HomeCommunity, HomePrivacy} from '@/components/rumahl/home';
import {HomeApps} from '@/components/rumahl/home-apps';
import {HomeIntegrations} from '@/components/rumahl/integrations';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <OS />
        <HomeAbout />
        <HomeApps />
        <HomeIntegrations />
        <HomePaths />
        <HomeLatest />
        <HomeContinuation />
        <HomeCommunity />
        <HomePrivacy />
      </main>
      <Footer />
      <ScrollMotion />
    </>
  );
}
