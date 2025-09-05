# ESLint Pre-commit Hook Setup Guide

This document provides a comprehensive guide to set up automatic linting on every commit using ESLint, Husky, and lint-staged. This ensures code quality and consistency across your project.

## Overview

This setup automatically runs ESLint on staged files before each commit, preventing poorly formatted or error-prone code from being committed to your repository.

## Components

- **ESLint**: JavaScript/React linter for code quality
- **Husky**: Git hooks management tool
- **lint-staged**: Run linters on staged files only

## Installation Steps

### 1. Install Required Dependencies

```bash
npm install --save-dev husky lint-staged
```

### 2. Update package.json Scripts

Add the prepare script to your `package.json`:

```json
{
  "scripts": {
    "prepare": "husky install",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix"
  }
}
```

### 3. Configure lint-staged

Add lint-staged configuration to your `package.json`:

```json
{
  "lint-staged": {
    "src/**/*.{js,jsx}": [
      "eslint --fix",
      "git add"
    ]
  }
}
```

### 4. Initialize Husky

```bash
npx husky init
```

### 5. Create Pre-commit Hook

Update `.husky/pre-commit` file:

```bash
npx lint-staged
```

## Configuration Files

### ESLint Configuration (eslint.config.js)

Your project should have a comprehensive ESLint configuration that includes:

- React-specific rules
- React Hooks rules
- Accessibility rules (jsx-a11y)
- Import/export rules
- Code style rules (indentation, quotes, semicolons)

### Package.json Configuration

```json
{
  "scripts": {
    "prepare": "husky install",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix"
  },
  "lint-staged": {
    "src/**/*.{js,jsx}": [
      "eslint --fix",
      "git add"
    ]
  },
  "devDependencies": {
    "husky": "^9.1.7",
    "lint-staged": "^16.1.6",
    "eslint": "^8.57.1"
  }
}
```

## How It Works

1. **Developer makes changes** and stages files with `git add`
2. **Developer commits** with `git commit`
3. **Husky triggers** the pre-commit hook
4. **lint-staged runs** ESLint on staged files only
5. **ESLint fixes** auto-fixable issues
6. **If no errors**, commit proceeds
7. **If errors exist**, commit is blocked until fixed

## Benefits

- **Consistent Code Quality**: Ensures all committed code meets your standards
- **Automatic Fixes**: Auto-fixes formatting issues like indentation, quotes, semicolons
- **Fast Execution**: Only lints staged files, not entire codebase
- **Team Consistency**: All team members follow the same linting rules
- **Prevents Bad Commits**: Blocks commits with linting errors

## Customization Options

### Different File Patterns

```json
{
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": ["eslint --fix"],
    "src/**/*.{css,scss}": ["stylelint --fix"],
    "src/**/*.{json,md}": ["prettier --write"]
  }
}
```

### Additional Commands

```json
{
  "lint-staged": {
    "src/**/*.{js,jsx}": [
      "eslint --fix",
      "prettier --write",
      "jest --findRelatedTests --passWithNoTests"
    ]
  }
}
```

## Troubleshooting

### Common Issues

1. **Hook not running**: Ensure `.husky/pre-commit` is executable
2. **ESLint errors**: Fix linting errors or update ESLint rules
3. **Performance issues**: Use `--cache` flag for ESLint
4. **Node version conflicts**: Ensure compatible Node.js version

### Skip Hooks (Emergency Only)

```bash
git commit --no-verify -m "Emergency commit"
```

**Note**: Use sparingly as it bypasses quality checks.

## Implementation in Other Projects

### For New Projects

1. Copy `eslint.config.js` to your project
2. Install dependencies: `npm install --save-dev husky lint-staged eslint`
3. Add scripts and lint-staged config to `package.json`
4. Run `npx husky init`
5. Update `.husky/pre-commit` with `npx lint-staged`

### For Existing Projects

1. Install dependencies
2. Update existing ESLint configuration if needed
3. Add lint-staged configuration
4. Initialize Husky
5. Test with a sample commit

## Best Practices

- **Start with warnings**: Use `warn` instead of `error` for new rules initially
- **Team agreement**: Ensure all team members agree on linting rules
- **Gradual adoption**: Introduce rules incrementally in existing projects
- **Documentation**: Keep linting rules documented and justified
- **Regular updates**: Keep ESLint and plugins updated

## Testing the Setup

1. Make a change to a JavaScript file with intentional formatting issues
2. Stage the file: `git add src/App.js`
3. Attempt to commit: `git commit -m "Test commit"`
4. Verify that ESLint runs and fixes/reports issues

## Additional Resources

- [ESLint Documentation](https://eslint.org/docs/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)
- [React ESLint Plugin](https://github.com/jsx-eslint/eslint-plugin-react)