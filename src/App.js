import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, Layout, ProductPage, SingleItem, SellerMain, LoginPage} from './containers';

import './App.css';

const App  = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='product/:domain' element={<ProductPage />} />
          <Route path='item/:id' element={<SingleItem />}/>
          <Route path='seller' element={<SellerMain />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
} 

export default App;