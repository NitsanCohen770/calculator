import { useState } from 'react';
import Calculator from './containers/Calculator';
import { ThemeProvider } from 'styled-components';
import ThemeRow from './containers/ThemeRow';
import Input from './components/Input';
import { CalculatorWrapper } from './styles';
import './App.css';
import { theme1, theme2, theme3 } from './themes';
import CalcContext from './context/calc-context';
import { useContext } from 'react';
const themeSelector = [theme1, theme2, theme3];

function App() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const calcCTX = useContext(CalcContext);
  return (
    <ThemeProvider theme={themeSelector[currentTheme]}>
      <CalculatorWrapper>
        <div>
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '28%',
              marginLeft: 'auto',
              fontSize: 'xx-small',
            }}
          >
            <span>1 </span>
            <span> 2 </span>
            <span>3</span>
          </div>
          <ThemeRow onSelectTheme={setCurrentTheme} />
          <Input value={calcCTX.value} />
          <Calculator />
        </div>
      </CalculatorWrapper>
    </ThemeProvider>
  );
}

export default App;
