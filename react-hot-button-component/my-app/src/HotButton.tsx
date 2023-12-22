// // import { CSSProperties } from 'react';

// // type Props = {
// //   style?: CSSProperties;
// //   text: string;
// // };

// // export function HotButton({ text, style }: Props) {

// //   return (
// //     <button

// //       style={style}
// //       onClick={handleClick}>
// //       {text}
// //     </button>
// //   );
// // }
// import { useState } from 'react';
// import './HotButton.css';

// type Props = {
//   label: string;
// };

// export function HotButton({ label }: Props) {
//   const [clicks, setClicks] = useState(0);

//   let warmth;
//   if (clicks >= 4) {
//     setClicks(0);
//   }
//   if (clicks >= 7) {
//     $hotButton.setAttribute('class', 'hot-button tepid');
//   }
//   if (clicks >= 10) {
//     $hotButton.setAttribute('class', 'hot-button warm');
//   }
//   if (clicks >= 13) {
//     $hotButton.setAttribute('class', 'hot-button hot');
//   }
//   if (clicks >= 16) {
//     $hotButton.setAttribute('class', 'hot-button nuclear');
//   }
// }
