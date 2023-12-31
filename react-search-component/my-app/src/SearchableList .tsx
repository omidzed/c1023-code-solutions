import { QuotesList } from './QuotesList';
import { SeachBox } from './SearchBox';

type SearchableListProps = {
  quotes: string[];
};

export function SearchableList({ quotes }: SearchableListProps) {
  return (
    <div className="searchable-list">
      <SeachBox />
      <QuotesList quotes={quotes} />
    </div>
  );
}
