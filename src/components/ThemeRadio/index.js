import React from 'react';
import { Wrapper, Item, RadioButton, RadioButtonLabel } from './styles';
const { useState } = React;

const ThemeRadio = ({ onSelectTheme }) => {
  const [select, setSelect] = useState('0');

  const handleSelectChange = event => {
    const value = event.target.value;
    setSelect(value);
    onSelectTheme(+event.target.value);
  };
  return (
    <Wrapper>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="0"
          id="sc"
          checked={select === '0'}
          onChange={event => handleSelectChange(event)}
        ></RadioButton>
        <RadioButtonLabel />
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="1"
          checked={select === '1'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="2"
          checked={select === '2'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
      </Item>
    </Wrapper>
  );
};

export default ThemeRadio;
