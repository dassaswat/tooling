// These share identical configuration options, so we want to keep them in sync.
const noUnusedVarsConfig = require('../variables').rules['no-unused-vars'];

module.exports = {
  rules: {
    /**
     * Require default parameters to be listed last in parameter lists.
     *
     * This rule enforces that default parameter values are listed after all non-default parameters, improving code readability and maintainability.
     *
     * Reference: https://typescript-eslint.io/rules/default-param-last/
     *
     * ❗️ This rule is not fixable.
     */
    '@typescript-eslint/default-param-last': 'error',

    /**
     * Disallow the creation of functions within loops.
     *
     * Creating functions inside loops can lead to unexpected behavior and potential memory leaks.
     *
     * Reference: https://typescript-eslint.io/rules/no-loop-func/
     *
     * ❗️ This rule is not fixable.
     */
    '@typescript-eslint/no-loop-func': 'error',

    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope.
     *
     * Shadowed variables can lead to confusion and potential bugs, especially in nested scopes.
     *
     * Reference: https://typescript-eslint.io/rules/no-shadow/
     *
     * ❗️ This rule is not fixable.
     */
    '@typescript-eslint/no-shadow': 'error',

    /**
     * Disallow unused variables.
     *
     * Unused variables can clutter the code and make it harder to read and maintain.
     *
     * Reference: https://typescript-eslint.io/rules/no-unused-vars/
     *
     * ❗️ This rule is not fixable.
     */
    '@typescript-eslint/no-unused-vars': noUnusedVarsConfig,

    /**
     * Disallow unnecessary constructors.
     *
     * Constructors that do not initialize any properties or perform any operations are unnecessary and can be removed.
     *
     * Reference: https://typescript-eslint.io/rules/no-useless-constructor/
     *
     * ❗️ This rule is not fixable.
     */
    '@typescript-eslint/no-useless-constructor': 'error',
  },
};
