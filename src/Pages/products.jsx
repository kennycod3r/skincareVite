import React from "react";
import ProductList from "../components/ProductList/ProductList";


const Products = ({ products }) => (
  <section>
    <ProductList products={products} />
    <ProductList products={products} />
  </section>
);

export default Products;
