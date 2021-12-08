import React from 'react'

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from '../../components/SellerChart/dummyData';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { QUERY_ALL_PRODUCT_DATA } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useQuery, useLazyQuery } from "@apollo/client";
import { makeStyles } from '@material-ui/core/styles';

import "./adminProductList.css"



export default function AdminProductList() {
  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCT_DATA);
  const [productdata, setProductdata] = useState([]);

  const useStyles = makeStyles({
    root: {
      '& .cold': {

        backgroundColor: '#FF3030',
        opacity: "0.5",
        borderRadius: '5px',


      },
      '& .hot': {
        backgroundColor: '#2E9800',
        opacity: "0.5",
        borderRadius: '5px',


      },
    },
  });
  const classes = useStyles()
  useEffect(() => {
    if (data) {
      console.log(data)
      const products = data.allProducts.map(p => {

        return {

          id: p._id,
          name: p.name,
          price: p.price,
          sold: p.sold,
          description: p.description,
          seller: p.sellerId,
          category: p.category.name,
          shipStatus: p.shipStatus,
          


        }
      });


      setProductdata(products)


    }
    else if (!loading) {
      console.log("failed")

    }

  }, [data, loading]);


  const handleDelete = (_id) => {
    setProductdata(productdata.filter((item) => item._id !== _id));
  };

  const columns = [

   
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
    },
    { field: "sold",
     headerName: "Sold",
      width: 150, 
      type: "boolean"
     },
     {
      field: "shipStatus",
      headerName: "Ship Status",
      width: 160,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    // {
    //   field: "seller",
    //   headerName: "SellerID",
    //   width: 160,
    // },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
         
              <button className="userListEdit">Remove</button>
          
            
            
          </>
        );
      },
    },
  ];

  return (
    <div className='adminUserList'>

      <DataGrid
        rows={productdata}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}

      />


    </div>
  );
}