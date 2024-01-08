// /* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
// import { useEffect, useState } from 'react';
// import { readItems, type Item } from './read';

// export function List() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [items, setItems] = useState<Item[]>([]);
//   const [error, setError] = useState<unknown>();

//   // Your code here:
//   //  - When the component mounts:
//   //    - Read the items using `readItems` and update state so the list displays
//   //    - Handle errors from `readItems`

//   const readItems = async () => {
//     readItems();
//     setItems(items);
//     const itemsFromAPI = await   items(); // Hypothetical function to fetch items
//     setItems(itemsFromAPI); // Update the state with the fetched items
//   };

//   useEffect(() => {
//     readItems();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div>
//         Error! {error instanceof Error ? error.message : 'Unknown Error'}
//       </div>
//     );
//   }

//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>
//           {item.id}: {item.name}
//         </li>
//       ))}
//     </ul>
//   );
// }
