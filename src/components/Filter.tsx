import React from 'react';

import { FilterButtons } from './FilterButtons';
import { Categories } from './Categories';
import { Brands } from './Brands';
import { Price } from './Price';
import { Stock } from './Stock';

import styles from '../css/Filters.module.css';
import { ProductsTemplate } from './Products';

interface FilterTypes {
  dataBase: never[];
  getName: (val: string) => void;
  removeName: (val: string) => void;
  getCateg: (val: string) => void;
  removeCateg: (val: string) => void;
}

export function Filters({
  dataBase,
  getName,
  removeName,
  getCateg,
  removeCateg,
}: FilterTypes) {
  //get categories
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((categ) => setCategories(categ));
  }, []);

  //get brands
  const brandsListSet = new Set(
    dataBase.map((item: ProductsTemplate) => item.brand)
  );
  const brandsListArray = Array.from(brandsListSet);

  //get price
  const priceList = dataBase.map((item: ProductsTemplate) => item.price);
  const sortedList = priceList.sort((a: number, b: number) => {
    if (a > b) return 1;
    return -1;
  });
  const minMaxPrice = [sortedList[0], sortedList[sortedList.length - 1]];

  //get stock
  const stockList = dataBase.map((item: ProductsTemplate) => item.stock);
  const sortedStock = stockList.sort((a: number, b: number) => {
    if (a > b) return 1;
    return -1;
  });
  const minMaxStock = [sortedStock[0], sortedStock[sortedStock.length - 1]];

  return (
    <>
      <aside className={styles.filters}>
        <FilterButtons />
        <Categories
          getCateg={getCateg}
          removeCateg={removeCateg}
          categories={categories}
        />
        <Brands
          brandsData={brandsListArray}
          getName={getName}
          removeName={removeName}
          categories={categories}
        />
        <Price priceValues={minMaxPrice} />
        <Stock stockAmount={minMaxStock} />
      </aside>
    </>
  );
}
