import React from 'react';
import styles from './Categories.module.css';

interface CategTypes {
  getCateg: (val: ConcatArray<never>) => void;
  removeCateg: (val: string) => void;
  categories: string[];
}

// type MegaType = HTMLInputElement & ConcatArray<never>;
export function Categories({ getCateg, removeCateg, categories }: CategTypes) {
  console.log(categories);

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
                onClickCapture={(e: React.MouseEvent<HTMLElement>) => {
                  if ((e.target as HTMLInputElement).checked) {
                    getCateg((e.target as HTMLInputElement).name);
                  } else {
                    removeCateg((e.target as HTMLInputElement).name);
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
