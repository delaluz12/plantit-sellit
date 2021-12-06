import React, { useEffect, useState } from "react";

import "./sellerProductItem.css";

import { Link, useParams } from "react-router-dom";
import { Publish } from "@material-ui/icons";
// import { useQuery } from '@apollo/client';
// import { QUERY_PRODUCTS } from '../utils/queries';
// import spinner from '../assets/spinner.gif';
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../../utils/queries";

import SellerChart from "../../components/SellerChart";
import { productData } from "../../components/SellerChart/dummyData";
import NoMatch from "../NoMatch";

export default function SellerProductItem() {
  const { id } = useParams();
  console.log(id);
  const _id = id;
  console.log(typeof _id);

 
  
  const { loading, data } = useQuery(QUERY_PRODUCT, {
    variables: { _id },
  });
  console.log(data);
//  const dataProd = data.product;
//  console.log(dataProd);
 const [currentProduct, setCurrentProduct] = useState({})
 const [clientId, setClientId] = useState("");
//  console.log(currentProduct)

useEffect(() => {
    if  (data) {
        const id = data.product._id;
        // console.log(id)
        const lastFour = id.substring(id.length-6, id.length);
        // console.log(lastFour);
        setClientId(lastFour)
        setCurrentProduct(data.product)
    }else if (loading){
        return
    }
    
}, [data]);

 console.log(currentProduct)

  return (
    <div className="sellerProductItem">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/seller/addProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <SellerChart
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={`/s3images/${currentProduct.image}`}
              alt=""
              className="productInfoImg"
            />
            <span className="productName">{currentProduct.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue">{clientId}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Price: </span>
              <span className="productInfoValue">${currentProduct.price}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>{!currentProduct.sold ? (<span className="productInfoValue">yes</span>) :(<span className="productInfoValue">no</span>)}
              
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">ship status:</span>
              {currentProduct.shipStatus == null ? (<span className="productInfoValue">pending</span>) :(<span className="productInfoValue">something else</span>)}
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Description</label>
            <textarea name="description" className='scroll descriptionText' rows= "5" placeholder={currentProduct.description} />
            <label>Sold</label>
            <select name="sold" id="sold">
            <option aria-label="None" value="" />
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Shipped</label>
            <select name="active" id="active">
            <option aria-label="None" value="" />
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={`/s3images/${currentProduct.image}`}
                alt=""
                className="productUploadImg"
              />
              {/* <label for="file">
                          <Publish/>
                      </label> */}
              {/* <input type="file" id="file" style={{display:"none"}} /> */}
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
