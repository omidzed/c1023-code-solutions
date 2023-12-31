type NextButtonProps = {
  index: number;
  onNextClick: (index: number) => void;
};
export function NextButton({ index, onNextClick }: NextButtonProps) {
  return <button onClick={() => onNextClick(index)}>NEXT</button>;
}
