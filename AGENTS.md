# Project Rules

## LOCKED COMPONENTS — DO NOT MODIFY WITHOUT EXPLICIT USER PERMISSION

### `components/sections/Coach2TextColumnSection.tsx`
**LOCKED.** This component must not be changed. It has:
- NO image
- NO `Image` import
- Left column: bio text (`<p>`)
- Right column: qualifications list (`<h3>` + `<ul>`)
- Top-aligned columns (`items-start`)
- Section heading: "A Journey of Authentic Leadership"

### `components/sections/CoachHero.tsx`
**LOCKED.** Do not modify without asking.

---

## COLOR & STYLE RULES — NEVER OVERRIDE

### Card Text Colors (Light Backgrounds)
**White or light-colored cards** (e.g., `bg-white`, `bg-[#f8fafc]`, `bg-[#F8F8F6]`) must use **dark text only**:
- Titles: `text-[rgb(12,26,55)]` (dark navy)
- Body: `text-[rgba(12,26,55,0.7)]` or `text-[rgb(12,26,55)]`
- **NEVER** use light colors like `rgb(212,228,250)` on light backgrounds — it's unreadable.

### Icon Containers
- Use `rounded-lg` for square-ish containers
- Background: `bg-secondary/10` (orange-tinted) or `bg-orange-100`
- Center icon with `flex items-center justify-center`

### Card Layout Pattern
- Icon above title → `flex flex-col items-center text-center`
- Icon container → `mb-3` spacing below
- Title → `font-manrope font-bold text-[14px]` (18px for section cards) with `leading-[21px]` or `leading-[25px]`
- Body → `font-inter font-normal text-[14px] leading-[23px]`

---

## SECTION SPECIFICATIONS

### `components/sections/2ColumnLImageRTextCards.tsx` ("Transformation Through Action" / Trial Section)
**LOCKED.** This section must use these exact specifications:

**Layout:**
- Two-column grid (`grid-cols-1 lg:grid-cols-2`) with centered content
- Left column: square image with gray decorative panel offset
- Right column: vertically stacked feature cards

**Card Design:**
- Background: `bg-white` with `border border-outline-variant/10` and `shadow-sm`
- Layout: `flex flex-col items-center text-center` — icon above title, both centered
- Icon container: `w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mb-3`
- Icon size: `w-5 h-5`, color: `text-orange-600`
- Card title: `font-manrope font-bold text-[18px] leading-[25px] text-[rgb(12,26,55)] mb-1`
- Card body: `font-inter font-normal text-[14px] leading-[23px] text-[rgba(12,26,55,0.7)]`
- Spacing: `gap-4` between cards, `p-5` inside each card

**Section Styling:**
- Section background: `bg-[#F8F8F6]`
- Section padding: `py-24 md:py-32 lg:py-40`
- Max container width: `max-w-[1000px]`
- Section title label: `label-caps text-secondary`
- Main heading: `font-display` dark navy, centered
- Description: `text-[16px] leading-[26px] text-[rgba(12,26,55,0.7)]` centered

**Cards Width Control (tablet/mobile):**
- Cards container: `max-w-[540px] mx-auto` — provides ~20% wider cards on smaller screens

**Icon Mapping (from data):**
- `Hand` (Applied Learning) → `BookOpen`
- `MessageSquare` (Feedback Loop) → `RefreshCw`
- `Target` (Measurable Impact) → `Ruler`

---

Any changes to locked components or style rules require explicit user approval first.

---

## SITE CONTENT MANAGEMENT

### sitetext.yml Pattern
The project uses `sitetext.yml` at the project root as the source of truth for all copy, following the Jekyll pattern. The `lib/data.ts` file serves as the TypeScript equivalent.

### Content Updates
All hero section copy is centralized in `lib/data.ts` under the `hero` key:
- `headline`: Main H1 text
- `subline`: Subtitle/description text  
- `ctaText`: Primary CTA button text

### Home Page Sections (app/page.tsx order)
1. HeroSection
2. ScrollingMotivationsSection
3. ThreePlainCardsSection (Value Stack)
4. ProblemSection - "High performers don't always become great leaders..."
5. BenefitsSection - "More than coaching. It's the foundation for lasting leadership."
6. GuideSection - "Trusted by leaders when performance and people matter."
7. MethodologySection - "We don't use a one-size-fits-all approach..."
8. SuccessOutcomesSection - "Imagine walking into every meeting with clarity..."
9. PrimaryCTASection - "Schedule a Free Discovery Call"
10. ProblemPullQuoteSection
11. ThreeRowTTextM3CardsBText
12. ServicesSection
13. TeamSection
14. ScarfSection
15. ClientsSection
16. TestimonialsSection
17. ProcessSection
18. TwoColumnLeft1ImageRight
19. ContactFormSection

### Animation Settings
- Scroll animations: 70s duration for smooth, deliberate movement
- Hover pause: All carousels pause on hover

### Reference
See `docs/DESIGN.md` → "Site Content Management" section for detailed documentation.

