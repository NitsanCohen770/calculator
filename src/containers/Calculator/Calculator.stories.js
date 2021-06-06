import React from 'react';

import { action } from '@storybook/addon-actions';

import Calculator from './index';

export default {
  title: 'Calculator/Calculator',
};

export const Default = () => (
  <Calculator onClick={action('Styled button clicked')} />
);
