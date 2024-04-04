module.exports = {
  plugins: ['eslint-plugin-tsdoc'],
  rules: {
    /**
     * Require TSDoc comments to conform to the TSDoc specification.
     *
     * This rule ensures that TSDoc comments follow the correct syntax and conventions defined in the TSDoc specification.
     *
     * Reference: https://github.com/microsoft/tsdoc/tree/master/eslint-plugin
     *
     * ❗️ This rule is not fixable.
     */
    'tsdoc/syntax': 'error',
  },
};
