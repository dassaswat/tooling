const { ECMA_VERSION } = require('./constants');

// See: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

/**
 *
 * Base eslint config file for both Node.js and Browser environments
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'prettier',
    require.resolve('./rules/best-practices.js'),
    require.resolve('./rules/comments.js'),
    require.resolve('./rules/es6.js'),
    require.resolve('./rules/import.js'),
    require.resolve('./rules/variables.js'),
    require.resolve('./rules/possible-errors.js'),
    require.resolve('./rules/stylistic.js'),
    require.resolve('./rules/unicorn.js'),
  ],

  env: {
    [`es${ECMA_VERSION}`]: true,
  },

  // Report comments that disable ESLint rules but are not used
  reportUnusedDisableDirectives: true,

  // Include dot-files (e.g., .eslintrc.js) in the linting process, which are ignored by default
  ignorePatterns: ['!.*.js'],

  // Global settings applied to all overrides
  settings: {
    // Use the Node resolver for resolving import statements by default
    'import/resolver': { node: {} },
  },

  // Global parser options for all overrides
  parserOptions: {
    ecmaVersion: ECMA_VERSION,
    sourceType: 'module',
  },
};
