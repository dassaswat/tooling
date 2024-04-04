module.exports = {
  rules: {
    /**
     * Disallow useless computed property keys in object literals and classes.
     *
     * Computed property keys are unnecessary when the key is a literal string that would be identical to the property value.
     *
     * Reference: https://eslint.org/docs/rules/no-useless-computed-key
     *
     * ✅ This rule is fixable.
     */
    'no-useless-computed-key': 'warn',

    /**
     * Disallow renaming import, export, and destructured assignments to the same name.
     *
     * Renaming an import, export, or destructured assignment to the same name is redundant and can reduce code readability.
     *
     * Reference: https://eslint.org/docs/rules/no-useless-rename
     *
     * ✅ This rule is fixable.
     */
    'no-useless-rename': 'warn',

    /**
     * Require the use of 'let' or 'const' instead of 'var' for variable declarations.
     *
     * 'let' and 'const' are block-scoped, whereas 'var' is function-scoped, which can lead to unexpected behavior.
     *
     * Reference: https://eslint.org/docs/rules/no-var
     *
     * ✅ This rule is fixable.
     */
    'no-var': 'error',

    /**
     * Require the use of object literal shorthand syntax when possible.
     *
     * Object literal shorthand syntax can make code more concise and readable.
     *
     * Reference: https://eslint.org/docs/rules/object-shorthand
     *
     * ✅ This rule is fixable.
     */
    'object-shorthand': 'warn',

    /**
     * Prefer using 'const' for variable declarations when possible, instead of 'let'.
     *
     * 'const' ensures that the variable cannot be reassigned, which can help prevent accidental mutations.
     *
     * Reference: https://eslint.org/docs/rules/prefer-const
     *
     * ✅ This rule is fixable.
     */
    'prefer-const': 'warn',

    /**
     * Disallow the use of parseInt() in favor of binary, octal, and hexadecimal literals.
     *
     * Using numeric literals is more concise and can improve code readability.
     *
     * Reference: https://eslint.org/docs/rules/prefer-numeric-literals
     *
     * ✅ This rule is fixable.
     */
    'prefer-numeric-literals': 'error',

    /**
     * Require the use of rest parameters instead of the 'arguments' object.
     *
     * Rest parameters provide a more concise and easier-to-read syntax compared to 'arguments'.
     *
     * Reference: https://eslint.org/docs/rules/prefer-rest-params
     *
     * ❗️ This rule is not fixable.
     */
    'prefer-rest-params': 'error',

    /**
     * Require the use of spread syntax instead of the '.apply()' method.
     *
     * Spread syntax is more concise and easier to read compared to '.apply()'.
     *
     * Reference: https://eslint.org/docs/rules/prefer-spread
     *
     * ❗️ This rule is not fixable.
     */
    'prefer-spread': 'error',

    /**
     * Prefer using template literals instead of string concatenation.
     *
     * Template literals provide a more readable and concise syntax for working with strings.
     *
     * Reference: https://eslint.org/docs/rules/prefer-template
     *
     * ✅ This rule is fixable.
     */
    'prefer-template': 'warn',

    /**
     * Require a description when creating a new Symbol.
     *
     * Providing a description for Symbols improves code readability and maintainability.
     *
     * Reference: https://eslint.org/docs/rules/symbol-description
     *
     * ❗️ This rule is not fixable.
     */
    'symbol-description': 'error',
  },
};
