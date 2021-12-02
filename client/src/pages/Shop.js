import React from "react";
import ProductList from "../components/ProductList/index";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Shop = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Shop;
