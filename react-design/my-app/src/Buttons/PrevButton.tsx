type PrevButtonProps = {
  index: number;
  onPrevClick: (index: number) => void;
};
export function PrevButton({ index, onPrevClick }: PrevButtonProps) {
  return (
    <button className="text-red-700" onClick={() => onPrevClick(index)}>
      PREV
    </button>
  );
}
