type IndicatorsProps = {
  index: number;
  onIndicatorsClick: (index: number) => void;
};
export function Indicators({ index, onIndicatorsClick }: IndicatorsProps) {
  return (
    <div className="indicators">
      <button onClick={() => onIndicatorsClick(index)}>0</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
  );
}
