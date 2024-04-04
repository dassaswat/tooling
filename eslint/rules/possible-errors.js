module.exports = {
  rules: {
    /**
     * Disallow the use of 'console' statements.
     *
     * 'console' statements are primarily used for debugging purposes and should be removed from production code.
     *
     * Reference: https://eslint.org/docs/rules/no-console
     *
     * ❗️ This rule is not fixable.
     */
    'no-console': 'error',

    /**
     * Disallow expressions where the operation does not affect the value.
     *
     * Reference: https://eslint.org/docs/rules/no-constant-binary-expression
     *
     * ❗️ This rule is not fixable.
     */
    'no-constant-binary-expression': 'error',

    /**
     * Disallow returning values from Promise executor functions.
     *
     * Promise executor functions should not return values, as the return value is ignored.
     *
     * Reference: https://eslint.org/docs/rules/no-promise-executor-return
     *
     * ❗️ This rule is not fixable.
     */
    'no-promise-executor-return': 'error',

    /**
     * Disallow template literal placeholder syntax in regular strings.
     *
     * Using template literal placeholders (e.g., `${variable}`) in regular strings is likely an error.
     *
     * Reference: https://eslint.org/docs/rules/no-template-curly-in-string
     *
     * ❗️ This rule is not fixable.
     */
    'no-template-curly-in-string': 'error',

    /**
     * Disallow loops with a body that allows only one iteration.
     *
     * Loops that can only execute once are likely errors or unnecessary complexity.
     *
     * Reference: https://eslint.org/docs/rules/no-unreachable-loop
     *
     * ❗️ This rule is not fixable.
     */
    'no-unreachable-loop': 'error',
  },
};
