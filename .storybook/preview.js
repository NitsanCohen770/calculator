import { addDecorator, configure } from '@storybook/react';

import StylesDecorator from './styles-decorator';

addDecorator(StylesDecorator);

import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
