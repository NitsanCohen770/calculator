import React from 'react';

const CalcContext = React.createContext({
  value: 0,
  newValue: 0,
  number: () => {},
  increment: () => {},
  decrement: () => {},
  multiply: () => {},
  divide: () => {},
  reset: () => {},
  equals: () => {},
  delete: () => {},
});

export default CalcContext;
