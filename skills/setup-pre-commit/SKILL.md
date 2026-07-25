---
name: setup-pre-commit
description: >
  Set up Husky pre-commit hooks (lint-staged/Prettier, type checking, tests).
  Use when user says "set up pre-commit", "add git hooks", "configure husky",
  or wants to add automated checks before commits.
---

# Setup Pre-Commit

Configure automated pre-commit checks using Husky and lint-staged.

## Prerequisites Check
Before setup, verify:
- Node.js project? (package.json exists)
- Git repo? (.git exists)
- Tools to check? (look for ESLint, Prettier, TypeScript configs, test scripts)

## Installation

```bash
npm install --save-dev husky lint-staged
npx husky init
```

## Configuration

### lint-staged (in package.json or .lintstagedrc)
```json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.{json,md,yaml,yml,css,scss}": [
      "prettier --write"
    ]
  }
}
```

### Husky pre-commit hook (.husky/pre-commit)
```bash
npx lint-staged
```

### Optional: Add type checking
For TypeScript projects:
```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "prettier --write",
      "eslint --fix",
      "bash -c 'tsc --noEmit'"
    ]
  }
}
```

### Optional: Add test running (pre-push)
```bash
# .husky/pre-push
npm test
```

## Project-Specific Setup

### TypeScript + React + ESLint + Prettier
```bash
npm install --save-dev husky lint-staged prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npx husky init
# Add lint-staged config above
```

### Python + Ruff + pytest
Use pre-commit framework instead:
```bash
pip install pre-commit
# Create .pre-commit-config.yaml
```
```yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.1.0
    hooks:
      - id: ruff
      - id: ruff-format
  - repo: local
    hooks:
      - id: pytest
        name: pytest
        entry: pytest
        language: system
        pass_filenames: false
        always_run: true
```

## Verification
After setup:
1. Make a small change to a staged file
2. `git commit -m "test"` — hooks should run
3. If hooks fail, commit should be blocked
4. Verify fix → commit succeeds
