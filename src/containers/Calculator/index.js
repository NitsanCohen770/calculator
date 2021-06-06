import React from 'react';
import PropTypes from 'prop-types';
import KeysLayout from './KeysLayout';
import { CalculatorWrapper } from './styles';

const Calculator = () => (
  <CalculatorWrapper>
    <KeysLayout />
  </CalculatorWrapper>
);

Calculator.propTypes = {};

export default Calculator;
