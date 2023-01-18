import React from 'react';
import styles from './Stock.module.css';

interface StockTypes {
  stockAmount: number[];
}

export function Stock(data: StockTypes) {
  const minMaxStock = data.stockAmount;
  return (
    <>
      <div className={styles.stock}>
        <label htmlFor='stockRange'>{minMaxStock[0]}</label>
        <label htmlFor='stockRange'>{minMaxStock[1]}</label>
      </div>
      <input type='range' name='stockRange' id='' />
    </>
  );
}
