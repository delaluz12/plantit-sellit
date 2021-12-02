import React from 'react'
import { useEffect } from 'react';
//UI imports
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from '../../components/SellerChart/dummyData';
import { Link } from "react-router-dom";
import { useState } from "react";

import "./sellerProductList.css"

//setUp dynamic rendering of productdata
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';


export default function SellerProductList() {

  
  const {loading, data} = useQuery(QUERY_PRODUCTS);
  console.log(data)
 


    const [dummyData, setDummyData] = useState(productRows);

    const handleDelete = (id) => {
      setDummyData(dummyData.filter((item) => item.id !== id));
    };
  
    const columns = [
      { field: "id", headerName: "ID", width: 150 },
      {
        field: "product",
        headerName: "Product",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              <img className="productListImg" src={params.row.img} alt="" />
              {params.row.name}
            </div>
          );
        },
      },
      { field: "stock", headerName: "Stock", width: 150 },
      {
        field: "status",
        headerName: "Status",
        width: 150,
      },
      {
        field: "price",
        headerName: "Price",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"product/" + params.row.id}>
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="productListDelete"
                onClick={() => handleDelete(params.row.id)}
              />
            </>
          );
        },
      },
    ];

    return (
        <div className='sellerProductList'>
             <DataGrid
        rows={dummyData}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
        </div>
    )
}
