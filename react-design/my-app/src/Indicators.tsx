type IndicatorsProps = {
  index: number;
  onIndicatorsClick: (index: number) => void;
  count: number;
};
export function Indicators({
  index,
  onIndicatorsClick,
  count,
}: IndicatorsProps) {
  return (
    <div className="indicators">
      {[...Array(count).keys()].map((i) => (
        <button
          key={i}
          className={i === index ? 'active' : 'indicator'}
          onClick={() => onIndicatorsClick(i)}>
          {i}
        </button>
      ))}
    </div>
  );
}
