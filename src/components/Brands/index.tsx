import React from 'react';

import styles from './Brands.module.css';

interface BrandsType {
  brandsData: any;
  categories?: any;
  getName: any;
  removeName: any;
}

export function Brands({ brandsData, getName, removeName }: BrandsType) {
  // const [checkboxStatus, setCheckboxStatus] = React.useState(false);

  return (
    <>
      <div className={styles.categories}>
        <div>Brands:</div>
        <div className={styles.categSelector}>
          {brandsData.map((categ: string, index: number) => {
            return (
              <div key={index}>
                <input
                  // disabled={checkboxStatus}
                  type='checkbox'
                  name={categ}
                  id={categ}
                  onClickCapture={(event: React.MouseEvent<HTMLElement>) => {
                    if ((event.target as HTMLInputElement).checked) {
                      getName((event.target as HTMLInputElement).name);
                    } else {
                      removeName((event.target as HTMLInputElement).name);
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
