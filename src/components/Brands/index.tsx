import React from 'react';

import styles from './Brands.module.css';

interface BrandsType {
  brandsData: any;
  getName: Function;
  removeName: Function;
}

export function Brands({ brandsData, getName, removeName }: BrandsType) {
  return (
    <>
      <div className={styles.categories}>
        <div>Brands:</div>
        <div className={styles.categSelector}>
          {brandsData.map((categ: string, index: number) => {
            return (
              <div key={index}>
                <input
                  type='checkbox'
                  name={categ}
                  id={categ}
                  onClickCapture={(e: any) => {
                    if (e.target.checked) {
                      getName(e.target.name);
                    } else {
                      removeName(e.target.name);
                    }
                  }}
                />
                <label htmlFor={categ}>{categ}</label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
