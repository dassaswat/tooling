module.exports = {
  rules: {
    /**
     * Require camel case naming convention for variables and functions.
     *
     * This rule enforces the use of camelCase for variable and function names, with an exception for names starting with 'UNSAFE_'. It does not ignore destructuring assignments and does not apply to property names.
     *
     * Reference: https://eslint.org/docs/rules/camelcase
     *
     * ❗️ This rule is not fixable.
     */
    camelcase: [
      'error',
      { allow: ['^UNSAFE_'], ignoreDestructuring: false, properties: 'never' },
    ],

    /**
     * Require function expressions to have a name.
     *
     * This rule enforces that function expressions have a name, except for certain scenarios where it is not necessary.
     *
     * Reference: https://eslint.org/docs/rules/func-names
     *
     * ❗️ This rule is not fixable.
     */
    'func-names': ['error', 'as-needed'],

    /**
     * Require a capital letter for constructor functions.
     *
     * This rule enforces that constructor functions start with a capital letter to distinguish them from regular functions.
     *
     * Reference: https://eslint.org/docs/rules/new-cap
     *
     * ❗️ This rule is not fixable.
     */
    'new-cap': ['error', { capIsNew: false }],

    /**
     * Disallow the omission of parentheses when invoking a constructor with no arguments.
     *
     * This rule enforces the use of parentheses when invoking a constructor with no arguments, for better readability and consistency.
     *
     * Reference: https://eslint.org/docs/rules/new-parens
     *
     * ✅ This rule is fixable.
     */
    'new-parens': 'warn',

    /**
     * Disallow the use of the Array constructor.
     *
     * Using the Array constructor is less concise and can lead to potential bugs compared to using array literals.
     *
     * Reference: https://eslint.org/docs/rules/no-array-constructor
     *
     * ❗️ This rule is not fixable.
     */
    'no-array-constructor': 'error',

    /**
     * Disallow the use of bitwise operators.
     *
     * Bitwise operators can make code harder to read and maintain, and can lead to potential bugs.
     *
     * Reference: https://eslint.org/docs/rules/no-bitwise
     *
     * ❗️ This rule is not fixable.
     */
    'no-bitwise': 'error',

    /**
     * Disallow 'if' statements as the only statement in an 'else' block.
     *
     * Reference: https://eslint.org/docs/rules/no-lonely-if
     *
     * ✅ This rule is fixable.
     */
    'no-lonely-if': 'warn',

    /**
     * Disallow chained assignment expressions.
     *
     * Chained assignment expressions can be confusing and can lead to potential bugs.
     *
     * Reference: https://eslint.org/docs/rules/no-multi-assign
     *
     * ❗️ This rule is not fixable.
     */
    'no-multi-assign': ['error'],

    /**
     * Disallow nested ternary expressions.
     *
     * Reference: https://eslint.org/docs/rules/no-nested-ternary
     *
     * ❗️ This rule is not fixable.
     */
    'no-nested-ternary': 'error',

    /**
     * Disallow ternary operators when simpler alternatives exist.
     *
     * Reference: https://eslint.org/docs/rules/no-unneeded-ternary
     *
     * ❗️ This rule is not fixable.
     */
    'no-unneeded-ternary': 'error',

    /**
     * Require the use of object spread over Object.assign.
     *
     * Reference: https://eslint.org/docs/rules/prefer-object-spread
     *
     * ✅ This rule is fixable.
     */
    'prefer-object-spread': 'warn',
  },
};
