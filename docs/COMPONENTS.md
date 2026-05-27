# Components

This file keeps lightweight notes for reusable components that need usage context beyond their source code.

## TeamLoop

File: `components/sections/TeamLoop.tsx`

`TeamLoop` renders a responsive grid of coach/team cards from `siteContent.team.people` by default.

### Import

```tsx
import { TeamLoop } from '@/components/sections/TeamLoop'
```

### Basic Usage

```tsx
<TeamLoop />
```

### Props

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `limit` | `number` | none | Maximum number of people to render |
| `offset` | `number` | `0` | Skip the first N people |
| `reversed` | `boolean` | `false` | Reverse rendered order |
| `showHeader` | `boolean` | `true` | Show or hide section header |
| `people` | `TeamMember[]` | `siteContent.team.people` | Override the source data |

### Examples

```tsx
<TeamLoop limit={3} />
<TeamLoop limit={3} offset={1} showHeader={false} />
<TeamLoop reversed />
<TeamLoop people={customTeam} showHeader={false} />
```

### Data Shape

```ts
interface TeamMember {
  name: string
  role: string
  image?: string
  focus?: string
  howIHelp?: string
  whatIDo?: Array<{ title: string; description: string }>
  aboutCraig?: string
  qualifications?: string[]
  experience?: string[]
}
```

### Behavior

- Renders 1 column on mobile, 2 on tablet, and 3 on desktop.
- Uses the first initial as a fallback when `image` is missing.
- Shows up to 3 qualifications or up to 2 `whatIDo` items.
- Builds profile links from the coach name, e.g. `/coaches/craig-stuart`.
- Shows a simple empty state if no people are provided.

### Related Example File

`components/sections/TeamLoopUsage.examples.tsx` contains development examples. It is not imported by the app.
