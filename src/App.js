import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, Layout, ProductPage } from './containers';

import './App.css';

const App  = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='product' element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
} 

export default App;