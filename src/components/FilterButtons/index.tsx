import React from 'react';

import styles from './FilterButtons.module.css';

export const FilterButtons = () => {
  return (
    <div className={styles.buttons}>
      <button className='reset'>Reset Filters</button>
      <button className='reset'>Copy Link</button>
    </div>
  );
};
