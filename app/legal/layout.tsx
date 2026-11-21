import {ScrollMotion} from '@/components/rumahl/motion';
import {Navigation} from '@/components/rumahl/navigation';
import {Footer} from '@/components/rumahl/sections';

export default function LegalLayout({children}: {children: React.ReactNode}) {
  return (
    <div data-section="legal">
      <Navigation />

      <main className="portal-scope content-main">{children}</main>
      <Footer /><ScrollMotion/>
    </div>
  );
}
