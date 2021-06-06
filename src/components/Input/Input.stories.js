import React from 'react';

import { action } from '@storybook/addon-actions';

import StyledInput from './index';

export default {
  title: 'Calculator/Input',
};

export const Default = () => (
  <StyledInput onClick={action('Styled button clicked')} value="testt" />
);
