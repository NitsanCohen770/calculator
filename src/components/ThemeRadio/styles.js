import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background: ${props => props.theme.backgrounds.keypad};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  justify-content: center;
  width: fit-content;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 1rem;
  position: relative;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 8px;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${props => props.theme.backgrounds.keypad};
  > div:first-child {
    display: flex;
    margin-bottom: 4px;
  }
`;
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;

  width: 25px;
  height: 25px;

  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  background: ${props => props.theme.toggle.color};
    border: hsl(6, 63%, 50%);
  }
  &:checked + ${RadioButtonLabel} {
    background:  ${props => props.theme.toggle.color};
    border: hsl(6, 63%, 50%);
    &::after {
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;
