import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
  background: ${props => props.theme.backgrounds.main};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  > div:first-child {
    background: ${props => props.theme.backgrounds.main};
    display: flex;
    flex-direction: column;
  }
  > div:nth-child(1) {
    color: ${props => props.theme.text.white || props.theme.text.colored};
  }
  > div:nth-child(3) {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
    width: 30%;
    margin-left: auto;
  }
`;
