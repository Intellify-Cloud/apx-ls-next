# Design Specifications

## Color Palette
- Primary Accent: `#ed5c2c` (burnt orange/rust)
- Secondary Accent: `#dd5128` (darker orange for hover states)
- Background Dark: `#051424` (navy blue)
- Background Light: `#ffffff` (white)
- Surface: `#0A0A0F` (almost black)
- Text Primary: `#ffffff` (white)
- Text Secondary: `text-zinc-400` (muted zinc)
- Text Accent: `text-[ed5c2c]` (primary accent color)
- Border: `border-white/[0.08]` (subtle white borders)
- Overlay: `bg-[rgba(10,10,15,0.7)]` (dark transparent overlay)

## Typography
- Heading Font: `font-display` (custom display font)
- Body Font: `font-sans` (sans-serif)
- Mono Font: `font-mono` (monospace)
- Weights: 
  - Light: 300
  - Regular: 400
  - Medium: 500
  - Semi-bold: 600
  - Bold: 700
  - Extra-bold: 800
  - Black: 900
- Sizes:
  - Heading: 63px (with 63px line height)
  - Body: 21px (with 28px line height)
  - Label/Caps: text-xs, text-[10px] etc.
- Tracking: tracking-tight, tracking-widest, tracking-wider as appropriate

## Component Styles

### Navbar
- Position: fixed
- Background: rgba(5,20,36,0.55) with backdrop-filter: blur(12px)
- Border: 1px solid rgba(255,255,255,0.1)
- Height: h-20
- Logo: 160x48px
- Links: 
  - Default: text-white
  - Hover: text-[ed5c2c]
  - Active: text-[ed5c2c]
