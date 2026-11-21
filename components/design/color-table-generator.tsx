'use client';
import {useMemo, useState} from 'react';
import {Check, Clipboard, RotateCcw} from 'lucide-react';
import {Button, Heading, Tag, Text, TextLink} from '@/components/rwds/primitives';
import {Stack} from '@/components/rwds/layout';
import {Callout, Card} from '@/components/rwds/surfaces';
import {DataTable} from '@/components/rwds/data';
import {generatePalette, normaliseHex, paletteCss, ratio, type ThemeRoles} from './color';
import styles from './color-generator.module.css';

const presets = [
  {name: 'rumahl green', seed: '#28694c'},
  {name: 'ocean', seed: '#0b6ea8'},
  {name: 'violet', seed: '#6d4bd8'},
  {name: 'amber', seed: '#b0793a'},
  {name: 'rose', seed: '#b83f67'},
];

function ContrastBadge({value}: {value: number}) {
  const pass = value >= 4.5;
  return (
    <span className={`${styles.ratio} ${pass ? styles.pass : styles.fail}`}>
      {ratio(value)}:1 {pass ? <Check size={12} /> : null}
    </span>
  );
}

function varsFor(theme: ThemeRoles): Record<string, string> {
  return {
    ['--accent' as string]: theme.accent.hex,
    ['--accent-secondary' as string]: theme.secondary.hex,
    ['--accent-contrast' as string]: theme.contrast,
    ['--background' as string]: theme.background,
    ['--surface' as string]: theme.surface,
    ['--surface-glass' as string]: theme.surfaceGlass,
    ['--foreground' as string]: theme.foreground,
    ['--foreground-muted' as string]: theme.foregroundMuted,
    ['--border' as string]: theme.border,
  };
}

function Preview({mode, theme}: {mode: 'light' | 'dark'; theme: ThemeRoles}) {
  return (
    <div
      className={styles.preview}
      data-theme={mode}
      style={{...varsFor(theme), background: theme.background, color: theme.foreground} as React.CSSProperties}
    >
      <div className={styles.previewTop}>
        <span className={styles.previewLabel}>{mode} preview</span>
        <Tag tone="accent">{mode === 'light' ? 'Light roles' : 'Dark roles'}</Tag>
      </div>
      <Heading level={2} size="lg">A home for every service.</Heading>
      <Text size="small">Backgrounds, surfaces and text are tinted from the same seed. Only the brand family changes; the design-system structure stays fixed.</Text>
      <div className={styles.previewActions}>
        <Button href="#preview">Primary</Button>
        <Button href="#preview" variant="secondary">Secondary</Button>
        <TextLink href="#preview">Text link</TextLink>
      </div>
      <div className={styles.previewPanel}>Accent surface · {theme.accent.hex}</div>
      <div className={styles.previewCards}>
        <Card title="Content surface" eyebrow={<Tag>Neutral</Tag>} padding="md">
          <Text size="small">Surface, border and muted text are generated from the seed hue.</Text>
        </Card>
        <Card title="Accent card" eyebrow={<Tag tone="accent">Accent</Tag>} padding="md">
          <Text size="small">Links, tags, focus rings and accent surfaces use <code>--accent</code>.</Text>
        </Card>
      </div>
    </div>
  );
}

