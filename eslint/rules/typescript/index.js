module.exports = {
  rules: {
    /**
     * Enforces consistency in how types are exported within your codebase. This aids readability and maintainability.
     *
     * Reference: https://typescript-eslint.io/rules/consistent-type-exports/
     *
     * ✅ This rule is fixable.
     */
    '@typescript-eslint/consistent-type-exports': [
      'warn',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],

    /**
     * Ensures consistent use of type imports.  Promotes preference for type imports as they offer stronger type safety.
     *
     * Reference: https://https://typescript-eslint.io/rules/consistent-type-imports/
     *
     * ✅ This rule is fixable.
     */
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
        prefer: 'type-imports',
      },
    ],

    /**
     * Requires functions and class methods to specify their return types explicitly (with an exception for expressions). This significantly improves type clarity and code predictability.
     *
     * Reference: https://typescript-eslint.io/rules/explicit-function-return-type/
     *
     * ❗️ This rule is not fixable.
     */
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true },
    ],

    /**
     * Enforces the use of function property types in methods. This offers better type checking compared to traditional method signatures.
     *
     * Reference: https://typescript-eslint.io/rules/method-signature-style/
     *
     * ✅ This rule is fixable.
     */
    '@typescript-eslint/method-signature-style': 'warn',

    /**
     * Mandates consistent naming of types, interfaces, enums, etc. Improves code readability, maintainability, and auto-complete suggestions..
     *
     * Reference: https://typescript-eslint.io/rules/naming-convention/
     *
     * ❗️ This rule is not fixable.
     */
    '@typescript-eslint/naming-convention': [
      'error',
      // Anything type-like should be written in PascalCase.
      {
        format: ['PascalCase'],
        selector: ['typeLike', 'enumMember'],
      },
      // Interfaces cannot be prefixed with `I`, or have restricted names.
      {
        custom: {
          match: false,
          regex: '^I[A-Z]|^(Interface|Props|State)$',
        },
        format: ['PascalCase'],
        selector: 'interface',
      },
    ],

    /**
     * Prevents unnecessary or conflicting type definitions within unions and intersections, ensuring type definitions are clean and accurate.
     *
     * Reference: https://typescript-eslint.io/rules/no-redundant-type-constituents/
     *
     * ❗️ This rule is not fixable.
     */
    '@typescript-eslint/no-redundant-type-constituents': 'warn',

    /**
     * Discourages needless namespace qualifiers, promoting cleaner, more concise code.
     *
     * Reference: https://typescript-eslint.io/rules/no-unnecessary-qualifier/
     *
     * ✅ This rule is fixable.
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',

    /**
     * Advocates for RegExp.exec() over String.match() for reliable regular expression matching behavior.
     *
     * Reference: https://typescript-eslint.io/rules/prefer-regexp-exec/
     *
     * ✅ This rule is fixable.
     */
    '@typescript-eslint/prefer-regexp-exec': 'warn',

    /**
     * Requires a compare function with Array#sort. Prevents unexpected sorting results, especially when dealing with non-string arrays.
     *
     * Reference: https://typescript-eslint.io/rules/require-array-sort-compare/
     *
     * ❗️ This rule is not fixable.
     */
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      { ignoreStringArrays: true },
    ],

    /**
     * Enforces complete checks for all possible cases in switch statements involving union types. This future-proofs code when new cases are added to the union.
     *
     * Reference: https://typescript-eslint.io/rules/switch-exhaustiveness-check/
     *
     * ❗️ This rule is not fixable.
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
  },
};
