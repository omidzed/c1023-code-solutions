import { ChangeEvent, useState } from 'react';

type SearchBoxProps = {
  value: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export function SearchBox({ value, onInputChange }: SearchBoxProps) {
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
        onBlur={handleBlur}
        value={value}
        onChange={onInputChange}></input>
    </div>
  );
}
