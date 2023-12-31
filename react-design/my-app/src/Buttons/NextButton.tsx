type NextButtonProps = {
  index: number;
  onNextClick: (index: number) => void;
};
export function NextButton({ index, onNextClick }: NextButtonProps) {
  return (
    <button
      className="text-green-800 bg-blue-500 border-2 border-solid border-gray-300"
      onClick={() => onNextClick(index)}>
      NEXT
    </button>
  );
}
