/* eslint-disable @typescript-eslint/no-require-imports */

const config = require('./index');
const globals = require('globals');

module.exports = [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  ...config,
];
