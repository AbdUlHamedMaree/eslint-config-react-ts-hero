/* eslint-disable @typescript-eslint/no-require-imports */
const pluginJs = require('@eslint/js');
const tseslint = require('typescript-eslint');
const pluginReact = require('eslint-plugin-react');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const { importX } = require('eslint-plugin-import-x');
const unusedImports = require('eslint-plugin-unused-imports');
const pluginReactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const reactRefresh = require('eslint-plugin-react-refresh');
const preferArrowFunctions = require('eslint-plugin-prefer-arrow-functions');
const tsParser = require('@typescript-eslint/parser');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  eslintPluginPrettierRecommended,
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  importX.flatConfigs.react,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          'vars': 'all',
          'varsIgnorePattern': '^_',
          'args': 'after-used',
          'argsIgnorePattern': '^_',
        },
      ],
    },
  },
  pluginReactHooks.configs['recommended-latest'],
  {
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'jsx-a11y/alt-text': 'error',
    },
  },
  reactRefresh.configs.vite,
  {
    plugins: { 'prefer-arrow-functions': preferArrowFunctions },
    rules: {
      'prefer-arrow-functions/prefer-arrow-functions': ['error'],
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      'prefer-arrow-callback': ['error'],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'directive',
            'cjs-export',
            'break',
            'case',
            'class',
            'continue',
            'default',
            'return',
            'function',
            'if',
            'switch',
            'throw',
            'try',
            'while',
            'for',
          ],
        },
        {
          blankLine: 'always',
          prev: [
            'const',
            'let',
            'var',
            'directive',
            'import',
            'cjs-import',
            'cjs-export',
            'class',
            'function',
            'if',
            'switch',
            'try',
            'while',
            'for',
          ],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: 'directive',
          next: 'directive',
        },
        {
          blankLine: 'any',
          prev: 'if',
          next: 'if',
        },
        {
          blankLine: 'any',
          prev: ['import', 'cjs-import'],
          next: ['import', 'cjs-import'],
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        {
          blankLine: 'never',
          prev: ['case', 'default'],
          next: ['case', 'default'],
        },
      ],
    },
  },
];
