# Morning Mode — Design System

A web design system derived from the Morning Mode iOS app. Use this as the single source of truth when building the landing page.

---

## Brand Essence

**Tone:** Calm, organized, and energizing — like a gentle sunrise, not an alarm clock.

**Keywords:** Soft · Airy · Rounded · Purposeful · Morning-focused

**Visual signature:**
- White cards floating on a light gray canvas
- Large corner radii (24–32px)
- Pastel icon circles for category color-coding
- Sunrise gradient for hero moments
- All-caps section labels with an orange dash marker

---

## Color Palette

### Surfaces

| Token | Value | Usage |
|-------|-------|-------|
| `--mm-bg` | `#F2F2F7` | Page background (iOS grouped style) |
| `--mm-bg-elevated` | `#F8F9FA` | Alternate sections |
| `--mm-surface` | `#FFFFFF` | Cards, nav bar |
| `--mm-overlay` | `rgba(255,255,255,0.85)` | Glass pills, chips |

### Text

| Token | Value | Usage |
|-------|-------|-------|
| `--mm-text-primary` | `#1A1A1B` | Headlines, stats, titles |
| `--mm-text-secondary` | `#8E8E93` | Body, labels, metadata |
| `--mm-text-tertiary` | `#757575` | Hints, disabled |
| `--mm-text-link` | `#00A8E8` | Inline links ("Tap to preview") |

### Brand Accents

| Name | Token | Hex | App context |
|------|-------|-----|-------------|
| Sunrise Orange | `--mm-orange` | `#FF6B4A` | Routines, hydration, CTAs |
| Teal | `--mm-teal` | `#00D1A0` | Workouts, primary actions |
| Lavender | `--mm-purple` | `#9181F4` | Tasks, AI features |
| iOS Blue | `--mm-blue` | `#007AFF` | Active nav, links |
| Amber | `--mm-amber` | `#E67E22` | Insights, streaks |

Each accent has a soft background variant (`--mm-*-soft`) for icon circles and tinted surfaces.

### Gradients

| Token | Description |
|-------|-------------|
| `--mm-gradient-sunrise` | Yellow → orange → coral. Hero cards, primary CTA |
| `--mm-gradient-sunrise-soft` | Faded sunrise wash for backgrounds |
| `--mm-gradient-card-warm` | Peach fade into white. "In Session" cards |
| `--mm-gradient-insights` | Subtle orange corner glow on stat cards |

### Category Colors

Map features to the same colors users see in the app:

| Category | Foreground | Background | Example |
|----------|------------|------------|---------|
| Routine | `--mm-orange` | `--mm-orange-soft` | Drink water, morning routine |
| Workout | `--mm-teal` | `--mm-teal-soft` | Core Crusher, plank |
| Task | `--mm-purple` | `--mm-purple-soft` | General tasks, AI |
| Insight | `--mm-amber` | `--mm-amber-soft` | Time reclaimed, streaks |

### Semantic

| State | Background | Text |
|-------|------------|------|
| Active / Success | `--mm-green-soft` | `--mm-green-text` |
| Required | `--mm-required-bg` | `--mm-required-text` |
| Destructive | `--mm-red-soft` | `--mm-red-text` |
| In Session | `--mm-red` | white |

---

## Typography

**Font stack:** SF Pro via system fonts — keeps the landing page feeling native to iOS.

```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif;
```

### Scale

| Class | Size | Weight | Use |
|-------|------|--------|-----|
| `.mm-display` | 36–60px | 700 | Hero headline |
| `.mm-title` | 28px | 700 | Page/section titles |
| `.mm-heading` | 18px | 600 | Card titles |
| `.mm-stat` | 28–48px | 700 | Metrics ("7h 10m") |
| `.mm-text` | 16px | 400 | Body copy |
| `.mm-label` | 11px | 600 | Section headers (ALL CAPS) |

### Section labels

Always uppercase with wide letter-spacing. Precede with an orange dash using `.mm-section-header`:

```
── TODAY'S PROGRESS
── DISCOVER ROUTINES
── STREAKS
```

Accent variant (`.mm-label--accent`) uses orange instead of gray.

---

## Spacing & Layout

