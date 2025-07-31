import config from './index.mjs';
import globals from 'globals';

export default [
  { ignores: ['node_modules'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  ...config,
];
