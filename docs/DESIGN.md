# Design Guide

This is the living design reference for the site. Agent-specific lock rules live in `AGENTS.md`; do not duplicate them here.

## Brand Feel

- Premium leadership consultancy
- Modern, clean, structured, and calm
- Spacious layouts with clear hierarchy
- Orange used as an intentional accent, not a general decoration color
- Motion should be subtle and purposeful

## Core Palette

Use Tailwind tokens from `tailwind.config.js` wherever possible.

| Role | Value | Tailwind |
| --- | --- | --- |
| Dark navy background | `#051424` | `bg-background`, `bg-surface` |
| Dark navy text | `rgb(12,26,55)` | arbitrary value |
| Muted dark text | `rgba(12,26,55,0.7)` | arbitrary value |
| Main orange | `#ed5c2c` | `text-secondary`, `bg-secondary` |
| Orange hover | `#dd5128` | `bg-secondary-container` |
| Light section | `#F8F8F6` | arbitrary value |
| White cards | `#ffffff` | `bg-white` |
| Dark surface card | `#0d1c2d` | `bg-surface-container-low` |
| Dark card text | `#d4e4fa` | `text-on-surface` |
| Muted dark-card text | `#c6c6cd` | `text-on-surface-variant` |

## Readability Rules

Light backgrounds and light cards must use dark text:

- Titles: `text-[rgb(12,26,55)]`
- Body: `text-[rgba(12,26,55,0.7)]` or `text-[rgb(12,26,55)]`
- Never use `text-on-surface`, `#d4e4fa`, or similarly light colors on white or off-white cards.

Dark backgrounds should use:

- Titles/body: `text-on-surface`
- Muted body: `text-on-surface-variant`
- Accent labels/links: `text-secondary`

## Typography

- Headings: `font-display` / Manrope
- Body: `font-sans` / Inter
- Use compact, bold headings.
- Use readable body copy with generous line height.
- Eyebrow labels use uppercase/caps styling through `label-caps` where available.

Suggested hierarchy:

| Element | Style |
| --- | --- |
| H1 | `font-display font-black`, large and tight |
| H2 | `font-display font-bold`, centered when section-led |
| H3 | `font-manrope font-bold`, usually 18px or 24px |
| Body | `font-inter font-normal text-[14px]` to `text-[18px]` depending on context |
| Card body | `font-inter font-normal text-[14px] leading-[23px]` |

## Layout

- Prefer full-width page sections with constrained inner containers.
- Common container widths: `max-w-7xl`, `max-w-[1200px]`, or locked section-specific widths.
- Use generous vertical rhythm: `py-24`, `md:py-32`, `lg:py-40` for major sections.
- Avoid nested cards. Cards are for repeated items, framed tools, or focused content blocks.

## Cards

Shared card behavior:

- Cards use `rounded-lg` unless a component has a stronger established shape.
- Cards sit raised by default: use `-translate-y-1` plus an appropriate shadow.
- Do not add extra movement on hover for raised cards. Hover should emphasize border color, icon tint, or text color.
- Preserve the section's existing background, text, and accent colors when applying the shared card behavior.

For light cards:

- `bg-white`
- Default border: use a subtle dark border such as `border-[rgba(12,26,55,0.12)]` on light cards.
- Orange hover border: use restrained opacity such as `hover:border-secondary/35`; avoid full-strength orange borders unless the card is selected or active.
- Raised cards can be elevated by default with `-translate-y-1 shadow-lg`; hover should then emphasize border color rather than adding more movement.
- Dark navy title/body text

For dark cards:

- Keep the card's existing dark or glass background.
- Default border: use `border-white/[0.12]`, `border-outline-variant/20`, or the closest existing low-contrast border token.
- Orange hover border: use `hover:border-secondary/35` or lower.
- Raised dark cards should use `-translate-y-1 shadow-glow-sm` or the nearest existing dark-context shadow.

Default icon-over-title card pattern:

```tsx
<div className="flex flex-col items-center text-center -translate-y-1 p-5 rounded-lg bg-white border border-[rgba(12,26,55,0.12)] shadow-lg transition-colors duration-300 hover:border-secondary/35">
  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mb-3">
    <Icon className="w-5 h-5 text-orange-600" />
  </div>
  <h3 className="font-manrope font-bold text-[18px] leading-[25px] text-[rgb(12,26,55)] mb-1">
    Title
  </h3>
  <p className="font-inter font-normal text-[14px] leading-[23px] text-[rgba(12,26,55,0.7)]">
    Body copy.
  </p>
</div>
```

## Buttons

- Button text is locked at `16px` with a normal readable line height.
- Use `text-[16px] leading-[24px]` on button-like controls, including CTA links styled as buttons.
- Primary actions use `bg-secondary`.
- Hover states can use `bg-secondary-container`.
- Keep one primary CTA per section when possible.
- Button motion should be restrained: small lift or color change.

## Locked Section Notes

Detailed locked component rules live in `AGENTS.md`. In particular:

- `components/sections/Coach2TextColumnSection.tsx` is locked.
- `components/sections/CoachHero.tsx` is locked.
- `components/sections/2ColumnLImageRTextCards.tsx` is locked and has exact style requirements.

Ask for explicit permission before changing locked components.