**Base unit:** 4px

| Token | Value | Common use |
|-------|-------|------------|
| `--mm-space-4` | 16px | Tight gaps |
| `--mm-space-5` | 20px | Card padding, gutters |
| `--mm-space-6` | 24px | Card padding |
| `--mm-space-8` | 32px | Between elements |
| `--mm-space-20` | 80px | Section gaps |

**Container:** max-width 1200px with 20px gutters.

**Section rhythm:** 80px vertical gap between major landing page sections.

---

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--mm-radius-md` | 12px | Preset buttons, inputs |
| `--mm-radius-lg` | 16px | Primary buttons |
| `--mm-radius-xl` | 24px | Cards |
| `--mm-radius-2xl` | 32px | Hero cards, phone frames |
| `--mm-radius-full` | pill | Badges, tab bar, chips |

---

## Shadows

Soft, high-blur, low-opacity — cards should feel like they float, not drop.

| Token | Use |
|-------|-----|
| `--mm-shadow-card` | Default card elevation |
| `--mm-shadow-float` | Tab bar, floating elements |
| `--mm-shadow-xl` | Phone mockups |

---

## Components

All components are prefixed with `mm-` and live in `components.css`.

| Component | Class | Notes |
|-----------|-------|-------|
| Card | `.mm-card` | White, 24px radius, soft shadow |
| Gradient card | `.mm-card--gradient` | Sunrise hero card |
| Primary button | `.mm-btn--primary` | Teal — matches workout "Complete" |
| CTA button | `.mm-btn--cta` | Sunrise gradient — App Store download |
| Secondary button | `.mm-btn--secondary` | Peach fill, orange text — "Add Task" |
| Badge | `.mm-badge--orange/green/required/ai` | Status pills |
| Icon circle | `.mm-icon-circle--routine/workout/task/insight` | Category icons |
| Progress bar | `.mm-progress` | Horizontal, 6px, category-colored fill |
| Progress ring | `.mm-ring` | Circular, teal — workout tracker |
| Glass pill | `.mm-glass-pill` | Time/weather chip style |
| Tab bar | `.mm-tab-bar` | Bottom nav reference |
| Phone frame | `.mm-phone` | Screenshot mockups |

---

## Landing Page Guidance

### Hero
- Use the sunrise gradient (`--mm-gradient-sunrise`) or the soft landscape wash
- Pair `.mm-display` headline with a phone mockup (`.mm-phone`)
- Primary CTA: `.mm-btn--cta` ("Download on the App Store")
- Secondary: `.mm-btn--ghost` ("See how it works")

### Feature sections
- Alternate `--mm-bg` and `--mm-bg-elevated` backgrounds
- One feature per card, icon circle matching app category color
- Include actual app screenshots inside `.mm-phone` frames

### Social proof / stats
- Use `.mm-card--insights` with `.mm-stat` for metrics
- Mirror the Insights screen: large numbers, small all-caps labels

### Footer
- Minimal — logo, App Store badge, privacy/terms links
- Optional: `.mm-tab-bar` as a decorative element showing app navigation

---

## File Structure

```
design-system/
├── tokens.css        ← CSS custom properties (import first)
├── typography.css    ← Text styles
├── components.css    ← UI components (imports tokens + typography)
├── DESIGN_SYSTEM.md  ← This document
└── preview.html      ← Visual reference (open in browser)
```

### Usage

```html
<link rel="stylesheet" href="design-system/components.css" />
```

Or in a build pipeline:

```css
@import "./design-system/tokens.css";
```

---

## Do's and Don'ts

**Do**
- Keep generous whitespace — the app breathes
- Use category colors consistently (orange = routine, teal = workout, purple = task)
- Round everything; sharp corners break the brand
- Use system fonts for iOS authenticity

**Don't**
- Use harsh shadows or high-contrast borders
- Mix unrelated accent colors on the same component
- Use dark backgrounds except for optional dark mode
- Overcrowd cards — one idea per card, like the app

---

## Dark Mode (optional)

Add the `auto-dark` class to `:root` for a dark variant. Tokens are defined under `@media (prefers-color-scheme: dark)`. The landing page can default to light mode to match App Store screenshots.
