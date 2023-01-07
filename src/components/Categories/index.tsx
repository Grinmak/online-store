import React from 'react';
import styles from './Categories.module.css';

interface CategTypes {
  getCateg: Function;
  removeCateg: Function;
  categories: any;
}

export function Categories({ getCateg, removeCateg, categories }: CategTypes) {
  // const [categories, setCategories] = React.useState([]);
  // React.useEffect(() => {
  //   fetch('https://dummyjson.com/products/categories')
  //     .then((res) => res.json())
  //     // .then((dataBase) => setProductsBase(dataBase));
  //     .then((categ) => setCategories(categ));
  // }, []);

  return (
    <div className={styles.categories}>
      <div>Categories:</div>
      <div className={styles.categSelector}>
        {categories.map((categ: string, index: number) => {
          return (
            <div key={index}>
              <input
                type='checkbox'
                name={categ}
                id={categ}
                onClickCapture={(e: any) => {
                  if (e.target.checked) {
                    getCateg(e.target.name);
                  } else {
                    removeCateg(e.target.name);
                  }
                }}
              />
              <label htmlFor={categ}>{categ}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
