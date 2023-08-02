import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

const Counter: FC = ({}) => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <button onClick={decrement} data-testid="decrement">
        -
      </button>
      <div data-testid="counter-value">{value}</div>
      <button onClick={increment} data-testid="increment">
        +
      </button>
    </div>
  );
};

export default Counter;
