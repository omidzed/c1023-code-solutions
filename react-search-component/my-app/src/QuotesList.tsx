type QuotesListProps = { quotes: string[] };

export function QuotesList({ quotes }: QuotesListProps) {
  let i = 1;
  return (
    <ul className="quotes-list">
      {quotes.map((quote: string) => (
        <li key={++i}>{quote}</li>
      ))}
    </ul>
  );
}
