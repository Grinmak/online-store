import React from 'react';

import styles from './Brands.module.css';

// interface BrandsType {
//   brandsData: string[];
// }

export function Brands(data: any) {
  const brandsList: string[] = Array.from(data.brandsData);

  return (
    <>
      <div className={styles.categories}>
        <div>Brands:</div>
        <div className={styles.categSelector}>
          {brandsList.map((categ: string, index: number) => {
            return (
              <div key={index}>
                <input type='checkbox' name={categ} id={categ} />
                <label htmlFor={categ}>{categ}</label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
