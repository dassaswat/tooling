module.exports = {
  plugins: ['unicorn'],
  rules: {
    /**
     * Require consistent filename case for all linted files.
     *
     * This rule enforces that all filenames follow the kebab-case convention (e.g., 'my-file.js').
     *
     * Reference: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
     *
     * ❗️ This rule is not fixable.
     */
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],

    /**
     * Require using the 'node:' protocol when importing Node.js built-in modules.
     *
     * The 'node:' protocol is a standardized way of importing Node.js built-in modules, which improves code readability and maintainability.
     *
     * Reference: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
     *
     * ✅ This rule is fixable.
     */
    'unicorn/prefer-node-protocol': 'warn',
  },
};
