import React from 'react';
import styles from './Categories.module.css';

export function Categories(data: any) {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      // .then((dataBase) => setProductsBase(dataBase));
      .then((categ) => setCategories(categ));
  }, []);
  // console.log(categories);

  // const id = React.useId();

  return (
    <div className={styles.categories}>
      <div>Categories:</div>
      <div className={styles.categSelector}>
        {categories.map((categ: string, index: number) => {
          return (
            <div key={index}>
              <input type='checkbox' name={categ} id={categ} />
              <label htmlFor={categ}>{categ}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
