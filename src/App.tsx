import React from 'react';
import './App.css';
import Header from './components/Header';
// import products from './data-base.json';
import { ProductCard, ProductsTemplate } from './components/Products';
import './css/Common.css';
// import { ProductsTemplate } from './components/Products';
// let prodTempl: ProductsTemplate;

// interface ProductsTemplate {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: string[];
// }

// const [productsBase, setProductsBase] = React.useState([]);

function App() {
  const [productsBase, setProductsBase] = React.useState([]);
  React.useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      // .then((dataBase) => setProductsBase(dataBase));
      .then((dataBase) => setProductsBase(dataBase.products));
  }, []);

  return (
    <div className='app-body'>
      <Header />
      <div className='main-product-area'>
        <div className='sorting-wrapper'></div>
        <div className='products-wrapper'>
          {productsBase.map((prod: ProductsTemplate) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
