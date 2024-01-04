import { ChangeEvent, useState } from 'react';
import { QuotesList } from './QuotesList';
import { SearchBox } from './SearchBox';

type SearchableListProps = {
  quotes: string[];
};

export function SearchableList({ quotes }: SearchableListProps) {
  const [inputValue, setInputValue] = useState('');

  const filteredQuotes: string[] = quotes.filter((quote) =>
    quote.toLowerCase().includes(inputValue.toLowerCase())
  );

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <div className="searchable-list">
      <SearchBox value={inputValue} onInputChange={handleInputChange} />
      <QuotesList filteredQuotes={filteredQuotes} />
    </div>
  );
}
