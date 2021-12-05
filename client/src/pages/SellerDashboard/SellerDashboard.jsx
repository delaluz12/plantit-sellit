import React from "react";
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
      {auth.loggedIn() ? (
        <>
          <SellerTopbar />
          <div className="mycontainer">
            <SellerSidebar />
            <Route exact path="/seller/home">
              <SellerHome />
            </Route>
            <Route
              exaxt
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
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </>
  );
};

export default SellerDashboard;
