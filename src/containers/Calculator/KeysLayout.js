import React from 'react';
import PropTypes from 'prop-types';
import { CalculatorRowWrapper } from './styles';
import Button from '../../components/Button';
const keysValue = [
  [
    7,
    8,
    9,
    {
      value: 'DEL',
      color: 'resetDelButton',
      shadow: 'resetDelButtonShadow',
      text: 'white',
    },
  ],
  [4, 5, 6, '+'],
  [1, 2, 3, '-'],
  ['.', 0, '/', 'x'],
  [
    {
      value: 'RESET',
      color: 'resetDelButton',
      shadow: 'resetDelButtonShadow',
      text: 'white',
    },
    {
      value: '=',
      color: 'equalButton',
      shadow: 'equalButtonShadow',
      text: 'white',
    },
  ],
];
const KeysLayout = () => {
  return keysValue.map(keyRow => {
    return (
      <CalculatorRowWrapper>
        {keyRow.map(key => {
          console.log(key);
          return (
            <Button
              key={key.value || key}
              color={key?.color}
              shadow={key?.shadow}
              text={key?.text}
            >
              {key.value || key}
            </Button>
          );
        })}
      </CalculatorRowWrapper>
    );
  });
};

KeysLayout.propTypes = {};

export default KeysLayout;
