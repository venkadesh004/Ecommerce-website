import React from 'react'
import './ProductPage.css';

import { NavBar, Footer, ProductPageBody } from '../index';

function ProductPage() {
  return (
    <div className='product-page'>
        <NavBar />
        <ProductPageBody />
        <Footer />
    </div>
  )
}

export default ProductPage