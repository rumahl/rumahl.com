'use client';

import {useState} from 'react';
import {ArrowUpRight, Check, Copy, X} from 'lucide-react';
import {Button} from '@/components/rwds/primitives';
import styles from './button-docs.module.css';

type SpecTableProps = {
  title: string;
  columns: string[];
  rows: string[][];
};

function SpecTable({title, columns, rows}: SpecTableProps) {
  return (
    <div className={styles.specBlock}>
      <h3 className={styles.subheading}>{title}</h3>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead><tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr></thead>
          <tbody>{rows.map((row) => <tr key={row.join('|')}>{row.map((cell, index) => <td key={`${cell}-${index}`}>{cell}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

function CodeSample({title, code}: {title: string; code: string}) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    void navigator.clipboard?.writeText(code).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }).catch(() => undefined);
  };
  return (
    <div className={styles.codeCard}>
      <div className={styles.codeHead}>
        <span>{title}</span>
        <button type="button" className={styles.copy} onClick={copy}>
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className={styles.code}><code>{code}</code></pre>
    </div>
  );
}

function Guideline({
  title,
  doText,
  dontText,
  doExample,
  dontExample,
}: {
  title: string;
  doText: string;
  dontText: string;
  doExample: React.ReactNode;
  dontExample: React.ReactNode;
}) {
  return (
    <article className={styles.guideline}>
      <h3>{title}</h3>
      <div className={styles.guidelineSides}>
        <div className={styles.guidelineSide}>
          <span className={styles.guidelineLabel} data-kind="do"><Check size={11} /> Do</span>
          <div className={styles.guidelineStage}>{doExample}</div>
          <p>{doText}</p>
        </div>
        <div className={styles.guidelineSide}>
          <span className={styles.guidelineLabel} data-kind="dont"><X size={11} /> Don&apos;t</span>
          <div className={styles.guidelineStage}>{dontExample}</div>
          <p>{dontText}</p>
        </div>
      </div>
    </article>
  );
}

const importCode = "import { Button } from '@/components/rwds/primitives';";

const usageCode = `<Button>Read the reference</Button>

<Button variant="secondary" size="sm">
  Cancel
</Button>

<Button variant="ghost">View details</Button>`;

const linkCode = `<Button href="/design/rwds" variant="secondary">
  RWDS reference
</Button>

<Button href="https://example.com" external variant="inverse">
  External reference
</Button>`;

const iconCode = `<Button icon={<ArrowUpRight size={14} aria-hidden />}>
  Read the reference
</Button>

<Button aria-label="Open reference">
  <ArrowUpRight size={14} aria-hidden />
</Button>`;

export function ButtonDocs({base}: {base: string}) {
  return (
    <div className={styles.docs}>
      <section id="when-to-use">
        <h2>When to use</h2>
        <p className={styles.sectionLead}>
          Buttons are for actions. They should make the next step obvious and keep the number of competing choices small.
          The visual role tells the reader how important the action is; the label tells them what will happen.
        </p>
        <div className={styles.whenGrid}>
          <div className={styles.whenCard}>
            <h3>Use a button when</h3>
            <ul>
              <li>The reader should submit, save, confirm, close or start something.</li>
              <li>The action is the primary way forward in a section or dialog.</li>
              <li>You need a supporting or low-emphasis action next to a primary one.</li>
              <li>The element should carry the visual weight of a call to action, even when <code>href</code> makes it a link.</li>
              <li>The action appears on a dark or photographic surface and needs the inverse treatment.</li>
            </ul>
          </div>
          <div className={styles.whenCard} data-tone="avoid">
            <h3>Avoid a button when</h3>
            <ul>
              <li>A normal text link is enough for inline navigation inside a sentence.</li>
              <li>Two or more actions in the same group would compete as primary.</li>
              <li>A ghost action would make a destructive or hard-to-find action too quiet.</li>
              <li>The only way to explain an unavailable action is to disable the button.</li>
              <li>The surface is light and the inverse variant would lose its contrast.</li>
            </ul>
          </div>
        </div>
        <p className={styles.note}>
          A button performs an action; a text link navigates. Button can render a link when the call to action is the
          primary way to leave the page, but inline navigation belongs in a text link.
        </p>
      </section>

      <section id="anatomy">
        <h2>Anatomy</h2>
        <p className={styles.sectionLead}>
          The button is one inline-flex container with a label, an optional trailing icon and a pill-shaped surface.
          The same anatomy is used for both sizes; only the height, padding and type size change.
        </p>
        <div className={styles.anatomyStage}>
          <span className={`${styles.marker} ${styles.markerLabel}`} aria-hidden>1</span>
          <span className={`${styles.marker} ${styles.markerIcon}`} aria-hidden>2</span>
          <span className={`${styles.marker} ${styles.markerHeight}`} aria-hidden>3</span>
          <span className={`${styles.marker} ${styles.markerRadius}`} aria-hidden>4</span>
          <Button icon={<ArrowUpRight size={14} aria-hidden />}>Read the reference</Button>
        </div>
        <ol className={styles.anatomyList}>
          <li><span className={styles.anatomyNumber}>1</span><span><strong>Label.</strong> Sentence case, verb-first and specific about the result. The label is also the accessible name.</span></li>
          <li><span className={styles.anatomyNumber}>2</span><span><strong>Optional icon.</strong> The icon is appended after the label with a 10px gap. It supports the label and does not replace it.</span></li>
          <li><span className={styles.anatomyNumber}>3</span><span><strong>Height and padding.</strong> 44px and 20px inline padding at medium; 36px and 14px at small.</span></li>
          <li><span className={styles.anatomyNumber}>4</span><span><strong>Pill radius.</strong> A 999px radius gives the same soft shape at every size. Focus uses a 3px ring outside the shape.</span></li>
        </ol>
      </section>

      <section id="variants">
        <h2>Variants</h2>
        <p className={styles.sectionLead}>
          Choose the variant by the role of the action, not by colour preference. A section should normally contain one
          primary action; everything else should be secondary, ghost or a plain link.
        </p>
        <h3 className={styles.subheading}>Appearance</h3>
        <div className={styles.variantGrid}>
          <div className={styles.variantCard}>
            <div className={styles.variantStage}><Button>Primary</Button></div>
            <div className={styles.variantCopy}><strong>Primary</strong><p>The main action in a section, dialog or card. It uses the accent colour and should appear once per action group.</p></div>
          </div>
          <div className={styles.variantCard}>
            <div className={styles.variantStage}><Button variant="secondary">Secondary</Button></div>
            <div className={styles.variantCopy}><strong>Secondary</strong><p>A supporting action next to a primary. It keeps the foreground colour and uses a border instead of a filled surface.</p></div>
          </div>
          <div className={styles.variantCard}>
            <div className={styles.variantStage}><Button variant="ghost">Ghost</Button></div>
            <div className={styles.variantCopy}><strong>Ghost</strong><p>A low-emphasis action in text, card footers or dense toolbars. It has no pill surface and underlines on hover.</p></div>
          </div>
          <div className={styles.variantCard}>
            <div className={styles.variantStage} data-inverse="true"><Button variant="inverse">Inverse</Button></div>
            <div className={styles.variantCopy}><strong>Inverse</strong><p>For dark or photographic surfaces only. It uses a white surface and navy text, and turns cyan on hover.</p></div>
          </div>
        </div>

        <h3 className={styles.subheading}>Size</h3>
        <div className={styles.exampleRow}>
          <div className={styles.exampleItem}><Button>Medium</Button><small>44px · default</small></div>
          <div className={styles.exampleItem}><Button size="sm">Small</Button><small>36px · dense contexts</small></div>
        </div>

        <h3 className={styles.subheading}>Content</h3>
        <div className={styles.exampleRow}>
          <div className={styles.exampleItem}><Button>Read the reference</Button><small>Label only</small></div>
          <div className={styles.exampleItem}><Button icon={<ArrowUpRight size={14} aria-hidden />}>Open reference</Button><small>Trailing icon</small></div>
          <div className={styles.exampleItem}><Button href="/design/rwds" variant="secondary">RWDS reference</Button><small>Rendered as a link</small></div>
        </div>
        <SpecTable
          title="Content rules"
          columns={['Element', 'Rule', 'Example']}
          rows={[
            ['Label', 'Sentence case, verb-first, no trailing punctuation.', 'Read the reference'],
            ['Length', 'Keep the label to a few words; allow the action group to wrap, not the button.', 'Save changes'],
            ['Icon', 'Optional trailing support. The label still carries the meaning.', 'Open reference ↗'],
            ['Link', 'Use href when the action navigates; keep the same visual contract.', 'RWDS reference'],
            ['Icon-only', 'Use children for the icon and an aria-label for the name.', 'aria-label="Open reference"'],
          ]}
        />
      </section>

      <section id="behavior">
        <h2>Behavior</h2>
        <p className={styles.sectionLead}>
          The button has a stable size and one interactive element. Hover, focus, disabled and link behavior are part of
          the contract; none of them should change the layout around the action.
        </p>
        <div className={styles.stateGrid}>
          <div className={styles.stateCard}><div><Button>Default</Button></div><strong>Default</strong><p>Ready for interaction. The primary action is the most likely next step in its group.</p></div>
          <div className={styles.stateCard}><div><Button disabled>Disabled</Button></div><strong>Disabled</strong><p>45% opacity and no pointer interaction. A disabled button is not focusable, so explain the reason in visible text.</p></div>
          <div className={styles.stateCard}><div><Button href="/design/rwds" variant="secondary">Link</Button></div><strong>Link</strong><p>With href the component renders an anchor. Use it when the action is navigation and the visual weight is intentional.</p></div>
        </div>
        <SpecTable
          title="States and interaction"
          columns={['State', 'Behavior']}
          rows={[
            ['Hover', 'Primary moves to the darker accent; secondary gains an accent border and text; ghost underlines; inverse turns cyan.'],
            ['Focus-visible', 'A 3px accent outline sits 3px outside the button. It is visible in light and dark themes.'],
            ['Pressed', 'The native active state is used; there is no separate pressed animation.'],
            ['Disabled', 'Opacity drops to 45%, the pointer becomes not-allowed and the control leaves the tab order.'],
            ['Link', 'href renders an anchor with the same visual contract. External adds target="_blank" and rel="noreferrer".'],
            ['Layout', 'The label does not wrap inside the button. Let the surrounding action group wrap instead.'],
          ]}
        />
        <p className={styles.note}>
          Do not use disabled as the only explanation. If the reader needs to know why an action is unavailable, keep the
          action enabled and explain the prerequisite after activation, or show the requirement next to the button.
        </p>
      </section>

      <section id="specs">
        <h2>Specs</h2>
        <p className={styles.sectionLead}>
          These values come from <code>components/rwds/rwds.css</code> and the shared RWDS tokens. They are the contract
          behind the visual examples above.
        </p>
        <SpecTable
          title="Size"
          columns={['Size', 'Min height', 'Inline padding', 'Type', 'Icon gap']}
          rows={[
            ['Medium (md)', '44 px', '20 px', '14 px / 600', '10 px'],
            ['Small (sm)', '36 px', '14 px', '13 px / 600', '10 px'],
          ]}
        />
        <SpecTable
          title="Shape and spacing"
          columns={['Property', 'Value', 'Notes']}
          rows={[
            ['Border radius', '999 px', 'Pill shape at every size.'],
            ['Border', '1 px solid transparent', 'Secondary uses var(--border); hover uses var(--accent).'],
            ['Layout', 'inline-flex', 'Centres the label and icon; the label does not wrap.'],
            ['Ghost', 'padding-inline 4 px; min-height auto', 'Reads as an inline action rather than a pill.'],
            ['Transition', 'background-color, color, border-color · 200 ms', 'No transform or layout animation.'],
            ['Focus ring', '3 px outline; 3 px offset', 'Uses var(--accent) and follows the theme.'],
          ]}
        />
        <SpecTable
          title="Colour roles"
          columns={['Variant', 'Background', 'Text', 'Border', 'Hover']}
          rows={[
            ['Primary', 'var(--accent)', 'var(--accent-contrast)', 'transparent', 'var(--accent-secondary) background'],
            ['Secondary', 'transparent', 'var(--foreground)', 'var(--border)', 'accent border and accent text'],
            ['Ghost', 'transparent', 'var(--accent)', 'none', 'underline'],
            ['Inverse', 'var(--white)', 'var(--navy)', 'transparent', 'var(--cyan) background'],
            ['Disabled', 'inherits the variant', 'inherits the variant', 'inherits the variant', '45% opacity; no pointer'],
          ]}
        />
        <SpecTable
          title="State summary"
          columns={['State', 'Value']}
          rows={[
            ['Default', 'The variant colour and 44px or 36px height.'],
            ['Hover', 'Variant-specific colour change described above.'],
            ['Focus-visible', '3px accent outline with a 3px offset.'],
            ['Disabled', 'opacity .45; cursor not-allowed; removed from the tab order.'],
            ['Link', 'href renders an anchor; external opens in a new tab.'],
            ['Small', '36px height, 14px inline padding, 13px type.'],
          ]}
        />
      </section>

      <section id="guidelines">
        <h2>Guidelines</h2>
        <p className={styles.sectionLead}>
          The examples below use the real button styles. The point is the hierarchy, not decoration: one clear next step,
          labels that describe the result and a visual role that matches the consequence.
        </p>
        <div className={styles.guidelineList}>
          <Guideline
            title="Keep one primary action per group"
            doText="Pair one primary action with secondary actions. The reader can see which step is most likely."
            dontText="Two primary actions compete for attention and make the next step ambiguous."
            doExample={<div className={styles.buttonRow}><Button>Save changes</Button><Button variant="secondary">Cancel</Button></div>}
            dontExample={<div className={styles.buttonRow}><Button>Save</Button><Button>Save and close</Button></div>}
          />
          <Guideline
            title="Write labels that describe the result"
            doText="Use a specific verb and object. The label should still make sense when read on its own."
            dontText="Generic labels force the reader to scan the surrounding copy to understand the action."
            doExample={<Button>Read the reference</Button>}
            dontExample={<Button>Click here</Button>}
          />
          <Guideline
            title="Use ghost only for low-emphasis actions"
            doText="Ghost works for a quiet action like viewing detail or dismissing a secondary surface."
            dontText="A destructive action should not look like ordinary text. Use a clear button style and confirmation."
            doExample={<Button variant="ghost">View details</Button>}
            dontExample={<Button variant="ghost">Delete account</Button>}
          />
          <Guideline
            title="Reserve inverse for dark surfaces"
            doText="Inverse keeps its contrast on dark and photographic surfaces and reads as a clear call to action."
            dontText="On a light surface the white pill loses contrast, hierarchy and its relationship to the background."
            doExample={<div className={styles.darkStage}><Button variant="inverse">Get started</Button></div>}
            dontExample={<div className={styles.whiteStage}><Button variant="inverse">Get started</Button></div>}
          />
        </div>
      </section>

      <section id="accessibility">
        <h2>Accessibility</h2>
        <p className={styles.sectionLead}>
          The button renders one native interactive element. The visible label is the accessible name; the icon and the
          surface decoration do not add another name.
        </p>
        <SpecTable
          title="Keyboard"
          columns={['Key', 'Behavior']}
          rows={[
            ['Tab / Shift+Tab', 'Moves focus to or away from the button.'],
            ['Enter', 'Activates a native button or a link.'],
            ['Space', 'Activates a native button. It does not activate a link.'],
          ]}
        />
        <div className={styles.a11yGrid}>
          <div className={styles.a11yCard}><h3>Focus</h3><p>The 3px accent ring with a 3px offset is visible in both themes. Do not remove it or replace it with a colour change alone.</p></div>
          <div className={styles.a11yCard}><h3>Target size</h3><p>Medium is 44px high and small is 36px. Keep at least 8px between adjacent targets and use small only in dense toolbars.</p></div>
          <div className={styles.a11yCard}><h3>Screen readers</h3><p>The label is the accessible name. For an icon-only button, put the icon in children and provide <code>aria-label</code>.</p></div>
          <div className={styles.a11yCard}><h3>Disabled and links</h3><p>A disabled button is not focusable. A link rendered with href stays a link; external links open a new tab and need link text that still makes sense out of context.</p></div>
        </div>
        <p className={styles.note}>
          Check the contrast of the accent, text and border in both themes. Do not use colour alone to communicate
          selection, disabled state or priority; the label and surrounding copy must carry that meaning too.
        </p>
      </section>

      <section id="in-code">
        <h2>In code</h2>
        <p className={styles.sectionLead}>
          Import the component from the RWDS primitives. The component renders a <code>button</code> by default and an
          anchor when <code>href</code> is set.
        </p>
        <CodeSample title="Import" code={importCode} />
        <h3 className={styles.subheading}>Usage</h3>
        <CodeSample title="Button variants" code={usageCode} />
        <h3 className={styles.subheading}>Links</h3>
        <CodeSample title="Link and external link" code={linkCode} />
        <h3 className={styles.subheading}>Icons</h3>
        <CodeSample title="Trailing and icon-only content" code={iconCode} />
        <SpecTable
          title="Props"
          columns={['Prop', 'Type', 'Default', 'Description']}
          rows={[
            ['children', 'ReactNode', '—', 'Visible label. Also the accessible name.'],
            ['variant', "'primary' | 'secondary' | 'ghost' | 'inverse'", "'primary'", 'Visual role of the action.'],
            ['size', "'md' | 'sm'", "'md'", 'Control height, padding and type size.'],
            ['href', 'string', '—', 'Renders an anchor instead of a button.'],
            ['external', 'boolean', 'false', 'Adds target="_blank" and rel="noreferrer" when href is set.'],
            ['disabled', 'boolean', 'false', 'Only applies to the button form; links cannot be disabled.'],
            ['type', "'button' | 'submit'", "'button'", 'Native button type.'],
            ['icon', 'ReactNode', '—', 'Optional trailing icon after the label.'],
            ['aria-label', 'string', '—', 'Accessible name for icon-only or otherwise ambiguous content.'],
            ['onClick', '() => void', '—', 'Click handler for the button form.'],
          ]}
        />
        <SpecTable
          title="Styling"
          columns={['Selector', 'Role']}
          rows={[
            ['.rwds-button', 'Base layout, type, transition and pill shape.'],
            ['[data-variant=primary]', 'Accent surface and accent-contrast text.'],
            ['[data-variant=secondary]', 'Transparent surface with a border.'],
            ['[data-variant=ghost]', 'Inline text action with no pill surface.'],
            ['[data-variant=inverse]', 'White surface and navy text for dark backgrounds.'],
            [':focus-visible', '3px accent outline with a 3px offset.'],
            [':disabled', '45% opacity and not-allowed cursor.'],
          ]}
        />
        <h3 className={styles.subheading}>Composition</h3>
        <ul className={styles.plainList}>
          <li>Button renders exactly one interactive element; do not nest it in another button or link.</li>
          <li>The icon is appended after the label. For icon-only content, use children plus an accessible name.</li>
          <li>Use TextLink for inline navigation where a button would be too prominent.</li>
          <li>Let the action group wrap; the button itself keeps its label on one line.</li>
        </ul>
        <div className={styles.exampleRow}>
          <a className={styles.relatedCard} href="/design/storybook/rwds/?path=/story/rwds-button--all-variants" target="_blank" rel="noreferrer">
            <strong>Open Button controls <ArrowUpRight size={13} /></strong>
            <span>Inspect every variant and state in the live Storybook.</span>
          </a>
        </div>
      </section>

      <section id="related">
        <h2>Related</h2>
        <div className={styles.relatedGrid}>
          <a className={styles.relatedCard} href={`${base}/?path=/story/rwds-card--with-footer`} target="_blank" rel="noreferrer">
            <strong>Card <ArrowUpRight size={13} /></strong>
            <span>Group content and place an action in the footer without competing with the page primary.</span>
          </a>
          <a className={styles.relatedCard} href={`${base}/?path=/story/rwds-tag--tones`} target="_blank" rel="noreferrer">
            <strong>Tag <ArrowUpRight size={13} /></strong>
            <span>Show status or category metadata without using a button-like control.</span>
          </a>
          <a className={styles.relatedCard} href={`${base}/?path=/story/rwds-layout--containers`} target="_blank" rel="noreferrer">
            <strong>Layout <ArrowUpRight size={13} /></strong>
            <span>Place actions in sections and control the surrounding rhythm.</span>
          </a>
          <a className={styles.relatedCard} href={`${base}/?path=/story/rwds-button--all-variants`} target="_blank" rel="noreferrer">
            <strong>Button in Storybook <ArrowUpRight size={13} /></strong>
            <span>Open the live examples, controls and source for every variant.</span>
          </a>
        </div>
      </section>
    </div>
  );
}
