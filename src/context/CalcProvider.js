import { useReducer } from 'react';

import CalcContext from './calc-context';

const defaultCalcState = {
  value: '0',
  newValue: 0,
  operator: null,
};

const isOperatorInExpression = expression =>
  expression.includes('+') ||
  expression.includes('-') ||
  expression.includes('*') ||
  expression.includes('/');
const calcReducer = (state, action) => {
  if (action.type === 'NUMBER') {
    if (isOperatorInExpression(state.value)) {
      console.log(state.value);
      return { value: state.value + `${action.number}` };
    }
    console.log(typeof state.value);
    return { value: +state.value + `${action.number}` };
  }
  if (action.type === 'ADD') {
    if (isOperatorInExpression(state.value)) {
      return { ...state, value: `${eval(state.value)}` };
    }
    return { ...state, value: state.value + '+' };
  }
  if (action.type === 'DECREMENT') {
    if (isOperatorInExpression(state.value)) {
      return { ...state, value: `${eval(state.value)}` };
    }
    return { ...state, value: state.value + '-' };
  }

  if (action.type === 'MULTIPLY') {
    if (isOperatorInExpression(state.value)) {
      return { ...state, value: `${eval(state.value)}` };
    }
    return { ...state, value: state.value + '*' };
  }

  if (action.type === 'DIVIDE') {
    if (isOperatorInExpression(state.value)) {
      return { ...state, value: `${eval(state.value)}` };
    }
    return { ...state, value: state.value + '/' };
  }
  if (action.type === 'RESET') {
    return { ...state, value: '0' };
  }
  if (action.type === 'EQUALS') {
    if (isOperatorInExpression(state.value)) {
      return { ...state, value: `${eval(state.value)}` };
    }
    return { ...state };
  }
  if (action.type === 'DELETE') {
    const updatedNumber = state.value.substring(0, state.value.length - 1);
    return { ...state, value: updatedNumber };
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
    dispatchCalcAction({ type: 'DECREMENT', number });
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
  const deleteCalcHandler = number => {
    dispatchCalcAction({ type: 'DELETE', number });
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
    delete: deleteCalcHandler,
  };

  return (
    <CalcContext.Provider value={calcContext}>
      {props.children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
