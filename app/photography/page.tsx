import type {Metadata} from 'next';
import {Navigation} from '@/components/rumahl/navigation';
import {Footer} from '@/components/rumahl/sections';
import {EditorialImage} from '@/components/rumahl/home-continuation';
import {editorialPhotos} from '@/content/homepage';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Photography — rumahl',
  description: 'The photographers behind the hardware, networking, storage and development images on this website.',
};

const subjects = [
  {photo: editorialPhotos.hardware, title: 'Local hardware', text: 'A Raspberry Pi circuit board photographed by Harrison Broadbent. An illustration of local computing, not a claim of support for this board.'},
  {photo: editorialPhotos.network, title: 'Home networking', text: 'A desktop Ethernet switch photographed by User_Pascal. Used alongside the integration and networking documentation.'},
  {photo: editorialPhotos.storage, title: 'Physical storage', text: 'An opened hard disk photographed by William Warby. Used for files, storage and local data.'},
  {photo: editorialPhotos.development, title: 'Software development', text: 'A working laptop photographed by Jantine Doornbos. The screen shows an independent development environment, not rumahl OS.'},
];

export default function PhotographyPage() {
  return <>
    <Navigation />
    <main className="portal-scope content-main">
      <section className="content-hero">
        <div className="content-hero-inner">
          <span className="content-eyebrow">Photography</span>
          <h1>Images by people.</h1>
          <p className="lead">We use photographs of hardware, networks, storage and software development.
            We do not use AI-generated imagery. These Unsplash photographs are credited to their creators;
            we plan to add our own photography as the project develops.</p>
        </div>
      </section>
      {subjects.map(({photo, title, text}) => (
        <section className="content-section" key={photo.src}>
          <div className="content-head"><div><h2>{title}</h2><p>{text}</p></div></div>
          <EditorialImage photo={photo} className={styles.image} />
        </section>
      ))}
      <section className="content-section">
        <p>These editorial photographs are used under the <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">Unsplash License</a>.
          Each credit links to the original photograph and its creator.</p>
      </section>
    </main>
    <Footer />
  </>;
}
