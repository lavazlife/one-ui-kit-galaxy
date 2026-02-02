# One UI Kit Galaxy 🌌

> A comprehensive UI kit implementing Samsung's Galaxy One UI (8 / 8.5 / 9) design language with design tokens, components, layouts, and semantic themes for light and dark modes.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Style Dictionary](https://img.shields.io/badge/Style%20Dictionary-enabled-brightgreen.svg)](https://amzn.github.io/style-dictionary/)

## Overview

One UI Kit Galaxy provides a complete design system based on Samsung's One UI principles, optimized for modern mobile and web experiences. Built with accessibility, consistency, and developer experience in mind.

### Key Features

- 🎨 **Design Tokens**: Semantic tokens for colors, spacing, typography, and more
- 🌓 **Light & Dark Themes**: Full support for both light and dark modes
- ♿ **Accessibility First**: WCAG 2.1 AA compliant components
- 📱 **Mobile Optimized**: One-handed use and thumb-friendly design
- 🔧 **Style Dictionary**: Automated token transformation to CSS variables
- 📦 **Modular Architecture**: Use only what you need

## Design Tokens

Design tokens are the foundation of the design system, providing a single source of truth for design decisions.

### Token Categories

#### Global Tokens (`tokens.global.json`)
Theme-agnostic values used across all themes:

- **Spacing**: 8px base grid system (xs: 4px → xxl: 48px)
- **Typography**: Font families, sizes (12px-36px), weights, line heights
- **Border Radius**: From subtle (4px) to full rounded (9999px)
- **Shadows**: Five elevation levels for depth

#### Light Theme (`tokens.light.json`)
Optimized for daylight viewing:

- Clean white backgrounds (#FFFFFF)
- High contrast text (#000000)
- Blue accent (#1976D2)
- Subtle borders and surfaces

#### Dark Theme (`tokens.dark.json`)
Optimized for OLED displays and low-light environments:

- True black backgrounds (#000000) for OLED
- Adjusted text contrast (#FFFFFF, #B4B4B4)
- Lighter blue accent (#42A5F5)
- Elevated surfaces with subtle grays

### Using Tokens

After building, tokens are available as CSS custom properties:

```css
/* Light theme */
background-color: var(--light-color-background-primary);
color: var(--light-color-text-primary);
padding: var(--global-spacing-md);

/* Dark theme */
background-color: var(--dark-color-background-primary);
color: var(--dark-color-text-primary);
```

## Usage

### Installation

```bash
# Clone the repository
git clone https://github.com/lavazlife/one-ui-kit-galaxy.git
cd one-ui-kit-galaxy

# Install dependencies
npm install

# Build design tokens
npm run build:tokens
```

### Building Tokens

Design tokens are processed using Style Dictionary to generate CSS variables:

```bash
npm run build:tokens
```

This generates:
- `build/css/variables-light.css` - Light theme CSS variables
- `build/css/variables-dark.css` - Dark theme CSS variables

### Project Structure

```
one-ui-kit-galaxy/
├── tokens/                    # Design tokens (JSON)
│   ├── tokens.global.json    # Global/theme-agnostic tokens
│   ├── tokens.light.json     # Light theme tokens
│   └── tokens.dark.json      # Dark theme tokens
├── components/                # UI components
│   ├── buttons/              # Button components
│   ├── inputs/               # Input components
│   ├── navigation/           # Navigation components
│   ├── surfaces/             # Surface components (cards, etc.)
│   └── system/               # System components
├── layouts/                   # Layout templates
│   ├── templates/            # Reusable layout templates
│   └── examples/             # Example implementations
├── assets/                    # Static assets
│   ├── icons/                # Icon set
│   ├── previews/             # Component previews
│   └── device-frames/        # Device mockup frames
├── source-files/             # Design source files
├── docs/                      # Documentation
│   ├── guidelines.md         # Design guidelines
│   ├── accessibility.md      # Accessibility guidelines
│   └── contribution.md       # Contribution guide
└── build/                     # Generated files (after build)
    └── css/                  # CSS variable files
```

### Integration Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>One UI Kit Example</title>
    
    <!-- Light theme (default) -->
    <link rel="stylesheet" href="build/css/variables-light.css">
    
    <!-- Dark theme (media query or manual toggle) -->
    <link rel="stylesheet" href="build/css/variables-dark.css" 
          media="(prefers-color-scheme: dark)">
</head>
<body>
    <div style="
        background-color: var(--light-color-background-primary);
        color: var(--light-color-text-primary);
        padding: var(--global-spacing-md);
    ">
        <h1>One UI Kit Galaxy</h1>
        <button style="
            background-color: var(--light-color-action-primary-default);
            color: var(--light-color-text-inverse);
            padding: var(--global-spacing-sm) var(--global-spacing-md);
            border-radius: var(--global-borderRadius-md);
            border: none;
            font-size: var(--global-typography-fontSize-base);
        ">
            Primary Action
        </button>
    </div>
</body>
</html>
```

## Accessibility

This UI kit prioritizes accessibility to ensure inclusive experiences for all users.

### Key Features

- ✅ **WCAG 2.1 Level AA** compliant color contrast ratios
- ✅ **Keyboard navigation** support with visible focus indicators
- ✅ **Screen reader** compatible with proper ARIA labels
- ✅ **Touch targets** minimum 48x48px for mobile usability
- ✅ **Reduced motion** support via `prefers-reduced-motion`
- ✅ **Scalable text** using relative units (rem/em)

For detailed accessibility guidelines, see [docs/accessibility.md](./docs/accessibility.md).

## Documentation

- **[Design Guidelines](./docs/guidelines.md)**: Design principles, visual language, and component guidelines
- **[Accessibility](./docs/accessibility.md)**: Accessibility standards, testing, and best practices
- **[Contributing](./docs/contribution.md)**: How to contribute to this project

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

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
