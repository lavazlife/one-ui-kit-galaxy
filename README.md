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

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## Changelog

### v0.1.0 - 2026-02-02

#### Added
- Initial project setup with folder structure
- Design token files (global, light, dark themes)
- Style Dictionary configuration and build system
- Comprehensive documentation (guidelines, accessibility, contribution)
- GitHub Actions workflow for automated token building
- MIT License
- Complete README with usage examples

#### Project Structure
- `/tokens/` - Design token JSON files
- `/components/` - Component folders (buttons, inputs, navigation, surfaces, system)
- `/layouts/` - Layout templates and examples
- `/assets/` - Icons, previews, and device frames
- `/source-files/` - Design source files
- `/docs/` - Documentation files

## Roadmap

- [ ] Component library implementation (buttons, inputs, etc.)
- [ ] Figma/Sketch design files
- [ ] Interactive documentation site
- [ ] npm package for easy installation
- [ ] Additional platform support (React Native, Flutter)
- [ ] More comprehensive component examples
- [ ] Accessibility testing automation

## Contributing

Contributions are welcome! Please read [docs/contribution.md](./docs/contribution.md) for details on our code of conduct and the process for submitting pull requests.

## Acknowledgments

- Inspired by Samsung's One UI design language
- Built with [Style Dictionary](https://amzn.github.io/style-dictionary/)
- Following [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/) accessibility standards

---

Made with ❤️ for the Galaxy community
