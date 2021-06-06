import React from 'react';
import PropTypes from 'prop-types';
import { CalculatorRowWrapper } from './styles';
import Button from '../../components/Button';
const keysValue = [
  [7, 8, 9, 'DEL'],
  [4, 5, 6, '+'],
  [1, 2, 3, '-'],
  ['.', 0, '/', 'x'],
  ['RESET', '='],
];
const KeysLayout = () => {
  return keysValue.map(keyRow => {
    return (
      <CalculatorRowWrapper>
        {keyRow.map(key => {
          return <Button>{key}</Button>;
        })}
      </CalculatorRowWrapper>
    );
  });
};

KeysLayout.propTypes = {};

export default KeysLayout;
