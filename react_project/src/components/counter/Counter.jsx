import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    if(counter < 5) {
      setCounter(counter + 1);
    }
  };
  const decrement = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{counter}</span>
      <button onClick={decrement}>-</button>
      <span>шт.</span>
    </div>
  )
}