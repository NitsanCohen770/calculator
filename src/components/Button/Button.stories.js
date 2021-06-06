import React from 'react';

import { action } from '@storybook/addon-actions';

import StyledButton from './index';

export default {
  title: 'Calculator/Styled Button',
};

export const Default = () => (
  <StyledButton onClick={action('Styled button clicked')}>
    Styled Button
  </StyledButton>
);
