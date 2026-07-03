import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
    '@storybook/addon-mcp',
    '@storybook/addon-vitest',
  ],
  framework: '@storybook/react-vite',
  // Serve the app's public assets (e.g. favicon.svg, picked up as the Storybook favicon).
  staticDirs: ['../public'],
};
export default config;
