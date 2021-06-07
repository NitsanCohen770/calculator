import { useReducer } from 'react';

import CalcContext from './calc-context';

const defaultCalcState = {
  value: 0,
  newValue: 0,
};

const calcReducer = (state, action) => {
  if (action.type === 'NUMBER') {
    return { value: +state.value + `${action.number}` };
  }
  if (action.type === 'ADD') {
    const newValue = +action.number + +state.value;
    return { value: newValue, newValue: 0 };
  }
  if (action.type === 'DECREMENT') {
  }
  if (action.type === 'MULTIPLY') {
  }
  if (action.type === 'DIVIDE') {
  }
  if (action.type === 'RESET') {
  }
  if (action.type === 'EQUALS') {
  }
  return defaultCalcState;
};

const CalcProvider = props => {
  const [calcState, dispatchCalcAction] = useReducer(
    calcReducer,
    defaultCalcState
  );
  const numberEnteredCalcHandler = number => {
    dispatchCalcAction({ type: 'NUMBER', number });
  };

  const incrementCalcHandler = number => {
    dispatchCalcAction({ type: 'ADD', number });
  };

  const decrementCalcHandler = number => {
    dispatchCalcAction({ type: 'REMOVE', number });
  };
  const multiplyCalcHandler = number => {
    dispatchCalcAction({ type: 'MULTIPLY', number });
  };
  const divideCalcHandler = number => {
    dispatchCalcAction({ type: 'DIVIDE', number });
  };
  const resetCalcHandler = number => {
    dispatchCalcAction({ type: 'RESET', number });
  };
  const equalsCalcHandler = number => {
    dispatchCalcAction({ type: 'EQUALS', number });
  };

  const calcContext = {
    value: calcState.value,
    number: numberEnteredCalcHandler,
    increment: incrementCalcHandler,
    decrement: decrementCalcHandler,
    multiply: multiplyCalcHandler,
    divide: divideCalcHandler,
    reset: resetCalcHandler,
    equals: equalsCalcHandler,
  };

  return (
    <CalcContext.Provider value={calcContext}>
      {props.children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
