import React from "react";
import ProductForm from '../../components/ProductForm/index.jsx'

import './newProduct.css'

const NewProduct = () => {
  return (
    <div className="newProduct">
        <h1 className='newProdTitle'> Add New Listing</h1>
        <ProductForm/>
    </div>
  );
};

export default NewProduct;