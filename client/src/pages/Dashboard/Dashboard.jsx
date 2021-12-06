import React from "react";
import { Route } from 'react-router-dom';

import "./dash.css"
import auth from "../../utils/auth";
import AdminTopbar from "../../components/AdminTopbar";
import AdminSidebar from "../../components/AdminSidebar"

import SellerHome from "../SellerHome/SellerHome";

import AdminUserList from "../AdminUserList/AdminUserList"
import NewProduct from "../NewProduct/NewProduct";

import AdminProductList from "../AdminProductList/AdminProductList"


const Dashboard = () => {
  return (
    <>
      {auth.loggedIn() ? (
        <>
          <AdminTopbar />
          <div className='mycontainer'>
            <AdminSidebar />
            <Route exact path="/seller/home">
              <SellerHome />
            </Route>
            <Route
             exact path="/dashboard/users"
              component={AdminUserList} />
            <Route exact path="/dashboard/products" component={AdminProductList} />
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
      )};

    </>
  );
};

export default Dashboard;