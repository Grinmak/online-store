import React from 'react';

import { Sort } from '../components/Sort';
import '../css/Common.css';
import { ProductCard, ProductsTemplate } from '../components/Products';
import { Filters } from '../components/Filter';

export const Home = () => {
  const [productsBase, setProductsBase] = React.useState([]);
  React.useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      // .then((dataBase) => setProductsBase(dataBase));
      .then((dataBase) => setProductsBase(dataBase.products));
  }, []);
  return (
    <>
      <section className='main-content'>
        <Filters />
        <div className='product-area'>
          <div className='sorting-wrapper'>
            <Sort />
          </div>
          <div className='products-wrapper'>
            {productsBase.map((prod: ProductsTemplate) => (
              <ProductCard key={prod.id} {...prod} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
