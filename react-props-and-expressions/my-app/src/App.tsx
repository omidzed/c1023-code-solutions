import './App.css';
import './CustomButton.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <>
      <CustomButton text="I" className="i-button" />
      <CustomButton text="know" className="know-button" />
      <CustomButton text="React" className="react-button" />
    </>
  );
}

export default App;
