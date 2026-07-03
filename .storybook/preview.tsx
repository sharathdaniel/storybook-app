import type { Preview } from '@storybook/react-vite';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { IconRegistry } from '../src/icons/IconRegistry';
// Global StyleBase design system (tokens, themes, components, utilities) + Kendo theme.
import '../src/scss/main.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // Viewports matching the StyleBase breakpoints (abstracts/mixins/_breakpoint.scss).
    viewport: {
      options: {
        sm: { name: 'sm (640px)', styles: { width: '640px', height: '800px' } },
        md: { name: 'md (768px)', styles: { width: '768px', height: '800px' } },
        lg: { name: 'lg (1024px)', styles: { width: '1024px', height: '800px' } },
        xl: { name: 'xl (1280px)', styles: { width: '1280px', height: '900px' } },
        '2xl': { name: '2xl (1536px)', styles: { width: '1536px', height: '900px' } },
      },
    },

    a11y: {
      // Fail story tests (and CI) on axe violations; 'off' skips the checks,
      // and there is a report-only mode (see addon-a11y docs).
      test: 'error',
    },
  },
  decorators: [
    // Sets data-theme="light|dark" on <html> (attributeName defaults to 'data-theme')
    // - matches the StyleBase token themes.
    withThemeByDataAttribute({
      themes: { light: 'light', dark: 'dark' },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    // Icons render via <use href="#icon-*">, so the sprite of <symbol>s must be in
    // the DOM for every story that uses <Icon/> (the app renders it in App.tsx).
    (Story) => (
      <>
        <IconRegistry className="u-d-none" />
        <Story />
      </>
    ),
  ],
};

export default preview;
