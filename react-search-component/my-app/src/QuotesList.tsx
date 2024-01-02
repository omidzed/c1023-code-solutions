type QuotesListProps = { filteredQuotes: string[] };

export function QuotesList({ filteredQuotes }: QuotesListProps) {
  let i = 1;
  return (
    <ul className="quotes-list">
      {filteredQuotes.map((quote: string) => (
        <li key={++i}>{quote}</li>
      ))}
    </ul>
  );
}
