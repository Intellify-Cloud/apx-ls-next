---
name: Apex Leadership Visual Identity
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#ffb690'
  on-secondary: '#552100'
  secondary-container: '#ec6a06'
  on-secondary-container: '#4a1c00'
  tertiary: '#bcc7de'
  on-tertiary: '#263143'
  tertiary-container: '#0c1829'
  on-tertiary-container: '#768197'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-xl:
    fontFamily: Manrope
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-padding-y: 120px
  container-max-width: 1280px
  gutter: 32px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

The design system is rooted in the "Modern Corporate" aesthetic, specifically tailored for a high-stakes executive audience. It balances the gravitas of elite leadership with the energy of transformative growth. The visual narrative centers on "Precision and Perspective"—using a dark, grounded foundation to make moments of insight (the vibrant accent) feel earned and impactful. 

This design system avoids decorative fluff in favor of structural clarity, high-contrast intentionality, and a layout that breathes, signaling confidence and authority. The emotional response should be one of trust, clarity, and readiness for high-level progression.

## Colors

The palette is anchored by a deep Navy and Charcoal base, providing a sophisticated backdrop that commands attention. 

- **Primary (Deep Navy):** Used for large surface areas and background sections to establish a premium, "night-mode" executive environment.
- **Secondary (Vibrant Coral/Orange):** Reserved exclusively for high-priority calls to action, progress indicators, and key brand highlights. It represents the "spark" of leadership insight.
- **Tertiary (Slate Blue):** Utilized for card backgrounds and subtle section layering to create depth without losing the dark aesthetic.
- **Neutral (Steel Gray):** Used for secondary text and borders to maintain high readability while ensuring the interface feels cohesive and understated.

## Typography

This design system utilizes a dual-sans-serif approach to achieve a balance between modern personality and clinical readability. 

- **Manrope (Headlines):** Chosen for its geometric precision and modern professional character. It should be used at heavy weights (Bold/ExtraBold) for section headers to create an authoritative visual hierarchy.
- **Inter (Body/System):** A utilitarian powerhouse for long-form content. Its neutral tone ensures that executive summaries and coaching details are consumed without cognitive load.
- **Formatting:** Use tight tracking for large displays to feel "tight" and impactful, while maintaining generous line heights for body text to support an effortless reading experience.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model within a maximum container width, emphasizing vertical rhythm and generous white space (or "dark space"). 

- **Grid:** A 12-column grid is used for desktop, with 32px gutters to allow elements to feel distinct and uncrowded.
- **Sectioning:** Every major content transition is marked by a minimum of 120px of vertical padding. This creates a sense of "premium breathing room" typical of high-end consultancies.
- **Rhythm:** Spacing follows an 8px baseline. Use `stack-lg` between major headline/body blocks and `stack-sm` between labels and their associated content.

## Elevation & Depth

To maintain a sophisticated professional feel, this design system avoids heavy shadows, instead utilizing **Tonal Layering** and **Low-Contrast Outlines**.

- **Surfaces:** Depth is created by shifting from a pure dark background (`#0F172A`) to a slightly lighter slate (`#1E293B`) for cards and containers.
- **Borders:** Instead of shadows, use 1px solid borders in a slightly lighter shade of the background (e.g., 10% opacity white) to define container edges.
- **Interactive States:** When hovering over interactive cards, a subtle "glow" or increase in border opacity is preferred over a traditional drop shadow to maintain the clean, flat-modern aesthetic.

## Shapes

The shape language is "Refined Geometric." 

- **Corner Radius:** A standard 0.5rem (8px) radius is applied to buttons, input fields, and cards. This provides a modern, approachable touch while remaining professional and grounded. 
- **Icons:** Icons should be thin-stroke (2px), using linear styles that match the font-weight of the labels. They should be housed in subtle geometric containers (circles or rounded squares) with high padding.
- **Imagery:** High-quality photography should feature sharp edges or very subtle rounding to align with the UI containers.

## Components

### Buttons
- **Primary:** Solid Vibrant Orange background with white or dark navy text. Use `label-caps` for the font style. Include a subtle arrow icon (→) to signify forward momentum.
- **Secondary:** Transparent background with a 1px white or light gray border. Use for less critical actions like "Learn More."

### Cards
- **Feature Cards:** Use the tertiary background color with a subtle 1px border. Icons within cards should use the primary accent color to draw the eye.
- **Testimonial Cards:** Feature a larger `body-lg` font size for quotes, emphasizing the "human connection" aspect of the consultancy.

### Input Fields
- Dark-themed fields with a 1px border. The border should transition to the accent orange on focus. Placeholder text should be high-contrast enough to read against the dark background.

### Lists & Navigation
- **Navigation:** Simple, text-based navigation using `label-caps` with a 32px gap between items. 
- **Progress Lists:** For coaching modules, use vertical lines and accented dots to create a "pathway" visual, reinforcing the concept of growth and progression.

### Imagery Styling
- Professional portraits and "perspective" shots (e.g., architectural heights or mountain ranges) should have a slight dark overlay to ensure text legibility when used as hero backgrounds.

## Design Tokens

| Token          | Likely Value |
|----------------|--------------|
| Primary font   | 'DM Sans', 'Neue Haas Grotesk', or 'Inter' |
| Heading weight | 700–800 |
| Accent color   | Warm tone — earthy orange, olive, or terracotta |
| Nav style      | Transparent → solid on scroll, fixed position |
| Logo grid      | Grayscale logos, 5–6 per row, slight opacity |
| CTA section bg | Dark or accent-colored full-width band |
| Process layout | Numbered 3–4 step vertical or horizontal list |
| Card borders   | Minimal — either borderless or 1px solid light grey |