- CTA Button: 
  - Background: bg-[ed5c2c]
  - Text: text-[#051424]
  - Hover: bg-[dd5128]
  - Border-radius: rounded-[12px]
  - Padding: px-7 py-3.5

### Hero Section
- Background: Full-screen video/image with Ken Burns effect
- Overlay: Linear gradient (rgba(5,20,36,0.55) 0%, rgba(5,20,36,0.45) 40%, rgba(5,20,36,0.85) 100%)
- Ambient Orb: radial-gradient(ellipse, rgba(255,182,144,0.04) 0%, transparent 70%) with blur(40px)
- Heading: 
  - Font: font-display font-black
  - Size: text-[63px] leading-[63px]
  - Color: text-white
  - Transform: uppercase
- Subtitle: 
  - Font: text-[21px] font-[300] leading-[28px]
  - Color: text-white/90
- Buttons:
  - Primary: 
    - Background: bg-[ed5c2c]
    - Text: text-[#051424]
    - Hover: bg-[dd5128]
    - Border-radius: rounded-[12px]
  - Secondary:
    - Border: border-white/15
    - Text: text-[ed5c2c]
    - Hover: bg-white/5
    - Border-radius: rounded-[12px]
- Chevron: text-[ed5c2c] animate-bounce

### ThreePlainCards Section
- Background: Full-bleed image with dark overlay bg-[rgba(10,10,15,0.7)]
- Cards:
  - Background: bg-[#0A1A2F] (dark navy)
  - Border: border-white/[0.04]
  - Border-radius: rounded-lg
  - Padding: p-8
  - Transition: transition-all duration-300
  - Hover: hover:-translate-y-1 hover:shadow-md
- Icons:
  - Background: bg-[ed5c2c] (solid filled)
  - Size: w-10 h-10
  - Text: text-white
  - Margin: mb-5
- Heading:
  - Font: font-display text-xl font-bold text-white tracking-tight uppercase
  - Margin: mb-3
- Sub-label:
  - Font: text-[ed5c2c] text-xs font-semibold uppercase tracking-wider
  - Margin: mb-4 (when present)
- Body:
  - Font: text-zinc-400 text-base leading-relaxed

### Clients Section
- Logo Container:
  - Background: bg-gray-100
  - Border: border border-gray-200
  - Shadow: shadow-sm
  - Flex: flex items-center justify-center
  - Dimensions: w-[160px] md:w-[200px] h-[100px] md:h-[120px]
  - Padding: p-4
  - Hover: hover:bg-gray-50 hover:shadow-md
  - Transition: transition-all duration-300
- Animation: Horizontal scrolling with space-x-6 spacing
- Images: Full color (no grayscale), object-contain

### Testimonials Section
- Quote Icon: text-[ed5c2c] w-8 h-8
- Background: bg-primary/80 backdrop-blur-md border-white/10
- Text: 
  - Primary: text-on-surface
  - Variant: text-on-surface-variant/90
  - Name: text-on-surface font-bold
  - Company: label-caps text-secondary text-[10px] tracking-widest
- Card: rounded-2xl border shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-opacity-90 p-8 h-full flex flex-col

### Process Section
- Step Number:
  - Background: bg-[ed5c2c]/20
  - Size: w-[48px] h-[48px] rounded-[12px]
  - Text: text-[ed5c2c] font-mono text-[24px] font-[700]
  - Flex: flex items-center justify-center
- Step Title: font-heading text-xl font-[600] text-white mb-[8px]
- Step Description: text-zinc-400 text-sm leading-[1.6]
- Card: 
  - Background: rgba(13,28,45,0.6) backdrop-filter: blur(8px)
  - Border: border border-white/[0.08]
  - Radius: rounded-[12px]
  - Transition: transition-all duration-300
  - Hover: hover:border-amber-300/20 hover:shadow-glow-sm
- Image: 
  - Container: aspect-[16/9] rounded-[12px] overflow-hidden
  - Gradient: absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
  - Transition: transition-transform duration-300 group-hover:scale-105

### Footer
- Background: bg-[#12121A] border-t border-white/[0.06]
- Container: max-w-6xl mx-auto px-6 lg:px-12 py-16
- Sections:
  - Logo: 160x48px brightness-0 invert opacity-80 mb-5
  - Description: text-zinc-500 text-sm leading-relaxed
  - Headings: font-display text-sm font-semibold text-zinc-300 tracking-widest uppercase mb-5
  - Links: text-zinc-500 hover:text-amber-400 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:text-amber-400
  - Social: 
    - Container: flex space-x-4 mb-6
    - Icons: w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-200
    - Platform-specific: facebook, linkedin, whatsapp SVGs with currentColor
  - Contact: 
    - Email: text-zinc-500 text-sm hover:text-amber-400 transition-colors
    - Legal links: text-zinc-600 hover:text-amber-400 transition-colors
- Copyright: text-zinc-600 text-sm

## Animation & Transition Patterns
- Standard Transition: transition-all duration-300
- Hover Effects: 
  - Scale: hover:-translate-y-[1-4px]
  - Shadow: hover:shadow-[lg/2xl/glow-sm]
  - Opacity: hover:bg-opacity-[90/5/20/30]
  - Brightness: hover:brightness-110
- Bounce Animation: animate-bounce (for chevron)
- Scroll Animation: animate-scroll (for clients)

## Spacing System
- Container Padding: px-6 lg:px-12
- Section Padding: 
  - Small: py-[96px]
  - Medium: py-[128px] 
  - Large: py-[160px]
- Grid Gap: gap-[32px] (cards), gap-6 (standard), gap-8 (enhanced)
- Element Spacing: mb-[8px], mb-[16px], mb-[24px], mb-[48px], mb-[64px]
- Internal Card Padding: p-7, p-8
- Icon Sizing: w-[48px] h-[48px], w-10 h-10, w-8 h-8
- Border Radius: rounded-[12px], rounded-lg, rounded-xl, rounded-2xl, rounded-full
- Shadows: shadow-sm, shadow-xl, shadow-2xl, shadow-lg, shadow-[glow-sm]

## Responsive Breakpoints
- Mobile: base
- Tablet: md: (768px)
- Desktop: lg: (1024px)
- Text Scaling: 
  - Base: text-[size]
  - Medium: md:text-[size]
  - Large: lg:text-[size]