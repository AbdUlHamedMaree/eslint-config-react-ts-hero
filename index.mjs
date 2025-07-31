import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { importX } from 'eslint-plugin-import-x';
import unusedImports from 'eslint-plugin-unused-imports';
import * as pluginReactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactRefresh from 'eslint-plugin-react-refresh';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
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
