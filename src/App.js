import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {NavBar} from './components/navbar'
import { Products } from './pages/products';
import { Product } from './pages/product';
import { Cart } from './pages/cart';
import { NotFound } from './pages/not-found';

const App = () => {
  return (
    <>
       <NavBar/>
       <Routes>
        <Route path='/' element={<Products/>}/>
         <Route path="/product/:productId" element={<Product/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="*" element={<NotFound/>}/>
       </Routes>
    </>
  )
};
export default App;
