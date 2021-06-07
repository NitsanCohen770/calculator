import React from 'react';

const CalcContext = React.createContext({
  value: 0,
  newValue: 0,
  number: number => {},
  increment: number => {},
  decrement: number => {},
  multiply: number => {},
  divide: number => {},
  reset: number => {},
  equals: number => {},
});

export default CalcContext;
