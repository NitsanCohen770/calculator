import React from 'react';

import StyledInput from './index';

export default {
  components: StyledInput,
  title: 'Calculator/Input',
};

export const Default = () => <StyledInput value="12345+12345" />;
