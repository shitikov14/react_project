import classNames from "classnames";
import styles from './Counter.module.css';

export const Counter = ({ value, onDecrement, onIncrement }) => {
  return (
    <div className="counter">
      <button type="button" onClick={onDecrement}>-</button>
      <span className={classNames(styles['counterField'])}>{value}</span>
      <button type="button" onClick={onIncrement}>+</button>
    </div>
  );
};
