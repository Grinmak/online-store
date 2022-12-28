import React from 'react';
import styles from './Stock.module.css';
export function Stock(data: any) {
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
