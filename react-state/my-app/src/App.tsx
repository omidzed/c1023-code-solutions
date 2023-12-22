import './App.css';
import { ToggleButton } from './ToggleButton';
import { useState } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((isClicked) => !isClicked);
  }
  return (
    <ToggleButton
      text="Click me!"
      onFoo={handleClick}
      style={{
        backgroundColor: isClicked ? 'white' : 'red',
        color: isClicked ? 'red' : 'white',
      }}
    />
  );
}

export default App;
