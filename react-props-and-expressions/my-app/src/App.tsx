import './App.css';
import './CustomButton.css';
import { CustomButton } from './CustomButton';

function App() {
  return (
    <>
      <CustomButton
        text="I"
        style={{ color: 'black', backgroundColor: 'orange' }}
      />
      <CustomButton
        text="know"
        style={{ color: 'black', backgroundColor: 'blue' }}
      />
      <CustomButton
        text="React"
        style={{ color: 'black', backgroundColor: 'yellow' }}
      />
    </>
  );
}

export default App;
