import React from 'react';
import Header from './containers/Header';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import NotFound from './containers/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App