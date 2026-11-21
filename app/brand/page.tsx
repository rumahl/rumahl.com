import type {CSSProperties} from 'react';
import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowRight, ArrowUpRight, Check, Download, ShieldCheck, Type, X} from 'lucide-react';
import {Navigation} from '@/components/rumahl/navigation';
import {Footer} from '@/components/rumahl/sections';
import {SectionSubNav} from '@/components/rumahl/section-subnav';
import {PhotoCredit} from '@/components/rumahl/photo-credit';
import {BrandConstructionMark, BrandIcon, BrandLogo} from '@/components/rumahl/brand';
import {BrandColorWheel} from '@/components/rumahl/color-wheel';
import {editorialPhotos} from '@/content/homepage';
import {
  brandClearSpace,
  brandColourPolicy,
  brandColorGuidance,
  brandConstruction,
  brandDoNot,
  brandDownloads,
  brandIntro,
  brandLockupSpecs,
  brandMinSizes,
  brandNaming,
  brandPartnerExample,
  brandPartnerRules,
  brandPermissions,
  brandProductLogoRules,
  brandProductLogos,
  brandSpectrum,
  brandTintGuide,
  brandTintedBackgrounds,
  brandTintNote,
  brandColorFiles,
  brandTrademarkNote,
  brandTypography,
} from '@/content/brand';
import styles from './brand.module.css';

export const metadata: Metadata = {
  title: 'Brand guidelines — rumahl',
  description:
    'Naming, logo, avatars, wordmark, construction, colour, usage, partner lockups, permissions and downloadable SVG assets for the rumahl brand.',
  alternates: {
    canonical: '/brand',
    types: {'text/markdown': '/brand.md'},
  },
};

const brandSections = [
  {id: 'naming', label: 'Naming'},
  {id: 'logo', label: 'Logo'},
  {id: 'avatars', label: 'Avatars'},
  {id: 'wordmark', label: 'Wordmark'},
  {id: 'product-logos', label: 'Product logos'},
  {id: 'construction', label: 'Construction'},
  {id: 'usage', label: 'Usage'},
  {id: 'colour', label: 'Colour'},
  {id: 'examples', label: 'Examples'},
  {id: 'dont', label: 'Do not'},
  {id: 'partner', label: 'Partner lockup'},
  {id: 'permissions', label: 'Permissions'},
  {id: 'trademarks', label: 'Trademarks'},
];

const monogramAssets = brandDownloads.filter((item) => /monogram|app icon/i.test(item.title));
const avatarAssets = brandDownloads.filter((item) => /avatar/i.test(item.title));
const wordmarkAssets = brandDownloads.filter((item) => /wordmark/i.test(item.title));

function BrandAssetList({items}: {items: {title: string; href: string; meta: string}[]}) {
  return (
    <dl className={styles.assetList}>
      {items.map((item) => (
        <div key={item.href}>
          <dt>{item.title}</dt>
          <dd>
            <a href={item.href} download>
              {item.meta} <Download size={13} />
            </a>
          </dd>
        </div>
      ))}
    </dl>
  );
}

const permissionGroups = [
  {key: 'allowed', title: 'Allowed', icon: Check, items: brandPermissions.allowed},
  {key: 'ask', title: 'Ask first', icon: ShieldCheck, items: brandPermissions.ask},
  {key: 'not-allowed', title: 'Not allowed', icon: X, items: brandPermissions.notAllowed},
] as const;

