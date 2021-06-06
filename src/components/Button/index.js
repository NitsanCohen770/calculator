import styled from 'styled-components';

const StyledButton = styled.button`
  overflow: hidden;
  background: hsl(225, 21%, 49%);
  border-radius: 3px;
  border: 0;
  cursor: pointer;
  color: white;
  padding: 0 30px;
  box-shadow: 0 4px 2px -2px hsl(224, 28%, 35%);
  margin: 5px;
  font-size: 1em;
  text-align: center;
  flex: 1 0;
  font-family: 'Spartan', sans-serif;
  width: fit-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default StyledButton;
