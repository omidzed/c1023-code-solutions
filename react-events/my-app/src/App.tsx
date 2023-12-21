import './App.css';
import './CustomButton.css';
import { CustomButton } from './CustomButton';

function App() {
  const handleClick = () => {
    window.alert('Button clicked!');
  };
  return (
    <>
      <CustomButton
        className="i-button"
        onClick={handleClick}
        text="I"
        style={{ color: 'black', backgroundColor: 'orange' }}
      />
      <CustomButton
        className="know-button"
        onClick={handleClick}
        text="know"
        style={{ color: 'black', backgroundColor: 'blue' }}
      />
      <CustomButton
        className="react-button"
        onClick={handleClick}
        text="React!"
        style={{ color: 'black', backgroundColor: 'yellow' }}
      />
    </>
  );
}

export default App;
