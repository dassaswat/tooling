module.exports = {
  rules: {
    /**
     * Disallow labels that share a name with a variable.
     *
     * Labels that share a name with a variable can lead to confusion and potential bugs.
     *
     * Reference: https://eslint.org/docs/rules/no-label-var
     *
     * ❗️ This rule is not fixable.
     */
    'no-label-var': 'error',

    /**
     * Disallow initializing variables to 'undefined'.
     *
     * Initializing variables to 'undefined' is redundant and can lead to confusion.
     *
     * Reference: https://eslint.org/docs/rules/no-undef-init
     *
     * ✅ This rule is fixable.
     */
    'no-undef-init': 'warn',

    /**
     * Disallow unused variables.
     *
     * Unused variables can clutter the code and make it harder to read and maintain.
     *
     * Reference: https://eslint.org/docs/rules/no-unused-vars
     *
     * ❗️ This rule is not fixable.
     */
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
