import { CSSProperties } from 'react';
import React from 'react';

type CustomButtonProps = {
  className?: string;
  style?: CSSProperties;
  text: string;
  onClick: () => void;
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  style,
  text,
}) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};

// ({ style, text, onClick }: CustomButtonProps) {
//   function handleClick() {
//     alert('You clicked me!');
//   }
//   return (
//     <button onClick={handleClick} style={style}>
//
//     </button>
//   );
// }
// Button: React.FC<Props> = ({ onClick }) => {
//   return <button onClick={onClick}>Click me</button>;
// };
