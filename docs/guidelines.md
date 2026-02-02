# Design Guidelines

## One UI Design Philosophy

One UI is Samsung's design language focused on natural and intuitive user experiences. This kit implements the principles from Galaxy One UI 8, 8.5, and 9.

## Core Principles

### 1. **One-Handed Use**
- Important interactive elements are placed in the lower half of the screen
- Critical information is displayed in the upper half for easy viewing
- Touch targets are optimized for thumb reach

### 2. **Consistency**
- Uniform spacing and layout patterns across all components
- Consistent color usage and semantic meaning
- Predictable interaction patterns

### 3. **Clarity**
- Clear visual hierarchy
- Adequate contrast ratios
- Readable typography at all sizes

### 4. **Accessibility First**
- WCAG 2.1 AA compliance minimum
- Support for screen readers
- Keyboard navigation support

## Visual Language

### Spacing
We use an 8px base grid system:
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `xxl`: 48px

### Typography
- Font Family: Samsung One (fallback to system fonts)
- Scale: 12px to 36px
- Weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Colors
- Light theme: Clean whites and subtle grays
- Dark theme: True blacks with elevated surfaces
- Accent: Blue (#1976D2 light, #42A5F5 dark)

### Border Radius
- Subtle curves for natural feel
- Ranges from 4px (sm) to 16px (xl)
- Full radius (9999px) for pills and circular elements

## Component Guidelines

### Buttons
- Minimum height: 48px for touch targets
- Clear visual states: default, hover, pressed, disabled
- Primary actions use accent color
- Secondary actions use subtle backgrounds

### Inputs
- Clear focus indicators
- Helper text for guidance
- Error states with semantic colors
- Accessible labels and placeholders

### Navigation
- Bottom navigation for primary actions (thumb-friendly)
- Top app bars for context and secondary actions
- Clear active states

### Surfaces
- Cards with subtle elevation
- Consistent padding (16px minimum)
- Clear visual separation

## Dark Theme

Dark theme follows Samsung's One UI dark mode principles:
- True black (#000000) for OLED displays
- Elevated surfaces use subtle grays
- Adjusted accent colors for better visibility
- Maintained contrast ratios

## Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Adaptive Layouts
- Single column on mobile
- Multi-column layouts on larger screens
- Flexible grids and spacing

## Best Practices

1. **Use Design Tokens**: Always reference tokens instead of hardcoding values
2. **Test in Both Themes**: Ensure components work in light and dark modes
3. **Accessibility Check**: Run accessibility audits regularly
4. **Real Device Testing**: Test on actual Galaxy devices when possible
5. **Performance**: Optimize for smooth 60fps interactions
