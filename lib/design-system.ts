/**
 * Design system tokens for Parc Ganuenta.
 *
 * These are the source-of-truth values that mirror the CSS custom properties
 * defined in globals.css (@theme). Use these constants when you need hex
 * values in JS contexts (e.g. canvas, inline SVG, OG image generation).
 *
 * For Tailwind classes, use the generated utilities directly:
 *   bg-brand-stone, text-brand-shadow, border-brand-dust, etc.
 */

export const colors = {
  /* Primary */
  brandStone:    '#676159', // Stone Brown Grey

  /* Secondary */
  brandTaupe:    '#CC9A8E', // Rosy Taupe

  /* Accents */
  brandPacific:  '#00ADBC', // Pacific Blue — main accent
  brandSky:      '#74C4D6', // Sky Blue Light — soft interaction
  brandCinnamon: '#9E6950', // Cinnamon Wood — warm depth

  /* Neutrals */
  brandDust:     '#D2D1D1', // Dust Grey — UI support
  brandShadow:   '#231F20', // Shadow Grey — text / contrast
  brandPlatinum: '#F0F0F0', // Platinum Grey — section backgrounds
  brandWhite:    '#FFFFFF', // White — primary background
} as const

export type ColorToken = keyof typeof colors

/**
 * Semantic mapping — use these names when reasoning about intent,
 * not raw palette names.
 */
export const semanticColors = {
  surface:        colors.brandWhite,
  surfaceMuted:   colors.brandPlatinum,
  surfaceSubtle:  colors.brandDust,

  textBase:       colors.brandShadow,
  textMuted:      colors.brandStone,

  primary:        colors.brandStone,
  primaryHover:   '#534e47',

  accent:         colors.brandPacific,
  accentHover:    '#009aaa',
  accentSoft:     colors.brandSky,

  warm:           colors.brandCinnamon,
  warmSoft:       colors.brandTaupe,

  border:         colors.brandDust,
  borderStrong:   colors.brandStone,
} as const

export const typography = {
  fontFamily: "'azo-sans-web', system-ui, sans-serif",
  fontWeights: {
    light:   300,
    regular: 400,
    medium:  500,
    bold:    700,
  },
} as const

/**
 * Tailwind class references — handy for building class strings consistently.
 * Use these instead of hardcoding colour class names across components.
 */
export const tw = {
  /* Backgrounds */
  bgWhite:    'bg-brand-white',
  bgPlatinum: 'bg-brand-platinum',
  bgDust:     'bg-brand-dust',
  bgStone:    'bg-brand-stone',
  bgPacific:  'bg-brand-pacific',
  bgSky:      'bg-brand-sky',
  bgTaupe:    'bg-brand-taupe',
  bgCinnamon: 'bg-brand-cinnamon',

  /* Text */
  textShadow:   'text-brand-shadow',
  textStone:    'text-brand-stone',
  textPacific:  'text-brand-pacific',
  textWhite:    'text-brand-white',
  textTaupe:    'text-brand-taupe',
  textCinnamon: 'text-brand-cinnamon',

  /* Borders */
  borderDust:   'border-brand-dust',
  borderStone:  'border-brand-stone',
  borderPacific:'border-brand-pacific',
} as const
