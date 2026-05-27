# SEO Checklist

Use this as the structural SEO and launch checklist for the site.

## Recommendations

These recommendations are designed to improve organic search visibility without changing the brand voice or requiring significant additional copy. Most are small, targeted adjustments.

### Page Titles & Meta Descriptions

These are the single highest-impact SEO changes available. They do not affect the visible page design; they live in the `<head>` of each page.

| Page | Suggested title |
| --- | --- |
| Home | Apex Leadership Specialists | Executive Coaching & Leadership Development South Africa |
| About | About Apex Leadership Specialists | People Development Consultancy South Africa |
| Services | Leadership Coaching & Development Services | Apex Leadership Specialists |
| Coaches | Meet Our Executive Coaches | Apex Leadership Specialists South Africa |
| Contact | Contact Apex Leadership Specialists | Executive Coaching South Africa |

Meta descriptions:

- Use the page-specific descriptions from `docs/PLAN.md`.
- Keep each meta description under 160 characters.
- Implement as appropriate where it is beneficial.

### Primary Target Keywords

These are the keywords the site should rank for. They should appear in page copy and headings where natural:

- executive coaching South Africa
- leadership coaching South Africa
- leadership development consultancy
- people development South Africa
- Comensa accredited coach
- Enneagram coaching South Africa
- facilitated learning South Africa
- leadership workshops South Africa
- keynote speaker South Africa

For local SEO, consider adding `Durban` or `Cape Town` to some sections or phrases if relevant.

## Structural SEO

- Use a single H1 per page; do not repeat H1s. Current scan shows the main implemented pages follow this pattern.
- All images should have descriptive alt text, for example `Craig Stuart, executive coach, South Africa`, not `coach1.jpg`.
- Each coach's LinkedIn profile is an inbound link. Ensure each coach's LinkedIn profile links back to the website.
- Add schema markup for `LocalBusiness` and `Person` for each coach to improve Google rich results.
- Index all public pages and check Google Search Console after launch.
- Page load speed: compress all images before uploading; use WebP format where possible.
- SSL certificate must be active via `https://`.
- Create `sitemap.xml` and submit it to Google Search Console.

## Implementation Notes

- `app/sitemap.ts` generates the sitemap for public pages, including the homepage, contact page, legal pages, and current coach profile pages.
- `app/robots.ts` allows indexing of public pages and points crawlers to `https://apexleadership.co.za/sitemap.xml`.
- `components/JsonLd.tsx` provides sitewide `LocalBusiness` schema.
- `components/PersonJsonLd.tsx` provides reusable `Person` schema.
- Person schema is implemented on current individual coach profile pages:
  - `app/coaches/craig-stuart/page.tsx`
  - `app/coaches/celia-senekal/page.tsx`
  - `app/coaches/helen-stone/page.tsx`
- Homepage metadata is implemented in `app/page.tsx`.
- Contact page metadata is implemented in `app/contact/layout.tsx`.
- Coach page metadata uses `title.absolute` so Next.js does not duplicate the site name via the global title template.
- Keep alt text human-readable and specific to the visible image.

## Recent Fixes

- Added coach profile URLs to `app/sitemap.ts`.
- Removed the conflict where pages listed in `sitemap.ts` were disallowed in `robots.ts`.
- Added homepage and contact page SEO metadata aligned with the recommendations above.
- Changed sitewide structured data from `Organization` to `LocalBusiness`.
- Added reusable `Person` schema and attached it to the current coach profile pages.
- Improved generic alt text such as `Hero background`.
- Stabilized the Celia Senekal page lookup so schema generation and prerendering do not depend on accented-name encoding.
- Verified these changes with `npm run build`.

## Remaining Recommendations

- Compress large image assets before launch and convert to WebP where practical.
- `next.config.js` currently uses `images.unoptimized: true`; if the deployment platform supports Next image optimization, consider enabling it.
- Add individual coach LinkedIn URLs to the team data if available, then include them in each coach's `Person` schema `sameAs`.
- Confirm each coach's LinkedIn profile links back to the website.
- Submit `sitemap.xml` in Google Search Console after launch.
- Replace the Google Analytics placeholder ID in `app/layout.tsx` before production tracking is expected.
