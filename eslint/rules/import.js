module.exports = {
  rules: {
    /**
     * Disallow non-import statements from appearing before import statements.
     *
     * This rule enforces that all import statements are grouped together at the top of the file.
     *
     * Reference: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
     *
     * ❗️ This rule is not fixable.
     */
    'import/first': 'error',

    /**
     * Require a newline after the last import/require statement in a group.
     *
     * This rule enforces a consistent style for separating import/require statements from the rest of the code.
     *
     * Reference: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     *
     * ✅ This rule is fixable.
     */
    'import/newline-after-import': 'warn',

    /**
     * Disallow importing modules using absolute paths.
     *
     * Absolute paths can make code less portable and harder to maintain.
     *
     * Reference: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
     *
     * ❗️ This rule is not fixable.
     */
    'import/no-absolute-path': 'error',

    /**
     * Disallow cyclical dependencies between modules.
     *
     * Cyclical dependencies can make code harder to reason about and maintain.
     *
     * Reference: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
     *
     * ❗️ This rule is not fixable.
     */
    'import/no-cycle': 'error',

    /**
     * Disallow the use of default exports.
     *
     * Default exports can make it harder to understand what is being imported and can lead to naming conflicts.
     *
     * Reference: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
     *
     * ❗️ This rule is not fixable.
     */
    'import/no-default-export': 'error',

    /**
     * Disallow the use of extraneous packages (packages that are not listed as dependencies).
     *
     * This rule helps catch accidental imports of packages that should be dependencies.
     *
     * This rule also checks for type imports (e.g., TypeScript types).
     *
     * Reference: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
     *
     * ❗️ This rule is not fixable.
     */
    'import/no-extraneous-dependencies': ['error', { includeTypes: true }],

    /**
     * Disallow mutable exports.
     *
     * Mutable exports can lead to unexpected behavior and can make code harder to reason about.
     *
     * Reference: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
     *
     * ❗️ This rule is not fixable.
     */
    'import/no-mutable-exports': 'error',

    /**
     * Disallow importing packages through relative paths.
     *
     * Relative paths can make code less portable and harder to maintain.
     *
     * Reference: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
     *
     * ❗️ This rule is not fixable.
     */
    'import/no-relative-packages': 'warn',

    /**
     * Disallow a module from importing itself.
     *
     * Self-imports are unnecessary and can lead to potential issues.
     *
     * Reference: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
     *
     * ❗️ This rule is not fixable.
     */
    'import/no-self-import': 'error',

    /**
     * Disallow useless path segments in import statements.
     *
     * Useless path segments can make import statements harder to read and maintain.
     *
     * Reference: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
     *
     * ❗️ This rule is not fixable.
     */
    'import/no-useless-path-segments': ['error'],

    /**
     * Enforce a consistent module import order convention.
     *
     * This rule groups imports into separate categories and enforces a specific order for those categories. This rule disallows newlines between imports within the same group.
     *
     * Reference: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     *
     * ✅ This rule is fixable.
     */
    'import/order': [
      'warn',
      {
        groups: [
          'builtin', // Node.js built-in modules
          'external', // Packages
          'internal', // Aliased modules
          'parent', // Relative parent
          'sibling', // Relative sibling
          'index', // Relative index
        ],
        'newlines-between': 'never',
      },
    ],
  },
};
