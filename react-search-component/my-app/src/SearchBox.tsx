import { useState } from 'react';

export function SeachBox() {
  const [placeholder, setPlaceholder] = useState('Search...');

  function handleClick() {
    setPlaceholder('');
  }

  function handleBlur() {
    setPlaceholder('Search...');
  }

  return (
    <div className="search-box">
      <input
        id="myTextarea"
        placeholder={placeholder}
        onClick={handleClick}
        onBlur={handleBlur}></input>
    </div>
  );
}
