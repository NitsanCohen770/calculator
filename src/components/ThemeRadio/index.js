import React from 'react';
import { Wrapper, Item, RadioButton, RadioButtonLabel } from './styles';
const { useState } = React;

const ThemeRadio = () => {
  const [select, setSelect] = useState('optionA');

  const handleSelectChange = event => {
    const value = event.target.value;
    setSelect(value);
  };
  return (
    <Wrapper>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="optionA"
          id="sc"
          checked={select === 'optionA'}
          onChange={event => handleSelectChange(event)}
        ></RadioButton>
        <RadioButtonLabel />
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="optionB"
          checked={select === 'optionB'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="optionC"
          checked={select === 'optionC'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
      </Item>
    </Wrapper>
  );
};

export default ThemeRadio;
