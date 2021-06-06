import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  > div:first-child {
    display: flex;
    flex-direction: column;
  }
  > div:nth-child(3) {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
    width: 30%;
    margin-left: auto;
  }
`;
