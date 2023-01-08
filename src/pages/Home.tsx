import React from 'react';

import { Sort } from '../components/Sort';
import '../css/Common.css';
import { ProductCard, ProductsTemplate } from '../components/Products';
import { Filters } from '../components/Filter';
// import { Categories } from '../components/Categories';

export const Home = () => {
  const [productsBase, setProductsBase] = React.useState([]);

  React.useEffect(() => {
    // fetch('https://dummyjson.com/products?skip=0&limit=100')
    fetch(
      'https://639de55b1ec9c6657bb515e8.mockapi.io/items?sortBy=price&order=desc'
    )
      .then((res) => res.json())
      .then((dataBase) => setProductsBase(dataBase));
  }, []);

  //make context from sort and categories available here
  const [sortType, setSortType]: any = React.useState(0); //sorting
  const [noFilters, setNoFilters] = React.useState(true);

  //FILTER BRANDS
  const [selectedBrands, setSelectedBrands]: any = React.useState([]);
  //get name if checked
  const getBrandName = (name: any) => {
    setSelectedBrands(selectedBrands.concat(name));
    setNoFilters(false);
    // allProdLoad();
  };
  //remove name if unchecked
  const removeBrandName = (name: any) => {
    setSelectedBrands(selectedBrands.filter((item: any) => item !== name));
  };
  //END BRANDS

  //FILTER CATEGORIES
  // interface CategTypes {
  //   selectedCateg: string[];
  //   setSelectedCat: Function;
  // }
  const [selectedCateg, setSelectedCat]: any = React.useState([]);
  const addCateg = (name: any) => {
    setSelectedCat(selectedCateg.concat(name));
    setNoFilters(false);
  };
  const removeCateg = (name: any) => {
    setSelectedCat(selectedCateg.filter((item: any) => item !== name));
  };

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
            {productsBase.map((prod: ProductsTemplate) =>
              selectedCateg.includes(prod.category) ? (
                <ProductCard key={prod.id} {...prod} />
              ) : selectedBrands.includes(prod.brand) ? (
                <ProductCard key={prod.id} {...prod} />
              ) : noFilters ? (
                <ProductCard key={prod.id} {...prod} />
              ) : !selectedCateg.length && !selectedBrands.length ? (
                <ProductCard key={prod.id} {...prod} />
              ) : null
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
