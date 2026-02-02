# 🌌 Galaxy One UI Kit

<div align="center">

**A comprehensive design system inspired by Samsung's Galaxy One UI**

*Modern, accessible, and ready for production*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](CHANGELOG.md)
[![One UI](https://img.shields.io/badge/One%20UI-8%20%7C%208.5%20%7C%209-purple.svg)](https://developer.samsung.com/one-ui)

</div>

---

## 📖 Overview

**Galaxy One UI Kit** is a production-ready design system that brings Samsung's Galaxy One UI design language to your projects. This kit provides a complete set of UI components, design tokens, layouts, and semantic themes compatible with One UI versions 8, 8.5, and 9.

Built with accessibility, consistency, and developer experience in mind, this kit enables teams to rapidly build beautiful, user-friendly interfaces that follow Samsung's design principles.

### 🎯 Key Principles

- **One-handed friendly**: Optimized for comfortable one-handed use
- **Content first**: Focus on what matters most to users
- **Consistent & familiar**: Follows established One UI patterns
- **Accessible by default**: WCAG 2.1 AA compliant components
- **Dark mode ready**: Full support for light and dark themes

---

## ✨ Features

### 🎨 Design Tokens
- **Color System**: Complete palette including primary, secondary, and semantic colors
- **Typography Scale**: Responsive type system with clear hierarchy
- **Spacing**: Consistent spacing scale (4px base unit)
- **Border Radius**: Rounded corners that match One UI aesthetics
- **Elevation**: Shadow system for depth and layering
- **Motion**: Animation curves and durations for smooth transitions

### 🧩 Component Library
- **Buttons**: Primary, secondary, text, and icon buttons
- **Forms**: Input fields, checkboxes, radio buttons, switches
- **Navigation**: Bottom navigation, tabs, app bars
- **Cards**: Content cards with various layouts
- **Lists**: Single-line, multi-line, and interactive lists
- **Dialogs**: Alerts, confirmations, and custom dialogs
- **Feedback**: Snackbars, toasts, and loading states

### 📱 Layout System
- **Grid System**: Flexible responsive grid
- **Spacing Utilities**: Margin and padding helpers
- **Breakpoints**: Mobile-first responsive breakpoints
- **Safe Areas**: Support for notches and curved displays

### 🌓 Theming
- **Light Theme**: Clean and bright default theme
- **Dark Theme**: AMOLED-optimized dark mode
- **Custom Themes**: Easy theming with CSS variables
- **High Contrast**: Enhanced contrast for accessibility

---

## 📁 Folder Structure

```
one-ui-kit-galaxy/
├── LICENSE                 # MIT License
├── README.md              # This file
├── CHANGELOG.md           # Version history
├── .gitignore            # Git ignore rules
│
├── design-tokens/         # Design system tokens
│   ├── colors.json       # Color palette definitions
│   ├── typography.json   # Font scales and styles
│   ├── spacing.json      # Spacing scale
│   ├── shadows.json      # Elevation system
│   └── motion.json       # Animation timings
│
├── components/           # UI components
│   ├── buttons/         # Button components
│   ├── forms/           # Form elements
│   ├── navigation/      # Navigation components
│   ├── cards/           # Card layouts
│   ├── lists/           # List components
│   └── dialogs/         # Dialog components
│
├── layouts/              # Layout templates
│   ├── grids/           # Grid systems
│   ├── containers/      # Container components
│   └── spacing/         # Spacing utilities
│
├── themes/               # Theme definitions
│   ├── light.json       # Light theme
│   ├── dark.json        # Dark theme
│   └── high-contrast.json # High contrast theme
│
├── assets/               # Design assets
│   ├── icons/           # Icon library
│   ├── illustrations/   # Illustrations
│   └── images/          # Sample images
│
├── figma/                # Figma resources
│   └── one-ui-kit.fig   # Figma design file
│
└── docs/                 # Documentation
    ├── getting-started.md
    ├── design-tokens.md
    ├── components.md
    ├── accessibility.md
    └── contributing.md
```

---

## 🚀 Usage

### For Designers (Figma)

1. **Import the Design File**
   - Open the `figma/one-ui-kit.fig` file in Figma
   - Or duplicate from [Figma Community](#) (link coming soon)

2. **Access Components**
   - Find all components in the Assets panel
   - Use the component library for consistent designs
   - Swap instances to explore variants

3. **Apply Design Tokens**
   - Use defined color styles for consistency
   - Apply text styles from the typography system
   - Use auto-layout with spacing tokens

4. **Enable Plugins**
   - Use "Design Tokens" plugin to export tokens
   - "A11y - Color Contrast Checker" for accessibility testing

### For Developers (Code)

#### Installation

```bash
# npm
npm install one-ui-kit-galaxy

# yarn
yarn add one-ui-kit-galaxy

# pnpm
pnpm add one-ui-kit-galaxy
```

#### Import Design Tokens

```javascript
// Import all tokens
import tokens from 'one-ui-kit-galaxy/design-tokens';

// Or import specific tokens
import colors from 'one-ui-kit-galaxy/design-tokens/colors.json';
import typography from 'one-ui-kit-galaxy/design-tokens/typography.json';
```

#### Use Components (React Example)

```jsx
import { Button, Card, TextField } from 'one-ui-kit-galaxy';

function MyComponent() {
  return (
    <Card>
      <TextField label="Email" type="email" />
      <Button variant="primary" size="large">
        Sign In
      </Button>
    </Card>
  );
}
```

#### Apply Themes

```javascript
import { ThemeProvider } from 'one-ui-kit-galaxy';
import { darkTheme } from 'one-ui-kit-galaxy/themes';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

#### CSS Variables

```css
/* Use design tokens in your CSS */
.custom-button {
  background-color: var(--color-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-md);
}
```

---

## ♿ Accessibility

Galaxy One UI Kit is built with accessibility as a core requirement, not an afterthought.

### Compliance
- **WCAG 2.1 Level AA** compliant
- **Section 508** compatible
- **ARIA** attributes included in all interactive components

### Features
- ✅ **Color Contrast**: All color combinations meet 4.5:1 ratio
- ✅ **Keyboard Navigation**: Full keyboard support for all components
- ✅ **Screen Readers**: Semantic HTML and ARIA labels
- ✅ **Focus Indicators**: Clear, visible focus states
- ✅ **Touch Targets**: Minimum 44x44px for all interactive elements
- ✅ **Motion**: Respects `prefers-reduced-motion` settings
- ✅ **Responsive Text**: Supports up to 200% zoom without breaking

### Testing
- Use automated tools like axe DevTools or Lighthouse
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Verify keyboard navigation paths
- Check color contrast in both themes

### Resources
- [Accessibility Guidelines](docs/accessibility.md)
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [Samsung Accessibility](https://www.samsung.com/us/accessibility/)

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

```
MIT License

Copyright (c) 2026 lavazlife

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

[See LICENSE file for full text]
```

---

## 📝 Changelog

### [1.0.0] - 2026-02-02

#### 🎉 Initial Release
- Complete design token system (colors, typography, spacing, shadows, motion)
- 50+ production-ready components
- Light and dark theme support
- Figma design file with all components
- Full accessibility compliance (WCAG 2.1 AA)
- Comprehensive documentation
- One UI 8, 8.5, and 9 compatibility

#### 🎨 Design Tokens
- Added complete color palette with semantic naming
- Added typography scale with responsive sizing
- Added spacing system based on 4px grid
- Added elevation system with 5 levels
- Added motion tokens for animations

#### 🧩 Components
- Added button components (primary, secondary, text, icon)
- Added form components (input, checkbox, radio, switch)
- Added navigation components (bottom nav, tabs, app bar)
- Added card components with multiple variants
- Added list components (single-line, multi-line)
- Added dialog components (alert, confirm, custom)

#### 📱 Layouts
- Added responsive grid system
- Added container components
- Added spacing utilities

#### ♿ Accessibility
- All components meet WCAG 2.1 AA standards
- Added keyboard navigation support
- Added screen reader support with ARIA labels
- Added focus management
- Added high contrast theme

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](docs/contributing.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/lavazlife/one-ui-kit-galaxy/issues)
- **Discussions**: [GitHub Discussions](https://github.com/lavazlife/one-ui-kit-galaxy/discussions)
- **Documentation**: [Full Docs](docs/)

---

## 🌟 Acknowledgments

- Inspired by [Samsung One UI Design Guidelines](https://developer.samsung.com/one-ui)
- Built with ❤️ by the community
- Special thanks to all contributors

---

<div align="center">

**Made with ❤️ for the Samsung Galaxy ecosystem**

⭐ Star this repo if you find it useful!

</div>
