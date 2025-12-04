// import { useState } from "react";

// export const Counter = () => {
//   const [counter, setCounter] = useState(0);
//   const increment = () => {
//     if(counter < 5) {
//       setCounter(counter + 1);
//     }
//   };
//   const decrement = () => {
//     if(counter > 0) {
//       setCounter(counter - 1);
//     }
//   };

//   return (
//     <div>
//       <button onClick={increment}>+</button>
//       <span>{counter}</span>
//       <button onClick={decrement}>-</button>
//       <span>шт.</span>
//     </div>
//   )
// }

// Counter.jsx
export const Counter = ({ value, onDecrement, onIncrement }) => {
  return (
    <div className="counter">
      <button type="button" onClick={onDecrement}>-</button>
      <span>{value}</span>
      <button type="button" onClick={onIncrement}>+</button>
    </div>
  );
};
