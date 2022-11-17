import React from 'react'
import './ProductPage.css';
import { useParams } from 'react-router-dom';

import { NavBar, Footer, ProductPageBody } from '../index';

function ProductPage() {
  const {domain} = useParams();
  console.log(domain);
  return (
    <div className='product-page'>
        <NavBar />
        <ProductPageBody domain={domain} />
        <Footer />
    </div>
  )
}

export default ProductPage