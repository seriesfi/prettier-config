# prettier-config

This package provides a shared Prettier configuration for all of our projects.

## Installation

```shell
npm install --save-dev @seriesfi/prettier-config
```

## Usage

Ideally, this package is paired with our [eslint-config](https://github.com/seriesfi/eslint-config) package.
It is suggested that you set up a pre-commit hook to run Prettier on all staged files.
The GitHub Actions workflow will fail if any files are not formatted correctly.
