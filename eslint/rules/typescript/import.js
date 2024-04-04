/**
 * TypeScript and the typescript-eslint plugin handle the following rules more effectively,
 * so they are disabled in favor of using the TypeScript compiler and the typescript-eslint plugin.
 *
 */
const disabledRules = {
  'import/default': 'off',
  'import/export': 'off',
  'import/namespace': 'off',
  'import/no-unresolved': 'off',
};

module.exports = {
  rules: {
    ...disabledRules,
  },
};
