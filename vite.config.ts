/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Served from https://<user>.github.io/storybook-app/ on GitHub Pages.
  // Dev server stays at root.
  base: command === 'build' ? '/storybook-app/' : '/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Mirror the old Angular stylePreprocessorOptions.includePaths so SCSS
        // can `@use 'abstracts/...'`, `'tokens/...'`, etc. without long relative paths.
        loadPaths: ['src/scss'],
        // Silence Dart Sass deprecation warnings originating in node_modules
        // (the Kendo theme SCSS we now compile selectively).
        quietDeps: true,
      },
    },
  },
  test: {
    projects: [
      {
        // Inherit this root config (react plugin, scss loadPaths) into the project.
        extends: true,
        // Runs every story as a browser test; also runs the a11y checks
        // configured in .storybook/preview.tsx (parameters.a11y). Preview
        // annotations are applied automatically (Storybook >= 10.3).
        plugins: [storybookTest({ configDir: '.storybook' })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright(),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
}));
