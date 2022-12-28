import React from 'react';
import styles from './Price.module.css';
export function Price(data: any) {
  const minMaxPrice = data.priceValues;
  return (
    <>
      <div className={styles.label}>
        <label htmlFor='priceRange'>{minMaxPrice[0]}</label>
        <label htmlFor='priceRange'>{minMaxPrice[1]}</label>
      </div>
      <input type='range' name='priceRange' id='' />
    </>
  );
}
