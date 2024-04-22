module.exports = {
  rules: {
    /**
     * Disallow duplicate setup and teardown hooks.
     * This rule prevents the use of duplicate setup and teardown hooks, which can lead to unexpected behavior and potential bugs.
     * Reference: https://github.com/veritem/eslint-plugin-vitest/blob/HEAD/docs/rules/no-duplicate-hooks.md
     * ❗️ This rule is not fixable.
     */
    'vitest/no-duplicate-hooks': 'error',

    /**
     * Require lowercase test names.
     * This rule enforces the use of lowercase test names for better readability and consistency.
     * Reference: https://github.com/veritem/eslint-plugin-vitest/blob/HEAD/docs/rules/prefer-lowercase-title.md
     * ✅ This rule is fixable.
     */
    'vitest/prefer-lowercase-title': 'warn',
  },
};
