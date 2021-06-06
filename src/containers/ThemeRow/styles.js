import styled from 'styled-components';

export const ThemeRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > div:nth-child(2) {
    display: flex;
  }
  > div:nth-child(3) {
    margin-right: 10px;
    font-size: xx-small;
    align-self: center;
  }
`;
