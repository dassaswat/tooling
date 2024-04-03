/**
 * Prettier's defaults can be overridden by an EditorConfig file. However, we
 * define Prettier's configuration here to ensure that EditorConfig settings
 * don't inadvertently override the intended formatting.
 *
 * For more information, see the Prettier documentation:
 * https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 */

const explicitDefaultsOverEditorConfig = {
  endOfLine: 'lf',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
};

module.exports = {
  ...explicitDefaultsOverEditorConfig,
  singleQuote: true,
  plugins: ['prettier-plugin-packagejson'],
};
