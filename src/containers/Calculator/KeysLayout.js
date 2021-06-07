import React from 'react';
import PropTypes from 'prop-types';
import { CalculatorRowWrapper } from './styles';
import Button from '../../components/Button';
import CalcContext from '../../context/calc-context';
import { useContext } from 'react';

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
  const calcCTX = useContext(CalcContext);
  const calculateHandler = value => {
    if (isNaN(value) && value !== '.') {
      switch (value) {
        case '+':
          return calcCTX.increment();
        case '-':
          return calcCTX.decrement();
        case 'x':
          return calcCTX.multiply();
        case '/':
          return calcCTX.divide();
        case 'RESET':
          return calcCTX.reset();
        case '=':
          return calcCTX.equals();
        case 'DEL':
          return calcCTX.delete();
        default:
          return calcCTX.increment(calcCTX.value);
      }
    }
    calcCTX.number(value);
  };
  return keysValue.map(keyRow => {
    return (
      <CalculatorRowWrapper>
        {keyRow.map(key => {
          return (
            <Button
              key={key.value || key}
              color={key?.color}
              shadow={key?.shadow}
              text={key?.text}
              onClick={() => calculateHandler(key.value || key)}
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
