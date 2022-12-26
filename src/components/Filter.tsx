import React from 'react';

import { FilterButtons } from './FilterButtons';
import { Categories } from './Categories';
import { Brands } from './Brands';
import { Price } from './Price';
import { Stock } from './Stock';

import styles from '../css/Filters.module.css';

export const Filters = () => {
  return (
    <>
      <aside className={styles.filters}>
        <FilterButtons />
        <Categories />
        <Brands />
        <Price />
        <Stock />
      </aside>
    </>
  );
};
