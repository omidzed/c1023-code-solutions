type QuotesListProps = {
  filteredQuotes: string[];
};

export function QuotesList({ filteredQuotes }: QuotesListProps) {
  let i = 1;
  return (
    <>
      {filteredQuotes.length === 0 && (
        <p>
          Your input does not match the search criteria, please try something
          different!
        </p>
      )}
      <ul className="quotes-list">
        {filteredQuotes.map((quote: string) => (
          <li key={++i}>{quote}</li>
        ))}
      </ul>
    </>
  );
}
