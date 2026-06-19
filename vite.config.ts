import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
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
});
