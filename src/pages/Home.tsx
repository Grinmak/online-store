import React from 'react';

import { Sort } from '../components/Sort';
import '../css/Common.css';
import { ProductCard, ProductsTemplate } from '../components/Products';
import { Filters } from '../components/Filter';

export const Home = () => {
  const [productsBase, setProductsBase] = React.useState([]);

  React.useEffect(() => {
    fetch('https://dummyjson.com/products?skip=0&limit=100')
      .then((res) => res.json())
      .then((dataBase) => setProductsBase(dataBase.products));
  }, []);

  const [noFilters, setNoFilters] = React.useState(true);

  //FILTER BRANDS
  const [selectedBrands, setSelectedBrands] = React.useState(Array);
  //get name if checked
  const getBrandName = (name: ConcatArray<never>) => {
    setSelectedBrands(selectedBrands.concat(name));
    setNoFilters(false);
  };
  //remove name if unchecked
  const removeBrandName = (name: string) => {
    setSelectedBrands(selectedBrands.filter((item) => item !== name));
  };
  //END BRANDS

  //FILTER CATEGORIES
  const [selectedCateg, setSelectedCat] = React.useState(Array);
  const addCateg = (name: ConcatArray<never>) => {
    setSelectedCat(selectedCateg.concat(name));
    setNoFilters(false);
  };
  const removeCateg = (name: string) => {
    setSelectedCat(selectedCateg.filter((item) => item !== name));
  };

  //END CATEGORIES

  return (
    <>
      <section className='main-content'>
        <Filters
          dataBase={productsBase}
          getName={(val: ConcatArray<never>) => getBrandName(val)}
          removeName={(val: string) => removeBrandName(val)}
          getCateg={(val: ConcatArray<never>) => addCateg(val)}
          removeCateg={(val: string) => removeCateg(val)}
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