export function ColorTableGenerator() {
  const [seed, setSeed] = useState('#28694c');
  const [tint, setTint] = useState(35);
  const [copied, setCopied] = useState(false);
  const palette = useMemo(() => generatePalette(seed, tint), [seed, tint]);
  const css = useMemo(() => paletteCss(palette), [palette]);
  const valid = normaliseHex(seed) !== null;

  async function copy() {
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  function reset() {
    setSeed('#28694c');
    setTint(35);
  }

  return (
    <div className={styles.tool}>
      <div className={styles.seedRow}>
        <div className={styles.field}>
          <label htmlFor="seed-hex">Seed colour</label>
          <input
            id="seed-hex"
            type="text"
            value={seed}
            spellCheck={false}
            onChange={(event) => setSeed(event.target.value)}
            onBlur={() => {
              const normalized = normaliseHex(seed);
              if (normalized) setSeed(normalized);
            }}
            aria-invalid={!valid}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="seed-picker">Picker</label>
          <input
            id="seed-picker"
            type="color"
            value={normaliseHex(seed) ?? '#28694c'}
            onChange={(event) => setSeed(event.target.value)}
            aria-label="Pick a seed colour"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="neutral-tint">Neutral tint · {tint}%</label>
          <input
            id="neutral-tint"
            type="range"
            min={0}
            max={100}
            step={5}
            value={tint}
            onChange={(event) => setTint(Number(event.target.value))}
          />
        </div>
        <div className={styles.presets} aria-label="Colour presets">
          {presets.map((preset) => (
            <button
              key={preset.seed}
              type="button"
              className={styles.preset}
              data-active={normaliseHex(seed) === preset.seed}
              onClick={() => setSeed(preset.seed)}
            >
              <span className={styles.presetChip} style={{background: preset.seed}} />
              {preset.name}
            </button>
          ))}
        </div>
        <Button variant="ghost" onClick={reset}>
          <RotateCcw size={14} /> Reset
        </Button>
      </div>

      {!valid ? (
        <Callout title="Invalid colour" tone="warning">
          Enter a three- or six-digit hex value such as <code>#28694c</code>. The generator keeps the last valid preview until the value is corrected.
        </Callout>
      ) : null}

      <div className={styles.previewGrid}>
        <Preview mode="light" theme={palette.light} />
        <Preview mode="dark" theme={palette.dark} />
      </div>

      <Stack gap="sm">
        <Heading level={2} size="lg">Scale</Heading>
        <Text size="small">The seed is the 500 step. Lighter steps move toward paper, darker steps toward ink. Hue is preserved and chroma is reduced at the extremes. Contrast is checked against the generated light and dark backgrounds.</Text>
        <DataTable
          columns={['Step', 'Colour', 'Hex', 'On light', 'On dark']}
          rows={palette.scale.map((step) => [
            String(step.step),
            <span className={styles.scaleSwatch} key={step.step}>
              <span className={styles.scaleChip} style={{background: step.hex}} />
              {step.hex}
            </span>,
            <code key={step.hex}>{step.hex}</code>,
            <ContrastBadge key={step.step + 'l'} value={step.onLight} />,
            <ContrastBadge key={step.step + 'd'} value={step.onDark} />,
          ])}
        />
      </Stack>

      <div className={styles.semanticGrid}>
        {(['light', 'dark'] as const).map((mode) => {
          const theme = palette[mode];
          return (
            <Card title={`${mode === 'light' ? 'Light' : 'Dark'} theme roles`} key={mode}>
              {([
                ['--accent', theme.accent.hex],
                ['--accent-secondary', theme.secondary.hex],
                ['--accent-contrast', theme.contrast],
                ['--background', theme.background],
                ['--surface', theme.surface],
                ['--foreground', theme.foreground],
                ['--border', theme.border],
              ] as const).map(([token, value]) => (
                <div className={styles.semanticRow} key={token}>
                  <span><code>{token}</code></span>
                  <span className={styles.scaleSwatch}><span className={styles.tokenChip} style={{background: value}} />{value}</span>
                </div>
              ))}
              <ContrastBadge value={mode === 'light' ? theme.accent.onLight : theme.accent.onDark} />
            </Card>
          );
        })}
      </div>

      <Stack gap="sm">
        <Heading level={2} size="lg">CSS output</Heading>
        <Text size="small">Paste this into the project theme. The generator changes the accent family and the neutral tint. Typography, spacing, radii and motion stay fixed.</Text>
        <div style={{display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap'}}>
          <Button onClick={copy} variant="secondary">
            {copied ? <Check size={15} /> : <Clipboard size={15} />} {copied ? 'Copied' : 'Copy CSS'}
          </Button>
          <TextLink href="/design/docs/color-tables">Read the colour-table rules</TextLink>
        </div>
        <pre className={styles.cssBlock}>{css}</pre>
      </Stack>

      <Callout title="Identity guardrail" tone="note">
        RWDS supports different accent families and tinted neutrals, but not different layout, type or motion systems. The generator validates contrast and keeps the rest of the design system fixed.
      </Callout>
    </div>
  );
}
