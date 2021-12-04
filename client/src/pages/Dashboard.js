import React from "react";
import { Route} from 'react-router-dom';
import "./SellerDashboard/sellerdash.css";


import AdminTopbar from "../components/AdminTopbar";
import SellerSidebar from "../components/SellerSidebar";
import SellerHome from "./SellerHome/SellerHome";
import SellerProductList from "./SellerProductList/SellerProductList";
import NewProduct from "./NewProduct/NewProduct";
import SellerProductItem from "./SellerProductItem/SellerProductItem";


const Dashboard = () => {
  return (
    <>
      <AdminTopbar />
      <div className='mycontainer'>
      <SellerSidebar />
      <Route exact path="/seller/home">
            <SellerHome />
          </Route>
      <Route exaxt path="/seller/products" component={SellerProductList} />  
      <Route exact path="/seller/product/:id" component={SellerProductItem}/> 
      <Route exact path="/seller/addProduct" component={NewProduct}/> 
      
      
        <h1>This is the dashboard!</h1>
    
      {/* <SellerHome/> */}
      
      </div>
      
    </>
  );
};



export default Dashboard;