import { CSSProperties } from 'react';

type CustomButtonProps = {
  style?: CSSProperties;
  text: string;
};

export function CustomButton({ style, text }: CustomButtonProps) {
  return <button style={style}>{text}</button>;
}
