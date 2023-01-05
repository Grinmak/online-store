import React from 'react';

import styles from './Brands.module.css';
// interface BrandsType {
//   brandsData: string[];
// }
export function Brands(data: any) {
  const [selectedBrands, setSelectedBrands] = React.useState([]);
  const getBrandName = (name: any) => {
    setSelectedBrands(selectedBrands.concat(name));
    console.log(selectedBrands);
  };
  const removeBrandName = (name: any) => {
    setSelectedBrands(selectedBrands.filter((item) => item !== name));
    console.log(selectedBrands);
  };
  const brandsList: string[] = Array.from(data.brandsData);

  return (
    <>
      <div className={styles.categories}>
        <div>Brands:</div>
        <div className={styles.categSelector}>
          {brandsList.map((categ: string, index: number) => {
            return (
              <div key={index}>
                <input
                  type='checkbox'
                  name={categ}
                  id={categ}
                  onClickCapture={(e: any) => {
                    if (e.target.checked) {
                      getBrandName(e.target.name);
                    } else {
                      removeBrandName(e.target.name);
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
