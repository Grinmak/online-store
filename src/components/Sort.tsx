import React from 'react';

import styles from '../css/Sort.module.css';

export function Sort() {
  const [displaySort, setDisplaySort] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const selectAndHide = (index: number) => {
    setSelectedIndex(index);
    setDisplaySort(!displaySort);
  };
  const sortOptions: string[] = [
    'Price: Low to High',
    'Price: High to Low',
    'Top Rated',
    'Best discount deal',
  ];
  return (
    <>
      <div className={styles.selector}>
        <h4 className={styles.title}>Sort by:</h4>
        <span
          onClick={() => setDisplaySort(!displaySort)}
          className={styles.sortSelected}
        >
          {sortOptions[selectedIndex]}
        </span>
      </div>
      {displaySort && (
        <div className={styles.options}>
          <ul className={styles.list}>
            {sortOptions.map((selector, index) => {
              return (
                <li
                  key={index}
                  onClick={() => selectAndHide(index)}
                  className={selectedIndex === index ? styles.active : ''}
                >
                  {selector}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
