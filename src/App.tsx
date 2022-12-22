import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import products from './data-base.json';
import ProductCard from './components/Products';
import './css/Common.css';

// const [productsBase, setProductsBase] = React.useState([]);

function App() {
  return (
    <div className='app-body'>
      <Header />
      <div className='products-wrapper'>
        {products.map((prod) => {
          return (
            <>
              <ProductCard key={prod.id} {...prod} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
