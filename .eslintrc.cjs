/* eslint no-unused-vars: 1 */

module.exports = {
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-unused-vars': 0,
  },
  globals: {
    NodeJS: true,
  },
};
