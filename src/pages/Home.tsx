import React from 'react';

import { Sort } from '../components/Sort';
import '../css/Common.css';
import { ProductCard, ProductsTemplate } from '../components/Products';
import { Filters } from '../components/Filter';

export const Home = () => {
  const [productsBase, setProductsBase] = React.useState([]);

  React.useEffect(() => {
    // fetch('https://dummyjson.com/products?skip=0&limit=100')
    fetch('https://639de55b1ec9c6657bb515e8.mockapi.io/items')
      .then((res) => res.json())
      .then((dataBase) => setProductsBase(dataBase));
  }, []);

  //make context from sort and categories available here
  const [sortType, setSortType] = React.useState(0); //sorting

  //FILTER BRANDS
  const [selectedBrands, setSelectedBrands] = React.useState([]);
  //get name if checked
  const getBrandName = (name: any) => {
    setSelectedBrands(selectedBrands.concat(name));
  };
  //remove name if unchecked
  const removeBrandName = (name: any) => {
    setSelectedBrands(selectedBrands.filter((item) => item !== name));
  };
  console.log('home:', selectedBrands);
  //END BRANDS

  //FILTER CATEGORIES
  const [selectedCateg, setSelectedCat] = React.useState([]);
  const addCateg = (name: any) => {
    setSelectedCat(selectedCateg.concat(name));
  };
  const removeCateg = (name: any) => {
    setSelectedCat(selectedCateg.filter((item) => item !== name));
  };
  console.log('home:', selectedCateg);

  //END CATEGORIES

  return (
    <>
      <section className='main-content'>
        <Filters
          dataBase={productsBase}
          getName={(val: any) => getBrandName(val)}
          removeName={(val: any) => removeBrandName(val)}
          getCateg={(val: any) => addCateg(val)}
          removeCateg={(val: any) => removeCateg(val)}
        />
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
