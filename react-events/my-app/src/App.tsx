import './App.css';
import './CustomButton.css';
import { CustomButton } from './CustomButton';

function App() {
  function handleCustomClick(text: string) {
    window.alert(text);
  }
  return (
    <>
      <CustomButton
        onCustomClick={handleCustomClick}
        text="I"
        style={{ color: 'black', backgroundColor: 'orange' }}
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="know"
        style={{ color: 'white', backgroundColor: 'blue' }}
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="React!"
        style={{ color: 'black', backgroundColor: 'yellow' }}
      />
    </>
  );
}

export default App;
