import React from 'react'

import "./userInfoItem.css"

import { Link, useParams } from "react-router-dom";
import { Publish } from "@material-ui/icons";
// import { useQuery } from '@apollo/client';
// import { QUERY_PRODUCTS } from '../utils/queries';
// import spinner from '../assets/spinner.gif';


import SellerChart from '../../components/SellerChart';
import { productData } from '../../components/SellerChart/dummyData';

export default function SellerProductItem() {
    // const { id } = useParams();
 
    // const [currentProduct, setCurrentProduct] = useState({});

    // const { loading, data } = useQuery(QUERY_PRODUCTS);

    return (
        <div className='sellerProductItem'>
           <div className="productTitleContainer">
        <h1 className="productTitle">User</h1>
        
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <SellerChart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="/s3images/7b395e1a376ec72387d7624c0dfef048" alt="" className="productInfoImg" />
                  <span className="productName">Spider Plant</span>
              </div>
              <div className="productInfoBottom">
                  <div className="userInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="userInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="userInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="userInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Spider Plant" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="/s3images/7b395e1a376ec72387d7624c0dfef048" alt="" className="productUploadImg" />
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
    )
}
