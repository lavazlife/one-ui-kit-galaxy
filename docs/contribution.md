# Contributing to One UI Kit Galaxy

Thank you for your interest in contributing to the One UI Kit Galaxy! This document provides guidelines and instructions for contributing.

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details** (OS, browser, device)
- **Version** of the kit you're using

### Suggesting Enhancements

Enhancement suggestions are welcome! When suggesting enhancements:

- **Use a clear title** describing the enhancement
- **Provide detailed description** of the proposed feature
- **Explain why this enhancement would be useful**
- **Include mockups or examples** if possible

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following the code style guidelines
3. **Add or update tests** as needed
4. **Update documentation** to reflect your changes
5. **Run the build and tests** to ensure everything works
6. **Create a pull request** with a clear description

## Development Setup

### Prerequisites

- Node.js 16+ and npm
- Git

### Installation

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/one-ui-kit-galaxy.git
cd one-ui-kit-galaxy

# Install dependencies
npm install

# Build tokens
npm run build:tokens
```

## Project Structure

```
one-ui-kit-galaxy/
├── tokens/              # Design tokens (JSON)
├── components/          # UI components
│   ├── buttons/
│   ├── inputs/
│   ├── navigation/
│   ├── surfaces/
│   └── system/
├── layouts/            # Layout templates and examples
│   ├── templates/
│   └── examples/
├── assets/             # Static assets
│   ├── icons/
│   ├── previews/
│   └── device-frames/
├── source-files/       # Design source files
├── docs/               # Documentation
└── .github/            # GitHub configs and workflows
```

## Code Style Guidelines

### General Principles

- **Consistency**: Follow existing code patterns
- **Clarity**: Write self-documenting code
- **Simplicity**: Prefer simple solutions over complex ones
- **Accessibility**: Always consider accessibility

### Design Tokens

- Use semantic naming (e.g., `primary`, `secondary` instead of `blue`, `gray`)
- Follow the existing token structure
- Document new tokens in the appropriate documentation
- Test tokens in both light and dark themes

### Components

- Keep components focused and single-purpose
- Use design tokens instead of hardcoded values
- Ensure accessibility (ARIA labels, keyboard navigation, etc.)
- Support both light and dark themes
- Include hover, focus, active, and disabled states

### Documentation

- Use clear, concise language
- Include code examples
- Add screenshots for visual components
- Keep documentation up-to-date with code changes

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): subject

body (optional)

footer (optional)
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no code change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(tokens): add new elevation tokens for surfaces
fix(buttons): correct hover state color in dark theme
docs(accessibility): update keyboard navigation guidelines
```

## Testing

### Before Submitting

- [ ] Code builds without errors
- [ ] All tests pass
- [ ] Design tokens compile correctly
- [ ] Components work in both light and dark themes
- [ ] Accessibility requirements met
- [ ] Documentation updated
- [ ] No linting errors

### Testing Commands

```bash
# Build tokens
npm run build:tokens

# Run linting (if applicable)
npm run lint

# Run tests (if applicable)
npm test
```

## Design Token Guidelines

When adding or modifying design tokens:

1. **Semantic Naming**: Use names that describe purpose, not appearance
2. **Global vs Theme**: Global tokens are theme-agnostic, theme tokens are specific
3. **Structure**: Follow the existing JSON structure
4. **Values**: Use consistent units (px for spacing, unitless for line-height, etc.)
5. **Documentation**: Update docs/guidelines.md with new tokens

### Token Structure

```json
{
  "category": {
    "subcategory": {
      "name": { "value": "value" }
    }
  }
}
```

## Review Process

1. **Automated checks**: CI will run automated tests
2. **Code review**: Maintainers will review your code
3. **Feedback**: Address any requested changes
4. **Approval**: Once approved, your PR will be merged

## Release Process

Releases are managed by maintainers:

1. Version bump following semantic versioning
2. Update CHANGELOG.md
3. Create release tag
4. Publish release notes

## Questions?

If you have questions:

- Check existing documentation
- Search closed issues
- Open a new discussion or issue
- Reach out to maintainers

## Recognition

Contributors will be recognized in:

- CHANGELOG.md for their contributions
- Project README (for significant contributions)

Thank you for contributing to One UI Kit Galaxy! 🚀
