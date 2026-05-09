# Design System Spec & Agent Build Prompt

## Section: `2ColumnLmageRTextCards.tsx`

 
---
 
## 1. Section Overview
 
A two-column, full-width section used to communicate a core value proposition. The left column features a lifestyle image with a decorative background panel. The right column contains an intro text block and three stacked feature cards, each with an icon and descriptive paragraph.
 
---
 
## 2. Design Tokens
 
### Background
| Property | Value |
|---|---|
| Section background | `#f1f5f9` — `hsl(210, 40%, 96%)` |
| Image panel / shadow background | `#ddd6d6` |
| Card background | `rgb(255, 255, 255)` |
 
### Primary Color
| Role | Value |
|---|---|
| Primary text | `rgb(12, 26, 55)` |
| Primary text at 80% opacity | `rgba(12, 26, 55, 0.8)` |
| Icon accent | Orange — `rgb(234, 88, 12)` or equivalent brand orange |
| Icon background | Light orange tint — `rgba(234, 88, 12, 0.1)` |
 
---
 
## 3. Typography
 
### Section Heading — `<h2>`
| Property | Value |
|---|---|
| Text transform | `uppercase` |
| Text align | `center` |
| Font style | `normal` |
| Font weight | `700` |
| Color | `rgb(12, 26, 55)` |
| Font size | `42px` |
| Line height | `42px` |
| Tailwind class | `text-[42px] leading-[42px] font-bold uppercase text-center text-[rgb(12,26,55)]` |
 
### Intro Paragraph — `<p>` (right column, above cards)
| Property | Value |
|---|---|
| Text transform | `normal-case` |
| Font style | `normal` |
| Font weight | `500` |
| Color | `rgba(12, 26, 55, 0.8)` |
| Font size | `18px` |
| Line height | `25px` |
| Tailwind class | `text-lg md:text-xl font-medium leading-relaxed normal-case mb-8 text-primary/80` |
 
### Card Title — `<h3>` inside each card
| Property | Value |
|---|---|
| Text transform | `uppercase` |
| Font style | `normal` |
| Font weight | `700` |
| Color | `rgb(12, 26, 55)` |
| Font size | `14px` |
| Line height | `21px` |
| Tailwind class | `text-[14px] leading-[21px] font-bold uppercase text-[rgb(12,26,55)]` |
 
### Card Body — `<p>` inside each card
| Property | Value |
|---|---|
| Font size | `14px` |
| Color | `rgba(12, 26, 55, 0.7)` |
| Font weight | `400` |
| Tailwind class | `text-sm text-primary/70 leading-relaxed` |
 
---
 
## 4. Layout
 
### Section Wrapper
```
max-w-7xl mx-auto px-6 py-20
```
 
### H2 Heading
```
text-center mb-12 (or mb-16)
```
 
### Two-Column Grid
```
grid grid-cols-1 md:grid-cols-2 gap-12 items-center
```
 
### Left Column — Image Block
- Outer wrapper: `relative` with a decorative background panel offset behind the image
- Background panel: `absolute` div, color `#ddd6d6`, rounded, offset top-left (e.g. `-top-4 -left-4 w-full h-full rounded-2xl`)
- Image: `relative z-10`, `rounded-2xl`, `w-full object-cover`, `aspect-[3/4]` or fixed height
### Right Column — Text + Cards
- Intro `<p>` sits above the cards with `mb-8`
- Three cards stacked vertically with `space-y-4`
### Card Structure
```
flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm
```
- Icon container: `w-10 h-10 rounded-xl flex items-center justify-center bg-orange-100 shrink-0`
- Icon: orange SVG or lucide-react icon, `w-5 h-5 text-orange-600`
- Text block: `flex flex-col gap-1`
  - `<h3>` card title
  - `<p>` card body
---
 
## 5. Component Cards — Content Slots
 
| Card | Icon | Title | Body |
|---|---|---|---|
| 1 | Hand / touch icon | DIRECT EXPERIENCE | A consumer who touches, tastes, or uses a product remembers it differently than one who only sees an ad. |
| 2 | Chat bubble / speech icon | IN-THE-MOMENT FEEDBACK | Capture genuine reactions before opinions fade. Real-time insight reveals what surveys weeks later cannot. |
| 3 | Target / bullseye icon | ACTIONABLE CLARITY | Move from "we think" to "we know." Ground your strategy in evidence from the people you're trying to reach. |
 
---
 
## 6. Agent Build Prompt
 
Use the following prompt to instruct an agent (e.g. Cursor, Copilot, or Claude Code) to build this component:
 
---
 
## 7. File Conventions
 
| Item | Value |
|---|---|
| File name | `2-column_left-1-image_right.tsx` |
| Location | `components/sections/` |
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Icons | `lucide-react` |
| Images | `next/image` |
| Export | Named + default |