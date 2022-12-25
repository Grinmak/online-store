import React from 'react';

import { Sort } from '../components/Sort';
import '../css/Common.css';
import { ProductCard, ProductsTemplate } from '../components/Products';

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
      <div className='main-product-area'>
        <div className='sorting-wrapper'>
          <Sort />
        </div>
        <div className='products-wrapper'>
          {productsBase.map((prod: ProductsTemplate) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
