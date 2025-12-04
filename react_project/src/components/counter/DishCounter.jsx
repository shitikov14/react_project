import { useReducer } from "react";
import { Counter } from "./Counter";

function dishReducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return Math.max(0, state - 1);
    case "reset":
      return 0;
    default:
      return state;
  }
}

export const DishCounter = () => {
  const [count, dispatch] = useReducer(dishReducer, 0);

  return (
    <Counter
      value={count}
      onIncrement={() => dispatch({ type: "increment" })}
      onDecrement={() => dispatch({ type: "decrement" })}
    />
  );
};
