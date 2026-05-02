# Team Loop Component Documentation

## Overview
Dynamic team/consultant card loop components that iterate through data arrays to generate repeated HTML cards. Supports Liquid-style templating and React/Next.js implementations.

## Data Structure

The components expect data in this format (from `lib/data.ts`):

```typescript
interface TeamMember {
  name: string              // Coach name
  role: string              // Role/position
  image?: string            // Profile image URL
  focus?: string            // Short description
  howIHelp?: string         // Detailed help text (can contain HTML)
  whatIDo?: Array<{         // Key services
    title: string
    description: string
  }>
  aboutCraig?: string       // Bio (can contain HTML)
  qualifications?: string[] // List of qualifications
  experience?: string[]     // List of experiences
}
```

## Liquid Template Version

**File:** `components/sections/TeamLoop.liquid`

### Basic Usage
```liquid
{% include 'TeamLoop' %}
```

### With Modifiers
```liquid
{% include 'TeamLoop' limit: 3 %}
{% include 'TeamLoop' limit: 3 offset: 2 %}
{% include 'TeamLoop' reversed: true %}
{% include 'TeamLoop' show_header: false %}
```

### Available Modifiers

| Modifier | Type | Description | Example |
|----------|------|-------------|----------|
| `limit` | number | Maximum items to display | `limit: 3` |
| `offset` | number | Skip first N items | `offset: 2` |
| `reversed` | boolean | Reverse the order | `reversed: true` |
| `show_header` | boolean | Show section header | `show_header: false` |

### Liquid Tags Used

- `{% assign %}` - Assign variables
- `{% for %}` / `{% endfor %}` - Loop through array
- `{% if %}` / `{% endif %}` - Conditional logic
- `{% comment %}` / `{% endcomment %}` - Comments
- `{{ variable }}` - Output variable
- `| default` - Default filter
- `| limit` - Limit filter
- `| offset` - Offset filter
- `| reverse` - Reverse filter

## React/Next.js Version

**File:** `components/sections/TeamLoop.tsx`

### Basic Usage
```tsx
import { TeamLoop } from '@/components/sections/TeamLoop'

export default function Page() {
  return <TeamLoop />
}
```

### With Props
```tsx
<TeamLoop limit={3} />
<TeamLoop limit={3} offset={2} />
<TeamLoop limit={3} reversed={true} />
<TeamLoop showHeader={false} />
<TeamLoop people={customData} />
```

### Props Interface

```typescript
interface TeamLoopProps {
  limit?: number              // Maximum items to display
  offset?: number             // Skip first N items (default: 0)
  reversed?: boolean          // Reverse the order (default: false)
  showHeader?: boolean        // Show section header (default: true)
  people?: TeamMember[]       // Custom data array
}
```

### Usage Examples

```tsx
// Show all coaches
<TeamLoop />

// Show first 3 coaches
<TeamLoop limit={3} />

// Skip first 2, show next 3
<TeamLoop limit={3} offset={2} />

// Show last 3 coaches (reversed)
<TeamLoop limit={3} reversed={true} />

// Hide section header
<TeamLoop showHeader={false} />

// Use custom data
const customCoaches = [
  {
    name: "John Doe",
    role: "Senior Coach",
    image: "/images/john.jpg",
    focus: "Leadership development specialist",
    qualifications: ["PhD Psychology", "10+ years experience"]
  }
]

<TeamLoop people={customCoaches} />
```

## Output Structure

Both versions generate the following HTML structure:

```html
<section class="team-loop-section">
  <div class="max-w-7xl mx-auto px-6 py-16">
    
    <!-- Optional Header -->
    <div class="text-center mb-16">
      <span class="label-caps text-secondary">Our Team</span>
      <h2 class="font-display text-4xl font-bold">Meet the Coaches</h2>
      <p class="text-on-surface-variant">Description text...</p>
    </div>
    
    <!-- Cards Grid -->
    <div class="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <!-- Coach Card -->
      <article class="coach-card">
        <!-- Image -->
        <div class="relative h-64">
          <img src="coach-image.jpg" alt="Name - Role" />
        </div>
        
        <!-- Content -->
        <div class="p-6">
          <h3 class="font-display text-xl font-bold">Coach Name</h3>
          <p class="text-sm text-secondary">Role</p>
          <p class="text-on-surface-variant text-sm">Focus description...</p>
          
          <!-- Qualifications -->
          <ul class="space-y-2">
            <li>Qualification 1</li>
            <li>Qualification 2</li>
          </ul>
          
          <!-- CTA -->
          <a href="/coaches/coach-name" class="coach-cta">
            Learn More
          </a>
        </div>
      </article>
      
    </div>
  </div>
</section>
```

## Styling

Both components use Tailwind CSS classes:

- **Grid Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Card Styling:** `bg-surface-container-low rounded-2xl border hover:shadow-xl`
- **Typography:** `font-display` for headings, `text-on-surface` for content
- **Colors:** `text-secondary` for accents, `text-on-surface-variant` for muted text
- **Transitions:** `transition-all duration-300` for hover effects

## Features

### Automatic Fallbacks
- Missing image → Initials placeholder
- Missing description → Default text
- Empty data → "No team members found" message

### Responsive Design
- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop

### Accessibility
- Semantic HTML (`<article>`, `<section>`)
- Proper alt text for images
- Focus states on interactive elements
- ARIA-friendly structure

### Performance
- Lazy loading for images
- Efficient array operations
- Minimal re-renders (React version)

## Integration Examples

### Liquid Template (Jekyll/Shopify style)
```liquid
{% comment %}
Include in any page or template
{% endcomment %}

{% include TeamLoop.liquid limit: 6 %}
```

### React/Next.js
```tsx
// app/coaches/page.tsx
import { TeamLoop } from '@/components/sections/TeamLoop'

export default function CoachesPage() {
  return (
    <main>
      <TeamLoop limit={6} />
    </main>
  )
}
```

## Customization

### Override Styles
```css
/* Custom CSS */
.coach-card {
  @apply custom-border-color;
}

.coach-card:hover {
  @apply custom-hover-effect;
}
```

### Extend Data
Add custom fields to `TeamMember` interface:
```typescript
interface TeamMember {
  // ... existing fields
  socialLinks?: {
    platform: string
    url: string
  }[]
}
```

Then update the component to render these fields.

## Troubleshooting

### No cards displaying
- Check data is properly formatted
- Verify `people` array is not empty
- Check console for errors

### Styling issues
- Ensure Tailwind CSS is configured
- Check for conflicting CSS
- Verify class names are correct

### TypeScript errors
- Import types correctly
- Check interface definitions
- Verify data matches expected shape

## Best Practices

1. **Limit data fetching**: Use `limit` prop to avoid loading unnecessary data
2. **Lazy load images**: Always use `loading="lazy"` for card images
3. **Optimize loops**: Apply filters before rendering when possible
4. **Cache data**: Consider caching static team data
5. **Accessibility**: Always include alt text and semantic HTML

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 14+, Chrome Android 90+

## License

MIT License - Free to use and modify
