import React from 'react';

import { action } from '@storybook/addon-actions';

import ThemeRow from './index';

export default {
  title: 'Calculator/ThemeRow',
};

export const Default = () => (
  <ThemeRow onClick={action('Styled button clicked')} />
);
