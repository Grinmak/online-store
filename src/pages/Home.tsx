import React from 'react';

import { Sort } from '../components/Sort';
import '../css/Common.css';
import { ProductCard, ProductsTemplate } from '../components/Products';
import { Filters } from '../components/Filter';

// const [selectedIndex, setSelectedIndex] = React.useState(0);

export const Home = () => {
  const [productsBase, setProductsBase] = React.useState([]);
  React.useEffect(() => {
    // fetch('https://dummyjson.com/products?skip=0&limit=100')
    // fetch('https://639de55b1ec9c6657bb515e8.mockapi.io/items')
    fetch(
      'https://639de55b1ec9c6657bb515e8.mockapi.io/items?sortBy=price&order=desc'
    )
      .then((res) => res.json())
      // .then((dataBase) => setProductsBase(dataBase));
      .then((dataBase) => setProductsBase(dataBase));
  }, []);

  return (
    <>
      <section className='main-content'>
        <Filters dataBase={productsBase} />
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
