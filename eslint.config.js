import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';

export default defineConfig(
  { ignores: ['dist', 'storybook-static', 'node_modules'] },
  {
    files: ['**/*.{ts,tsx}'],
    // react-refresh ships a flat-format "vite" config; react-hooks only ships
    // legacy-format configs, so we register its plugin + rules manually below.
    extends: [js.configs.recommended, ...tseslint.configs.recommended, reactRefresh.configs.vite],
    plugins: { 'react-hooks': reactHooks },
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    // Stories and Storybook config intentionally export non-component values
    // (meta objects, story objects, config), so the react-refresh rule doesn't apply.
    files: ['**/*.stories.tsx', '.storybook/**/*.{ts,tsx}'],
    rules: { 'react-refresh/only-export-components': 'off' },
  },
  // CSF/story-specific rules (invalid meta, un-awaited interactions, etc.).
  ...storybook.configs['flat/recommended'],
);
