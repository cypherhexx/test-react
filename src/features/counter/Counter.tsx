import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  incrementFive,
  selectName,
  setNameAsync,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const name = useAppSelector(selectName);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount2] = useState('2');
  const [myName, setMyName] = useState('hazeh');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <h1>{name}</h1>
      <div className={styles.rincrementAmountow}>
        <input
          className={styles.textbox}
          aria-label="Set name"
          value={myName}
          onChange={(e) => setMyName(e.target.value)}
        />
        <button
          className={styles.asyncButton}
          aria-label="sen name"
          onClick={() => dispatch(setNameAsync(myName))}
        >
          set name
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount2(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>

        <button
          className={styles.button}
          onClick={() => dispatch(incrementFive())}
        >
          Add five
        </button>
      </div>
    </div>
  );
}
