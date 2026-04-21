import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',

      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],

      'semi': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],

      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],

      'arrow-spacing': ['error', { before: true, after: true }],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
    },
  },

  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },

  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
    rules: {
      'json/no-duplicate-keys': 'error',
    },
  },

  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
  },

  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
  },
]);
