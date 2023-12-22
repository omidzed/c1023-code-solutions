import { useState } from 'react';

type Props = {
  text: string;
  color: string;
};

export function ToggleButton({ text, color }: Props) {
  const [isClicked, setIsClicked] = useState(true);
  console.log('state hook just ran');

  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isClicked ? 'white' : color,
        color: isClicked ? color : 'white',
      }}>
      {text}
    </button>
  );
}
