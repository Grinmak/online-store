import React from 'react';

import styles from './Brands.module.css';

// interface BrandsType {
//   brandsData: string[];
// }

export function Brands(data: any) {
  const brandsList: string[] = Array.from(data.brandsData);
  // console.log(brandsList);
  // const brandKey = React.useId();
  // console.log(brandKey);

  return (
    <>
      <div className={styles.categories}>
        <div>Brands:</div>
        <div className={styles.categSelector}>
          {brandsList.map((categ: string, index: number) => {
            return (
              <div>
                <input type='checkbox' name={categ} />
                <label htmlFor={categ}>{categ}</label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
