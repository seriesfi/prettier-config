# prettier-config

This package provides a shared Prettier configuration for all of our projects.

## Installation

```shell
npm install --save-peer @seriesfi/prettier-config
```

## Usage

Add a `prettier.config.mjs` file to the root of your project with the following contents:

```javascript
import baseConfig from '@seriesfi/prettier-config'

const prettierConfig = {
  ...baseConfig,
  // Add any project-specific overrides here
}

export default prettierConfig
```

Ideally, this package is paired with our [eslint-config](https://github.com/seriesfi/eslint-config) package.
It is suggested that you either set up format on save or set up a pre-commit hook to run Prettier on all staged files.
The GitHub Actions workflow will fail if any files are not formatted correctly.

### VS Code

For any VS Code users (or users of forks like Windsurf), ensure you have the Prettier extension installed.
If you have already had Prettier installed in the past, give it a once-over to ensure it's installed for Remote-WSL.
Make sure you've run `npm install` in your project directory to ensure the Prettier extension can find the
configuration.
In your settings, set

- `Default Formatter` to `Prettier - Code formatter`
- `Format On Save` to `true`
- `Format On Save Mode` to `file` or `modifications`

Now, every time you save a file, it will be formatted according to the Prettier configuration.
If this is still not working, after trying with restarting your editor, check the Prettier extension to see what
configuration it's using.
If it's not using the configuration from the project, set `Prettier: Config Path` to the path of the configuration
file (e.g. `prettier.config.mjs`).
