import React from 'react';

import { FilterButtons } from './FilterButtons';
import { Categories } from './Categories';
import { Brands } from './Brands';
import { Price } from './Price';
import { Stock } from './Stock';

import styles from '../css/Filters.module.css';
import { ProductsTemplate } from './Products';

export function Filters({
  dataBase,
  getName,
  removeName,
  getCateg,
  removeCateg,
}: any) {
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
        <Categories getCateg={getCateg} removeCateg={removeCateg} />
        <Brands
          brandsData={brandsListArray}
          getName={getName}
          removeName={removeName}
        />
        <Price priceValues={minMaxPrice} />
        <Stock stockAmount={minMaxStock} />
      </aside>
    </>
  );
}
