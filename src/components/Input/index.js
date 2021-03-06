import styled from 'styled-components';

const Input = styled.input`
  color: white;
  border-radius: 3px;
  height: 48px;
  padding: 0 30px;
  border: none;
  outline: none;
  text-align: right;
  color: ${props => props.theme.text.white || props.theme.text.colored};
  background: ${props => props.theme.backgrounds.screen};
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Spartan', sans-serif;
  font-size: large;
`;

export default Input;
