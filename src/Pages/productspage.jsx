import React from 'react';
import ProductDetail from '../components/ProductDetail/ProductDetail';

const ProductPage = ({ products }) => (
  <div>
    <ProductDetail products={products} />
  </div>
);

export default ProductPage;
