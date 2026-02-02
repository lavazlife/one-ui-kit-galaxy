# Accessibility Guidelines

## Overview

This UI kit is designed with accessibility as a core principle, aiming to meet WCAG 2.1 Level AA standards and provide an inclusive experience for all users.

## Color Contrast

### Standards
- **Normal text**: Minimum contrast ratio of 4.5:1
- **Large text** (18pt+ or 14pt+ bold): Minimum contrast ratio of 3:1
- **UI components**: Minimum contrast ratio of 3:1

### Implementation
All color tokens in this kit have been tested for contrast compliance:
- Light theme text on backgrounds meets minimum 4.5:1 ratio
- Dark theme text on backgrounds meets minimum 4.5:1 ratio
- Interactive elements maintain 3:1 contrast with adjacent colors

## Keyboard Navigation

### Focus Indicators
- All interactive elements have visible focus states
- Focus indicators use high contrast colors
- Focus ring with minimum 2px outline

### Tab Order
- Logical tab order follows visual layout
- Skip links for main content navigation
- No keyboard traps

### Keyboard Shortcuts
Common patterns:
- `Tab`: Navigate forward
- `Shift + Tab`: Navigate backward
- `Enter` or `Space`: Activate buttons
- `Esc`: Close modals/dialogs
- Arrow keys: Navigate lists and menus

## Screen Reader Support

### Semantic HTML
- Use proper heading hierarchy (h1-h6)
- Semantic elements (`<nav>`, `<main>`, `<article>`, etc.)
- Form labels properly associated with inputs

### ARIA Labels
- `aria-label` for icons without visible text
- `aria-describedby` for helper text
- `aria-live` for dynamic content updates
- `role` attributes where semantic HTML isn't sufficient

### Alt Text
- Descriptive alt text for informative images
- Empty alt text (`alt=""`) for decorative images
- Icons include accessible labels

## Touch Targets

### Size Requirements
- Minimum touch target: 48x48px (following Material Design and iOS guidelines)
- Adequate spacing between interactive elements (minimum 8px)
- Larger targets for primary actions

### Mobile Optimization
- Bottom navigation for thumb-friendly access
- Important actions in lower screen area
- Avoid small touch targets in hard-to-reach areas

## Motion and Animation

### Reduced Motion
- Respect `prefers-reduced-motion` user preference
- Provide instant transitions when reduced motion is preferred
- Essential motion only (no decorative animations)

### Animation Duration
- Short: 100-200ms for micro-interactions
- Medium: 200-300ms for component transitions
- Long: 300-500ms for page transitions
- Never exceed 500ms for UI animations

## Color Blindness

### Color Independence
- Never rely solely on color to convey information
- Use icons, text labels, and patterns alongside color
- Semantic colors include visual indicators (icons, text)

### Testing
Test with color blindness simulators:
- Protanopia (red-blind)
- Deuteranopia (green-blind)
- Tritanopia (blue-blind)

## Text and Typography

### Font Size
- Minimum body text: 16px (14px acceptable for secondary text)
- Support text scaling (respect user font size preferences)
- Relative units (rem, em) instead of fixed pixels

### Line Height
- Minimum 1.5 for body text
- Adequate spacing for readability
- Shorter line heights acceptable for headings

### Text Spacing
- Respect user text spacing preferences
- Adequate letter and word spacing
- Proper paragraph spacing

## Forms and Inputs

### Labels
- Every input has an associated label
- Labels remain visible when input is focused
- Clear, descriptive label text

### Error Messages
- Clear, specific error messages
- Announce errors to screen readers
- Visual indicators beyond color (icons, text)

### Help Text
- Contextual help where needed
- Associated with inputs using `aria-describedby`
- Available before user makes mistakes

## Testing Checklist

- [ ] All interactive elements keyboard accessible
- [ ] Visible focus indicators on all focusable elements
- [ ] Color contrast ratios meet WCAG AA standards
- [ ] Screen reader announces all content correctly
- [ ] Touch targets minimum 48x48px
- [ ] Respects `prefers-reduced-motion`
- [ ] Works with browser zoom up to 200%
- [ ] Form inputs have proper labels and error handling
- [ ] No keyboard traps
- [ ] Semantic HTML structure

## Tools and Resources

### Testing Tools
- **axe DevTools**: Browser extension for accessibility testing
- **WAVE**: Web accessibility evaluation tool
- **Lighthouse**: Automated accessibility auditing
- **NVDA/JAWS**: Screen reader testing (Windows)
- **VoiceOver**: Screen reader testing (macOS/iOS)
- **TalkBack**: Screen reader testing (Android)

### Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)

## Reporting Issues

If you discover accessibility issues in this kit:
1. Check if the issue is already reported
2. Create a detailed issue with steps to reproduce
3. Include screen reader output if applicable
4. Tag with `accessibility` label
