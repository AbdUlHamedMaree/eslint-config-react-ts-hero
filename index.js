// @ts-check

/** @type {import('@typescript-eslint/utils').TSESLint.ClassicConfig.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],

  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-refresh',
    'jsx-a11y',
    'import',
    'unused-imports',
  ],

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
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
    'react/prop-types': 0,

    // unused-imports
    '@typescript-eslint/no-unused-vars': 0,
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': [
      1,
      {
        'vars': 'all',
        'varsIgnorePattern': '^_',
        'args': 'after-used',
        'argsIgnorePattern': '^_',
      },
    ],

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
};
