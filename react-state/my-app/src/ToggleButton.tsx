import { CSSProperties } from 'react';

type Props = {
  style?: CSSProperties;
  text: string;
  onFoo?: () => void;
};

export function ToggleButton({ text, style, onFoo }: Props) {
  return (
    <button onClick={onFoo} style={style}>
      {' '}
      {text}
    </button>
  );
}
