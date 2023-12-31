type PrevButtonProps = {
  index: number;
  onPrevClick: (index: number) => void;
};
export function PrevButton({ index, onPrevClick }: PrevButtonProps) {
  return (
    <button className="prev-button" onClick={() => onPrevClick(index)}>
      PREV
    </button>
  );
}