function UsageExamples() {
  const hardware = editorialPhotos.hardware;
  const storage = editorialPhotos.storage;

  return (
    <>
    <section className={`content-section ${styles.usageSection}`} id="examples">
      <div className="content-head">
        <div>
          <span className="content-eyebrow">09 — Examples</span>
          <h2>Do.</h2>
        </div>
        <p>
          Use the mark as supplied, in one solid colour, on a calm surface. On photography, use white or black only.
        </p>
      </div>
      <div className={styles.exampleGrid}>
        <article className={styles.exampleCard} data-kind="do">
          <div className={styles.exampleVisual}>
            <span style={{color: 'var(--accent)'}}>
              <BrandLogo className={styles.exampleWordmark} />
            </span>
          </div>
          <div className={styles.exampleMeta}>
            <span className={styles.exampleBadge} data-kind="do">
              <Check size={13} /> Do
            </span>
            <strong>Use one solid colour</strong>
            <p>All hues are allowed at the approved tint. Ink or rumahl green is usually clearer; the whole mark keeps one colour value.</p>
          </div>
        </article>

        <article className={styles.exampleCard} data-kind="do">
          <div className={styles.exampleVisual}>
            <span className={styles.exampleMonogram}>
              <BrandIcon />
            </span>
          </div>
          <div className={styles.exampleMeta}>
            <span className={styles.exampleBadge} data-kind="do">
              <Check size={13} /> Do
            </span>
            <strong>Use the monogram alone</strong>
            <p>For app icons, launchers, favicons and small spaces. Never add the wordmark.</p>
          </div>
        </article>

        <article className={styles.exampleCard} data-kind="do">
          <div className={`${styles.exampleVisual} ${styles.exampleVisualFlush}`}>
            <div className={styles.examplePhotoPair}>
              <div
                className={`${styles.examplePhoto} ${styles.examplePhotoDark}`}
                style={{backgroundImage: `url(${hardware.src})`}}
              >
                <span style={{color: '#fff'}}>
                  <BrandLogo className={styles.examplePhotoMark} />
                </span>
              </div>
              <div
                className={`${styles.examplePhoto} ${styles.examplePhotoLight}`}
                style={{backgroundImage: `url(${storage.src})`}}
              >
                <span style={{color: '#000'}}>
                  <BrandLogo className={styles.examplePhotoMark} />
                </span>
              </div>
            </div>
          </div>
          <div className={styles.exampleMeta}>
            <span className={styles.exampleBadge} data-kind="do">
              <Check size={13} /> Do
            </span>
            <strong>White or black on photography</strong>
            <p>On photos and video, only white or black is allowed.</p>
            <div className={styles.exampleCredits}>
              <PhotoCredit src={hardware.src} linked />
              <PhotoCredit src={storage.src} linked />
            </div>
          </div>
        </article>

      </div>
    </section>

    <section className={`content-section ${styles.dontSection}`} id="dont">
      <div className="content-head">
        <div>
          <span className="content-eyebrow">10 — Do not</span>
          <h2>Common mistakes.</h2>
        </div>
        <p>
          These are the most common ways the mark loses its shape or meaning. The list below the examples is the short
          version.
        </p>
      </div>
      <div className={styles.exampleGrid}>
        <article className={styles.exampleCard} data-kind="dont">
          <div className={styles.exampleVisual}>
            <BrandLogo className={styles.exampleStretch} />
          </div>
          <div className={styles.exampleMeta}>
            <span className={styles.exampleBadge} data-kind="dont">
              <X size={13} /> Don&apos;t
            </span>
            <strong>Stretch or squeeze</strong>
            <p>Keep the supplied proportions. Do not scale one axis only.</p>
          </div>
        </article>

        <article className={styles.exampleCard} data-kind="dont">
          <div className={styles.exampleVisual}>
            <span
              className={styles.exampleGradient}
              role="img"
              aria-label="rumahl wordmark with a multicolour gradient"
            />
          </div>
          <div className={styles.exampleMeta}>
            <span className={styles.exampleBadge} data-kind="dont">
              <X size={13} /> Don&apos;t
            </span>
            <strong>Gradient or multiple colours</strong>
            <p>One mark, one solid colour. No gradients or colour mixes inside the mark.</p>
          </div>
        </article>

        <article className={styles.exampleCard} data-kind="dont">
          <div className={styles.exampleVisual}>
            <span style={{color: 'var(--accent)'}}>
              <BrandLogo className={styles.exampleShadow} />
            </span>
          </div>
          <div className={styles.exampleMeta}>
            <span className={styles.exampleBadge} data-kind="dont">
              <X size={13} /> Don&apos;t
            </span>
            <strong>Shadows or outlines</strong>
            <p>Do not add effects, bevels, outlines or decorative containers.</p>
          </div>
        </article>

        <article className={styles.exampleCard} data-kind="dont">
          <div className={`${styles.exampleVisual} ${styles.exampleVisualFlush}`}>
            <div
              className={`${styles.examplePhoto} ${styles.examplePhotoDark}`}
              style={{backgroundImage: `url(${hardware.src})`}}
            >
              <span style={{color: '#b0793a'}}>
                <BrandLogo className={styles.examplePhotoMark} />
              </span>
            </div>
          </div>
          <div className={styles.exampleMeta}>
            <span className={styles.exampleBadge} data-kind="dont">
              <X size={13} /> Don&apos;t
            </span>
            <strong>Colour on photography</strong>
            <p>On images, a coloured mark is not allowed. Use white or black.</p>
            <div className={styles.exampleCredits}>
              <PhotoCredit src={hardware.src} linked />
            </div>
          </div>
        </article>

        <article className={styles.exampleCard} data-kind="dont">
          <div className={styles.exampleVisual}>
            <div className={styles.exampleNoLockup} aria-label="Do not combine the monogram and the wordmark">
              <span>ICON</span>
              <i>×</i>
              <span>WORDMARK</span>
            </div>
          </div>
          <div className={styles.exampleMeta}>
            <span className={styles.exampleBadge} data-kind="dont">
              <X size={13} /> Don&apos;t
            </span>
            <strong>Combine the two marks</strong>
            <p>No lockup. The monogram and the wordmark are always shown separately.</p>
          </div>
        </article>
      </div>
      <ul className={styles.dontList}>
        {brandDoNot.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
    </>
  );
}

export default function BrandPage() {
  return (
    <>
      <Navigation />
      <main
        className={`portal-scope content-main ${styles.page}`}
        style={{'--content-accent': 'var(--accent)'} as CSSProperties}
      >
        <section className={`content-hero ${styles.hero}`}>
          <div className={`content-hero-inner ${styles.heroInner}`}>
            <span className="content-eyebrow">Brand guidelines</span>
            <BrandLogo className={styles.heroWordmark} />
            <h1>
              Brand <span className="gradient-text">guidelines</span>.
            </h1>
            <p className="lead">{brandIntro}</p>
            <div className={styles.heroActions}>
              <a className="button" href="/brand/rumahl-brandmark.zip" download>
                Download all assets <Download size={16} />
              </a>
              <Link className="text-link" href="/legal/trademark">
                Trademark policy <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <SectionSubNav label="Brand" items={brandSections} />

        <section className={`content-section ${styles.namingSection}`} id="naming">
          <div className="content-head">
            <div>
              <span className="content-eyebrow">01 — Naming</span>
              <h2>Write it as one word.</h2>
            </div>
            <p>{brandNaming.intro}</p>
          </div>
          <div className={styles.namingGrid}>
            <div className={styles.namingCard} data-kind="do">
              <span className={styles.namingLabel}>
                <Check size={14} /> Write
              </span>
              <ul>
                {brandNaming.write.map((item) => (
                  <li key={item}>
                    <code>{item}</code>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.namingCard} data-kind="dont">
              <span className={styles.namingLabel}>
                <X size={14} /> Don&apos;t write
              </span>
              <ul>
                {brandNaming.dontWrite.map((item) => (
                  <li key={item}>
                    <s>{item}</s>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className={styles.namingNotes}>
            {brandNaming.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>

        <section className={`content-section ${styles.markSection}`} id="logo">
          <div className="content-head">
            <div>
              <span className="content-eyebrow">02 — Logo</span>
              <h2>The monogram.</h2>
            </div>
            <p>
              The “r” is for app icons, avatars, launchers and small spaces. It is a separate mark; never place the
              wordmark beside it.
            </p>
          </div>
          <div className={styles.markFeature}>
            <div className={`${styles.markDisplay} ${styles.markDisplayIcon}`}>
              <BrandIcon />
            </div>
            <div className={styles.markDetails}>
              <h3>Monogram</h3>
              <p>Use the supplied proportions. Keep the monogram alone wherever the wordmark would be too small.</p>
              <BrandAssetList items={monogramAssets} />
            </div>
          </div>
        </section>

        <section className={`content-section ${styles.markSection}`} id="avatars">
          <div className="content-head">
            <div>
              <span className="content-eyebrow">03 — Avatars</span>
              <h2>The monogram as an avatar.</h2>
            </div>
            <p>
              Use the monogram, never the wordmark. Center it in a square so it survives a round crop. Light tints and
              dark backgrounds are allowed.
            </p>
          </div>
          <div className={styles.avatarFeature}>
            <div className={styles.avatarPreviews}>
              <div className={styles.avatarPreview}>
                <span className={styles.avatarCircle} style={{background: '#eef4ee', color: '#28694c'}}>
                  <BrandIcon />
                </span>
                <small>Light tint</small>
              </div>
              <div className={styles.avatarPreview}>
                <span className={styles.avatarCircle} style={{background: '#0f1c16', color: '#f8faf7'}}>
                  <BrandIcon />
                </span>
                <small>Dark</small>
              </div>
              <div className={styles.avatarPreview}>
                <span className={styles.avatarCircle} style={{background: '#f6f1e7', color: '#18201c'}}>
                  <BrandIcon />
                </span>
                <small>Sand tint</small>
              </div>
            </div>
            <div className={styles.markDetails}>
              <h3>Avatar</h3>
              <p>
                Keep the mark centered and inside the circular safe area. Use one solid colour; the background may be a
                light tint. Never add a second mark or text.
              </p>
              <div className={styles.avatarSizes} aria-label="Avatar sizes">
                {[64, 48, 32, 24, 16].map((size) => (
                  <span
                    className={styles.avatarSize}
                    key={size}
                    style={{width: size, height: size, background: '#eef4ee', color: '#28694c'}}
                    title={`${size} px avatar`}
                  >
                    <BrandIcon />
                  </span>
                ))}
              </div>
              <BrandAssetList items={avatarAssets} />
            </div>
          </div>
        </section>

        <section className={`content-section ${styles.markSection}`} id="wordmark">
          <div className="content-head">
            <div>
              <span className="content-eyebrow">04 — Wordmark</span>
              <h2>The full name.</h2>
            </div>
            <p>
              The full rumahl name in the supplied letterforms. Use it wherever there is room to spell out the name. It
              is a separate mark; never add the monogram beside it.
            </p>
          </div>
          <div className={styles.markFeature}>
            <div className={`${styles.markDisplay} ${styles.markDisplayWordmark}`}>
              <BrandLogo />
            </div>
            <div className={styles.markDetails}>
              <h3>Wordmark</h3>
              <p>One drawing, not a font. The same r shape builds the word; see the construction below.</p>
              <BrandAssetList items={wordmarkAssets} />
            </div>
          </div>
        </section>

        <section className={`content-section ${styles.productLogoSection}`} id="product-logos">
          <div className="content-head">
            <div>
              <span className="content-eyebrow">05 — Product logos</span>
              <h2>The r plus a product name.</h2>
            </div>
            <p>
              Product logos identify an official rumahl surface. The r and the product name use the same height, and the
              name is set in Inter Medium. They are reserved and may not be used by third parties.
            </p>
          </div>
          <span className={styles.reservedBadge}>Reserved · not for third parties</span>
          <div className={styles.productLogoGrid}>
            {brandProductLogos.map((logo, index) => (
              <div className={styles.productLogoCard} data-tone={index === 0 ? 'light' : 'dark'} key={logo.name}>
                <span className={styles.productLogo}>
                  <BrandIcon />
                  <i aria-hidden="true" />
                  <strong>{logo.name}</strong>
                </span>
                <small>{logo.surface}</small>
              </div>
            ))}
          </div>
          <div className={styles.productLogoSpec}>
            <div>
              <span>Font</span>
              <strong>Inter Medium 500</strong>
            </div>
            <div>
              <span>r height</span>
              <strong>1 × font size</strong>
            </div>
            <div>
              <span>Example</span>
              <strong>30 px / 30 px</strong>
            </div>
            <div>
              <span>Divider</span>
              <strong>1 px · equal gap</strong>
            </div>
          </div>
          <p className={styles.productLogoSpecNote}>
            The r matches the total line height of the product name. The i dot and the g descender may extend beyond
            the r — that is allowed. In Inter, use 1× the font size for the r and center the text against it.
          </p>
          <ul className={styles.productLogoRules}>
            {brandProductLogoRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </section>

        <section className={`content-section ${styles.constructionSection}`} id="construction">
          <div className={styles.constructionHead}>
            <span className="content-eyebrow">06 — {brandConstruction.eyebrow}</span>
            <h2>{brandConstruction.title}</h2>
            <p>{brandConstruction.text}</p>
          </div>
          <div className={styles.constructionCanvas}>
            <BrandConstructionMark className={styles.constructionMark} />
            <div className={styles.constructionLegend}>
              {brandConstruction.parts.map((part) => (
                <span key={part.letter}>
                  <b>{part.letter}</b> {part.count}
                </span>
              ))}
            </div>
          </div>
          <p className={styles.constructionNote}>
            <strong>Colour</strong> marks the r parts. The outlined <strong>l</strong> is the straight stem. Not a
            lockup.
          </p>
        </section>

        <section className={`content-section ${styles.ruleSection}`} id="usage">
          <div className="content-head">
            <div>
              <span className="content-eyebrow">07 — Usage</span>
              <h2>{brandClearSpace.title}</h2>
            </div>
            <p>{brandClearSpace.text}</p>
          </div>
          <div className={styles.clearSpaceGrid}>
            <div className={styles.clearSpaceCard} data-kind="monogram">
              <span className={styles.clearSpaceCardLabel}>Monogram</span>
              <div
                className={styles.clearStage}
                aria-label="Monogram clear space: x equals the height of the r on every side"
              >
                <span className={styles.clearDimTop}>x</span>
                <span className={styles.clearDimLeft}>x</span>
                <span className={styles.clearDimRight}>x</span>
                <span className={styles.clearDimBottom}>x</span>
                <BrandIcon className={styles.clearMarkMonogram} />
              </div>
              <p className={styles.clearSpaceCardText}>
                <strong>{brandClearSpace.rule}.</strong> Keep this distance on every side. The dashed frame is the
                boundary.
              </p>
            </div>
            <div className={styles.clearSpaceCard} data-kind="wordmark">
              <span className={styles.clearSpaceCardLabel}>Wordmark</span>
              <div
                className={styles.clearStage}
                aria-label="Wordmark clear space: x equals the height of the r on every side"
              >
                <span className={styles.clearDimTop}>x</span>
                <span className={styles.clearDimLeft}>x</span>
                <span className={styles.clearDimRight}>x</span>
                <span className={styles.clearDimBottom}>x</span>
                <BrandLogo className={styles.clearMarkWordmark} />
              </div>
              <p className={styles.clearSpaceCardText}>
                <strong>{brandClearSpace.rule}.</strong> In the wordmark, x is the height of the r inside the drawing.
                Keep it on every side.
              </p>
            </div>
          </div>
          <div className={styles.sizeSpecs}>
            <div className={styles.minSizes}>
              {brandMinSizes.map((size) => (
                <div className={styles.minSize} key={size.label}>
                  <span>{size.label}</span>
                  <strong>{size.value}</strong>
                  <small>{size.note}</small>
                </div>
              ))}
            </div>
            <ul className={styles.specList}>
              <li>
                <span>Clear space</span>
                <strong>x = height of the r</strong>
              </li>
              <li>
                <span>Partner lockup</span>
                <strong>same height, same gap</strong>
              </li>
              <li>
                <span>On photography</span>
                <strong>white or black only</strong>
              </li>
              <li>
                <span>Colour</span>
                <strong>one solid value</strong>
              </li>
            </ul>
          </div>
          <span className={styles.minSizeTitle}>Minimum sizes at actual size</span>
          <div className={styles.minSizePanels}>
            <div className={styles.minSizePanel}>
              <div className={styles.minSizeMeasureIcon}>
                <span className={styles.minSizeRuleVertical}>
                  <span>16 px</span>
                </span>
                <BrandIcon className={styles.minIcon} />
              </div>
              <strong>Monogram</strong>
              <p>At least 16 px high. Below this, it blurs.</p>
            </div>
            <div className={styles.minSizePanel}>
              <div className={styles.minSizeMeasureWordmark}>
                <span className={styles.minSizeRuleHorizontal}>
                  <span>72 px</span>
                </span>
                <BrandLogo className={styles.minWordmark} />
              </div>
              <strong>Wordmark</strong>
              <p>At least 72 px wide. Below this, use the monogram instead.</p>
            </div>
          </div>
          <p className={styles.minSizeNote}>
            The panels show the marks at their minimum size. Keep whole pixels where possible.
          </p>
        </section>

        <section className={`content-section ${styles.colourSection}`} id="colour">
          <div className="content-head">
            <div>
              <span className="content-eyebrow">08 — Colour</span>
              <h2>Every hue. The right tint.</h2>
            </div>
            <p>{brandColourPolicy}</p>
          </div>
          <div className={styles.spectrumPanels}>
            <div className={styles.spectrumPanel} data-tone="light">
              <span className={styles.spectrumLabel}>On light</span>
              <div className={styles.spectrumGrid} aria-label="Wordmark examples on light backgrounds">
                {brandSpectrum.light.map((colour) => (
                  <div className={styles.spectrumTile} key={colour}>
                    <span style={{color: colour}}>
                      <BrandLogo />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.spectrumPanel} data-tone="dark">
              <span className={styles.spectrumLabel}>On dark</span>
              <div className={styles.spectrumGrid} aria-label="Wordmark examples on dark backgrounds">
                {brandSpectrum.dark.map((colour) => (
                  <div className={styles.spectrumTile} key={colour}>
                    <span style={{color: colour}}>
                      <BrandLogo />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className={styles.spectrumNote}>
            Representative rumahl tones at the approved tints. Every hue is allowed at the matching tint; the wheel
            below lets you try it. The same applies to the monogram.
          </p>
          <BrandColorWheel />
          <div className={styles.tintGuide}>
            <h3 className={styles.colorSubhead}>How to build a colour</h3>
            <div className={styles.tintSteps}>
              <div>
                <b>01</b>
                <p>Pick any hue H from 0–360. The wheel above shows the range.</p>
              </div>
              <div>
                <b>02</b>
                <p>Choose the light tint for light surfaces or the dark tint for dark surfaces.</p>
              </div>
              <div>
                <b>03</b>
                <p>Apply the formula and check contrast. For H = 150: light gives hsl(150 42% 34%), dark gives hsl(150 55% 68%).</p>
              </div>
            </div>
            <div className={styles.tintFormulas}>
              {brandTintGuide.map((tint) => (
                <div className={styles.tintFormula} key={tint.mode}>
                  <span>{tint.mode} tint</span>
                  <code>hsl(H {tint.saturation}% {tint.lightness}%)</code>
                  <small>{tint.surfaces}</small>
                </div>
              ))}
            </div>
            <p className={styles.tintNote}>{brandTintNote}</p>
            <div className={styles.colorFiles}>
              {brandColorFiles.map((file) => (
                <a href={file.href} download key={file.href}>
                  {file.label} <span>{file.meta}</span> <Download size={13} />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.colorGuidance}>
            {brandColorGuidance.map((line, index) => (
              <div className={styles.colorGuidanceItem} key={line}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{line}</p>
              </div>
            ))}
          </div>
          <h3 className={styles.colorSubhead}>Light tinted backgrounds</h3>
          <div className={styles.tintedGrid}>
            {brandTintedBackgrounds.map((background, index) => (
              <div className={styles.tintedTile} style={{background: background.value}} key={background.name}>
                <span style={{color: index % 2 === 0 ? '#18201c' : '#28694c'}}>
                  <BrandLogo />
                </span>
                <small>
                  {background.name} · {background.value}
                </small>
              </div>
            ))}
          </div>
          <p className={styles.spectrumNote}>
            Light tints are allowed. Keep the mark one solid colour and check the contrast against the background.
          </p>
          <div className={styles.typeCard}>
            <div className={styles.typeIcon}>
              <Type size={20} />
            </div>
            <div>
              <span className={styles.partLabel}>Typography</span>
              <h3>{brandTypography.family}</h3>
              <p>{brandTypography.note}</p>
            </div>
            <span className={styles.typeSpecimen}>Aa</span>
          </div>
        </section>

        <UsageExamples />

        <section className={`content-section ${styles.partnerSection}`} id="partner">
          <div className="content-head">
            <div>
              <span className="content-eyebrow">11 — Partner lockup</span>
              <h2>rumahl × partner.</h2>
            </div>
            <p>
              Both the wordmark and the monogram are allowed on the left side of a partner lockup. Use one of them,
              never both together. Follow the partner’s own brand guidelines.
            </p>
          </div>
          <div className={styles.partnerLockupList}>
            <div className={styles.partnerLockupItem}>
              <div className={styles.partnerLockup}>
                <span className={styles.partnerLockupXLabel} data-pos="tl" aria-hidden="true">x</span>
                <span className={styles.partnerLockupXLabel} data-pos="tr" aria-hidden="true">x</span>
                <span className={styles.partnerLockupXLabel} data-pos="bl" aria-hidden="true">x</span>
                <span className={styles.partnerLockupXLabel} data-pos="br" aria-hidden="true">x</span>
                <div className={styles.partnerLockupGroup}>
                  <div className={styles.partnerLockupRumahl}>
                    <BrandLogo />
                  </div>
                  <span className={styles.partnerLockupX} aria-hidden="true">
                    ×
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={styles.partnerLockupPartnerLogo}
                    src={brandPartnerExample.src}
                    alt={brandPartnerExample.name}
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                </div>
              </div>
              <span className={styles.partnerLockupCaption}>Wordmark × Home Assistant</span>
            </div>
            <div className={styles.partnerLockupItem}>
              <div className={styles.partnerLockup}>
                <span className={styles.partnerLockupXLabel} data-pos="tl" aria-hidden="true">x</span>
                <span className={styles.partnerLockupXLabel} data-pos="tr" aria-hidden="true">x</span>
                <span className={styles.partnerLockupXLabel} data-pos="bl" aria-hidden="true">x</span>
                <span className={styles.partnerLockupXLabel} data-pos="br" aria-hidden="true">x</span>
                <div className={styles.partnerLockupGroup}>
                  <div className={styles.partnerLockupRumahlIcon}>
                    <BrandIcon />
                  </div>
                  <span className={styles.partnerLockupX} aria-hidden="true">
                    ×
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={styles.partnerLockupPartnerLogo}
                    src={brandPartnerExample.src}
                    alt={brandPartnerExample.name}
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                </div>
              </div>
              <span className={styles.partnerLockupCaption}>Monogram × Home Assistant</span>
            </div>
          </div>
          <p className={styles.partnerExampleNote}>
            Both variants are allowed; never use the wordmark and monogram together. Both marks are the same height, the
            gap on each side of the × is equal, and the dashed frame is the x clear space. The example uses Home
            Assistant under its own brand guidelines. No partnership or support is implied.
          </p>
          <ul className={styles.lockupSpecs}>
            {brandLockupSpecs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
          <ul className={styles.partnerRules}>
            {brandPartnerRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
          <p className={styles.partnerNote}>
            {brandPartnerExample.note}{' '}
            <a href={brandPartnerExample.source} target="_blank" rel="noreferrer">
              Home Assistant brand guidelines
            </a>{' '}
            ·{' '}
            <a href="/icons/partners/README.md" target="_blank" rel="noreferrer">
              Asset provenance
            </a>
            .
          </p>
        </section>

        <section className={`content-section ${styles.permissionSection}`} id="permissions">
          <div className="content-head">
            <div>
              <span className="content-eyebrow">12 — Permissions</span>
              <h2>What you can do with the mark.</h2>
            </div>
            <p>
              This is a summary. The trademark policy is the authoritative document. If a use is not listed as allowed,
              ask first.
            </p>
          </div>
          <div className={styles.permissionGrid}>
            {permissionGroups.map((group) => (
              <article className={styles.permissionCard} data-kind={group.key} key={group.key}>
                <div className={styles.permissionHead}>
                  <span className={styles.permissionIcon}>
                    <group.icon size={18} />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className={styles.permissionNote}>
            Read the <Link href="/legal/trademark">trademark policy</Link> before using the mark in a commercial,
            co-branded or product context.
          </p>
        </section>

        <section className={`content-section ${styles.trademarkSection}`} id="trademarks">
          <div className="content-head">
            <div>
              <span className="content-eyebrow">13 — Trademarks</span>
              <h2>Trademarks.</h2>
            </div>
          </div>
          <p className={styles.trademarkText}>
            <ShieldCheck size={16} /> {brandTrademarkNote}{' '}
            <Link href="/legal/trademark">Read the trademark policy</Link>.
          </p>
        </section>

        <section className={`content-section ${styles.cta}`}>
          <span className={styles.ctaIcon}>
            <BrandIcon />
          </span>
          <h2>Where the mark comes from.</h2>
          <p>
            “rumah” means house or home. The mark keeps that word and adds one letter — a quiet sign for a platform
            that belongs at home.
          </p>
          <div className={styles.ctaActions}>
            <Link className="button" href="/about">
              Read the story <ArrowRight size={16} />
            </Link>
            <Link className="text-link" href="/design">
              Design documentation <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
