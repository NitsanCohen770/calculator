import Calculator from './containers/Calculator';
import ThemeRow from './containers/ThemeRow';
import Input from './components/Input';
import { CalculatorWrapper } from './styles';
import './App.css';
function App() {
  return (
    <CalculatorWrapper>
      <div>
        <div
          style={{
            display: 'inline-flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '28%',
            marginLeft: 'auto',
          }}
        >
          <span>1 </span>
          <span> 2 </span>
          <span>3</span>
        </div>
        <ThemeRow />
        <Input value="123" />
        <Calculator />
      </div>
    </CalculatorWrapper>
  );
}

export default App;
