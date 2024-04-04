module.exports = {
  plugins: ['eslint-comments'],
  rules: {
    /**
     * Require comments explaining the reason for disabling ESLint rules.
     *
     * When disabling ESLint rules, it is recommended to provide a brief explanation for why the rule is being disabled. This helps maintain code readability and ensures that the disabled rules are intentional and well-documented.
     *
     * Reference: https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html
     *
     * ❗️ This rule is not fixable.
     */
    'eslint-comments/require-description': 'error',
  },
};
