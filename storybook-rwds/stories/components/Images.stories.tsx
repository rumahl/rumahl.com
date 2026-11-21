import type {Meta, StoryObj} from '@storybook/react-vite';
import {EditorialImage} from '../../../components/rumahl/home-continuation';
import {DeviceArt} from '../../../components/rumahl/device-art';
import {editorialPhotos} from '../../../content/homepage';
import styles from '../../../components/rumahl/home-continuation.module.css';

const meta = {
  title: 'Components/Images',
  parameters: {layout: 'fullscreen'},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const EditorialImageStory: Story = {
  render: () => (
    <div className="sb-page">
      <div className={styles.landscape} style={{maxWidth: 920}}>
        <EditorialImage photo={editorialPhotos.hardware} action={{label: 'Open the reference', href: '#example'}} eager />
      </div>
    </div>
  ),
};

export const DeviceArtwork: Story = {
  render: () => (
    <div className="sb-page">
      <div className="highlight-grid" style={{marginTop: 0}}>
        {(['sbc', 'minipc', 'server'] as const).map((kind) => (
          <article className="highlight-card" key={kind}>
            <div style={{color: 'var(--accent)', marginBottom: 10}}><DeviceArt kind={kind} /></div>
            <h3>{kind}</h3>
            <p>Device artwork used by the installation planner.</p>
          </article>
        ))}
      </div>
    </div>
  ),
};
