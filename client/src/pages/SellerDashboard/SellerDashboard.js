import React from "react";
import { Route} from 'react-router-dom';
import "./sellerdash.css";


import SellerTopbar from "../../components/SellerTopbar";
import SellerSidebar from "../../components/SellerSidebar";
import SellerHome from "../SellerHome/SellerHome";
import SellerProductList from "../SellerProductList/SellerProductList";
import NewProduct from "../NewProduct/NewProduct";
import SellerProductItem from "../SellerProductItem/SellerProductItem";


const SellerDashboard = () => {
  return (
    <>
      <SellerTopbar />
      <div className='mycontainer'>
      <SellerSidebar />
      <Route exact path="/seller/home">
            <SellerHome />
          </Route>
      <Route exaxt path="/seller/products" component={SellerProductList} />  
      <Route exact path="/seller/product/:id" component={SellerProductItem}/> 
      <Route exact path="/seller/addProduct" component={NewProduct}/> 
      

      {/* <SellerHome/> */}
      
      </div>
      
    </>
  );
};

export default SellerDashboard;
