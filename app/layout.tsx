import type {Metadata} from 'next';
import {Inter, JetBrains_Mono} from 'next/font/google';
import './globals.css';
import './knowledge.css';
import './blog.css';
import '@/components/rwds/rwds.css';
import {SearchProvider} from '@/components/rumahl/search';
import {LanguageProvider} from '@/components/rumahl/language';
import {ScrollProgress} from '@/components/rumahl/motion';

const inter = Inter({subsets: ['latin'], display: 'swap', variable: '--font-rumahl'});
const jetbrainsMono = JetBrains_Mono({subsets: ['latin'], display: 'swap', variable: '--font-jetbrains-mono'});

export const metadata: Metadata = {
  metadataBase: new URL('https://rumahl.com'),
  title: 'rumahl — Give your home a new face.',
  description:
    'Integrate, don’t replace. rumahl OS brings independent home services together on hardware you control. The open-source platform is still in active development.',
  icons: {icon: '/favicon.svg'},
  alternates: {types: {'application/rss+xml': '/rss.xml', 'text/plain': '/llms.txt'}},
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <LanguageProvider>
          <SearchProvider>{children}</SearchProvider>
        </LanguageProvider>
        <ScrollProgress />
      </body>
    </html>
  );
}
