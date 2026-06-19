import type { Preview } from '@storybook/angular'
import { applicationConfig } from '@storybook/angular';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { setCompodocJson } from "@storybook/addon-docs/angular";
// Deprecated in Angular 21 (legacy @angular/animations is being phased out for
// native animate.enter/leave), but Kendo UI still injects AnimationBuilder, so
// this provider is required. No non-deprecated equivalent exists for that need.
import { provideAnimations } from '@angular/platform-browser/animations';
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    // Enables Angular animation support app-wide (Kendo components inject
    // AnimationBuilder for popups/calendar transitions -> NG03600 without this).
    applicationConfig({ providers: [provideAnimations()] }),
    // Sets data-theme="light|dark" on <html> (parentSelector defaults to 'html',
    // attributeName defaults to 'data-theme') — matches the StyleBase token themes.
    withThemeByDataAttribute({
      themes: { light: 'light', dark: 'dark' },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;