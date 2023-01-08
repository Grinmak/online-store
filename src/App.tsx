import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-body'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/error404' element={<Error404 />} />
        {/* <Route path='*' element={<Error404 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
