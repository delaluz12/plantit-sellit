import React from "react";
import ProductList from "../components/ProductList/index";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Sidebar from "../components/Sidebar"

const Shop = () => {
  return (
    <div className="shopContainer">
                

      <Sidebar />
      <div className="others">
        <ProductList />
      </div>
    </div>
  );
};

export default Shop;
