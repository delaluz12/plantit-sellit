import React , {useState} from "react";
import { Route } from "react-router-dom";
import "./sellerdash.css";

import SellerTopbar from "../../components/SellerTopbar";
import SellerSidebar from "../../components/SellerSidebar";
import SellerHome from "../SellerHome/SellerHome";
import SellerProductList from "../SellerProductList/SellerProductList";
import NewProduct from "../NewProduct/NewProduct";
import SellerProductItem from "../SellerProductItem/SellerProductItem";

import auth from "../../utils/auth";
// console.log(auth.getProfile())
// const {data} = auth.getProfile()
// console.log(data._id)
// const userId = data._id;


const SellerDashboard = () => {
    
  return (
    <>
      {auth.loggedIn() && auth.isSeller() ? (
        <>
          <SellerTopbar />
          <div className="mycontainer">
            <SellerSidebar />
            <Route exact path="/seller/home">
              <SellerHome />
            </Route>
            <Route
              exact
              path="/seller/products"
              component={SellerProductList}
            />
            <Route
              exact
              path="/seller/product/:id"
              component={SellerProductItem}
            />
            <Route exact path="/seller/addProduct" component={NewProduct} />
          </div>
        </>
      ) : (
        <h3 className='notSeller'>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You must have a Seller Account to access this page
        </h3>
      )}
    </>
  );
};

export default SellerDashboard;
