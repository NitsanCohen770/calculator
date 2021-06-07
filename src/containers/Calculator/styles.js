import styled from 'styled-components';

export const CalculatorRowWrapper = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row;
  justify-content: space-around;

  line-height: 30px;
`;

export const CalculatorWrapper = styled.div`
  width: fit-content;
  flex-direction: column;
  background: ${props => props.theme.backgrounds.keypad};
  border-radius: 3px;
`;
