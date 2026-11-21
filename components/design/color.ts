/** Small, dependency-free colour utilities for the RWDS palette generator. */

export type RGB = [number, number, number];
export type OKLCH = {l: number; c: number; h: number};
export type ScaleStep = {
  step: number;
  hex: string;
  onLight: number;
  onDark: number;
};

export type ThemeRoles = {
  accent: ScaleStep;
  secondary: ScaleStep;
  contrast: string;
  background: string;
  surface: string;
  surfaceGlass: string;
  foreground: string;
  foregroundMuted: string;
  border: string;
};

export type GeneratedPalette = {
  seed: string;
  tint: number;
  scale: ScaleStep[];
  light: ThemeRoles;
  dark: ThemeRoles;
};

export const SCALE_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function normaliseHex(input: string): string | null {
  let value = input.trim().replace(/^#/, '');
  if (/^[0-9a-fA-F]{3}$/.test(value)) {
    value = value.split('').map((char) => char + char).join('');
  }
  if (!/^[0-9a-fA-F]{6}$/.test(value)) return null;
  return '#' + value.toLowerCase();
}

export function hexToRgb(hex: string): RGB {
  const value = normaliseHex(hex) ?? '#000000';
  return [parseInt(value.slice(1, 3), 16), parseInt(value.slice(3, 5), 16), parseInt(value.slice(5, 7), 16)];
}

export function rgbToHex([r, g, b]: RGB): string {
  const part = (value: number) => Math.round(clamp(value, 0, 255)).toString(16).padStart(2, '0');
  return '#' + part(r) + part(g) + part(b);
}

export function hexToRgba(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function srgbToLinear(value: number) {
  const channel = value / 255;
  return channel <= 0.04045 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
}

function linearToSrgb(value: number) {
  const channel = value <= 0.0031308 ? 12.92 * value : 1.055 * Math.pow(value, 1 / 2.4) - 0.055;
  return channel * 255;
}

export function rgbToOklch(rgb: RGB): OKLCH {
  const [r, g, b] = rgb.map(srgbToLinear) as [number, number, number];
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const okL = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const a = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const okB = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return {
    l: okL,
    c: Math.sqrt(a * a + okB * okB),
    h: (Math.atan2(okB, a) * 180) / Math.PI,
  };
}

export function oklchToRgb({l, c, h}: OKLCH): RGB {
  const rad = (h * Math.PI) / 180;
  const a = c * Math.cos(rad);
  const b = c * Math.sin(rad);
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;
  const r = 4.0767416621 * l_ ** 3 - 3.3077115913 * m_ ** 3 + 0.2309699292 * s_ ** 3;
  const g = -1.2684380046 * l_ ** 3 + 2.6097574011 * m_ ** 3 - 0.3413193965 * s_ ** 3;
  const blue = -0.0041960863 * l_ ** 3 - 0.7034186147 * m_ ** 3 + 1.707614701 * s_ ** 3;
  return [linearToSrgb(r), linearToSrgb(g), linearToSrgb(blue)];
}

export function oklchToHex(color: OKLCH): string {
  return rgbToHex(oklchToRgb(color));
}

/** WCAG relative luminance of an sRGB colour. */
export function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map(srgbToLinear) as [number, number, number];
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** WCAG contrast ratio between two colours (1–21). */
export function contrast(a: string, b: string): number {
  const l1 = luminance(a);
  const l2 = luminance(b);
  const light = Math.max(l1, l2);
  const dark = Math.min(l1, l2);
  return (light + 0.05) / (dark + 0.05);
}

export function ratio(value: number) {
  return Math.round(value * 100) / 100;
}

function neutralChroma(base: OKLCH, tint: number) {
  return Math.min(base.c, 0.045) * (tint / 100);
}

/**
 * Build a perceptually even scale around the seed.
 *
 * The hue stays fixed and the seed is the 500 step. Lighter steps move toward
 * paper, darker steps toward ink. Chroma is reduced at both extremes so the
 * scale does not turn neon or muddy.
 */
export function generateScale(seed: string): {base: OKLCH; scale: ScaleStep[]} {
  const base = rgbToOklch(hexToRgb(seed));
  const baseIndex = SCALE_STEPS.indexOf(500);

  const scale: ScaleStep[] = SCALE_STEPS.map((step, index) => {
    if (index === baseIndex) {
      return {step, hex: seed, onLight: 1, onDark: 1};
    }
    const distance = index < baseIndex ? (baseIndex - index) / baseIndex : (index - baseIndex) / (SCALE_STEPS.length - 1 - baseIndex);
    const target = index < baseIndex ? 0.972 : 0.16;
    const l = clamp(base.l + (target - base.l) * Math.pow(distance, 0.92), 0.08, 0.985);
    const chromaScale = index < baseIndex ? 1 - 0.55 * distance : 1 - 0.38 * distance;
    const c = Math.max(0, base.c * chromaScale);
    return {step, hex: oklchToHex({l, c, h: base.h}), onLight: 1, onDark: 1};
  });

  return {base, scale};
}

function buildNeutrals(base: OKLCH, tint: number, mode: 'light' | 'dark') {
  const c = neutralChroma(base, tint);
  const h = base.h;
  if (mode === 'light') {
    const background = oklchToHex({l: 0.925, c: c * 0.55, h});
    const surface = oklchToHex({l: 0.974, c: c * 0.35, h});
    return {
      background,
      surface,
      surfaceGlass: hexToRgba(surface, 0.78),
      foreground: oklchToHex({l: 0.18, c: c * 0.7, h}),
      foregroundMuted: oklchToHex({l: 0.46, c: c * 0.5, h}),
      border: oklchToHex({l: 0.84, c: c * 0.6, h}),
    };
  }
  const background = oklchToHex({l: 0.16, c: c * 0.6, h});
  const surface = oklchToHex({l: 0.21, c: c * 0.45, h});
  return {
    background,
    surface,
    surfaceGlass: hexToRgba(surface, 0.82),
    foreground: oklchToHex({l: 0.94, c: c * 0.25, h}),
    foregroundMuted: oklchToHex({l: 0.68, c: c * 0.35, h}),
    border: oklchToHex({l: 0.3, c: c * 0.5, h}),
  };
}

function buildTheme(base: OKLCH, tint: number, scale: ScaleStep[], mode: 'light' | 'dark'): ThemeRoles {
  const neutrals = buildNeutrals(base, tint, mode);
  const withContrast = scale.map((step) => ({
    ...step,
    onLight: ratio(contrast(step.hex, neutrals.background)),
    onDark: ratio(contrast(step.hex, mode === 'light' ? '#0f1512' : neutrals.background)),
  }));
  const byStep = (step: number) => withContrast.find((item) => item.step === step)!;
  const candidates = mode === 'light' ? [600, 700, 800, 900, 950] : [400, 300, 200, 100, 50];
  const accentStep = candidates.find((step) => {
    const value = mode === 'light' ? byStep(step).onLight : byStep(step).onDark;
    return value >= 4.5;
  }) ?? (mode === 'light' ? 950 : 50);
  const accent = byStep(accentStep);
  const secondary = byStep(mode === 'light' ? Math.max(50, accentStep - 100) : Math.min(950, accentStep + 100));
  const white = contrast(accent.hex, '#ffffff');
  const ink = contrast(accent.hex, '#0f1512');
  return {
    accent,
    secondary,
    contrast: white >= ink ? '#ffffff' : '#0f1512',
    ...neutrals,
  };
}

export function generatePalette(seedInput: string, tintInput = 35): GeneratedPalette {
  const seed = normaliseHex(seedInput) ?? '#28694c';
  const tint = clamp(tintInput, 0, 100);
  const {base, scale} = generateScale(seed);
  const light = buildTheme(base, tint, scale, 'light');
  const dark = buildTheme(base, tint, scale, 'dark');
  const withContrast = scale.map((step) => ({
    ...step,
    onLight: ratio(contrast(step.hex, light.background)),
    onDark: ratio(contrast(step.hex, dark.background)),
  }));
  return {seed, tint, scale: withContrast, light, dark};
}

export function paletteCss(palette: GeneratedPalette) {
  const roles = (theme: ThemeRoles) =>
    [
      `  --accent: ${theme.accent.hex};`,
      `  --accent-secondary: ${theme.secondary.hex};`,
      `  --accent-contrast: ${theme.contrast};`,
      `  --background: ${theme.background};`,
      `  --surface: ${theme.surface};`,
      `  --surface-glass: ${theme.surfaceGlass};`,
      `  --foreground: ${theme.foreground};`,
      `  --foreground-muted: ${theme.foregroundMuted};`,
      `  --border: ${theme.border};`,
    ].join('\n');
  return `:root {\n${roles(palette.light)}\n}\n\n[data-theme="dark"] {\n${roles(palette.dark)}\n}\n`;
}
