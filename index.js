/* eslint-disable @typescript-eslint/no-var-requires */

const eslint = require('@eslint/js');
const prettier_recommended = require('eslint-plugin-prettier/recommended');
const tslint = require('typescript-eslint');
const import_plugin = require('eslint-plugin-import');
const react_recommended = require('eslint-plugin-react/configs/recommended');
const react_jsx_runtime = require('eslint-plugin-react/configs/jsx-runtime');
const react_hooks = require('eslint-plugin-react-hooks');
const jsx_a11y = require('eslint-plugin-jsx-a11y');
const react_refresh = require('eslint-plugin-react-refresh');
// const unused_imports = require('eslint-plugin-unused-imports');

const globals = require('globals');

// NOTE: not supported yet
delete react_recommended.rules['react/no-direct-mutation-state'];
delete react_recommended.rules['react/no-string-refs'];
delete react_recommended.rules['react/display-name'];
delete react_recommended.rules['react/prop-types'];
delete react_recommended.rules['react/require-render-return'];

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  eslint.configs.recommended,
  prettier_recommended,
  ...tslint.configs.recommended,
  {
    plugins: {
      import: {
        configs: import_plugin.configs,
        rules: import_plugin.rules,
      },
    },
    rules: {
      ...import_plugin.configs.recommended.rules,
      ...import_plugin.configs.typescript.rules,
    },
    settings: import_plugin.configs.typescript.settings,
  },
  react_recommended,
  react_jsx_runtime,
  {
    plugins: {
      'react-hooks': react_hooks,
    },
    rules: {
      ...react_hooks.configs.recommended.rules,
    },
  },
  {
    plugins: {
      'jsx-a11y': jsx_a11y,
    },
    rules: {
      ...jsx_a11y.configs.recommended.rules,
    },
  },
  {
    plugins: {
      'react-refresh': react_refresh,
      'unused-imports': unused_imports,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // typescript
      '@typescript-eslint/no-explicit-any': [1],
      '@typescript-eslint/consistent-type-imports': 2,

      // react-refresh
      'react-refresh/only-export-components': 1,

      // prettier
      'prettier/prettier': 1,

      // react
      // 'react/prop-types': 0,

      // // unused-imports
      // '@typescript-eslint/no-unused-vars': 0,
      // 'unused-imports/no-unused-imports': 2,
      // 'unused-imports/no-unused-vars': [
      //   1,
      //   {
      //     'vars': 'all',
      //     'varsIgnorePattern': '^_',
      //     'args': 'after-used',
      //     'argsIgnorePattern': '^_',
      //   },
      // ],

      // general
      'padding-line-between-statements': [
        1,
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
