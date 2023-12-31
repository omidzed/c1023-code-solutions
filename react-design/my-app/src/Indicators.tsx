/* eslint-disable @typescript-eslint/no-unused-vars */
type IndicatorsProps = {
  index: number;
  onIndicatorsClick: (index: number) => void;
};
export function Indicators({ index, onIndicatorsClick }: IndicatorsProps) {
  return (
    <div className="indicators">
      <button className="" onClick={() => onIndicatorsClick((index = 0))}>
        0
      </button>
      <button className="" onClick={() => onIndicatorsClick((index = 1))}>
        1
      </button>
      <button className="" onClick={() => onIndicatorsClick((index = 2))}>
        2
      </button>
      <button className="" onClick={() => onIndicatorsClick((index = 3))}>
        3
      </button>
      <button className="" onClick={() => onIndicatorsClick((index = 4))}>
        4
      </button>
      <button className="" onClick={() => onIndicatorsClick((index = 5))}>
        5
      </button>
    </div>
  );
}
