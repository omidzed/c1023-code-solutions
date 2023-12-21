import { CSSProperties } from 'react';

type CustomButtonProps = {
  style?: CSSProperties;
  text: string;
  onCustomClick: (text: string) => void;
};

export function CustomButton({
  text,
  style,
  onCustomClick,
}: CustomButtonProps) {
  function handleCustomClick() {
    onCustomClick(text);
  }
  return (
    <button style={style} onClick={handleCustomClick}>
      {text}
    </button>
  );
}
