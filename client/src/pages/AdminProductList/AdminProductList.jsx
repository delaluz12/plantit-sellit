import React from 'react'

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from '../../components/SellerChart/dummyData';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { QUERY_ALL_PRODUCT_DATA } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useQuery, useLazyQuery } from "@apollo/client";

import "./adminProductList.css"

export default function AdminProductList() {
  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCT_DATA);
  const [productdata, setProductdata] = useState([]);

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
          seller: p.sellerId

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
      field: "description",
      headerName: "Description",
      width: 150,
    },
    { field: "sold", headerName: "Sold", width: 150 },
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
            <Link to={"user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
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
  )
}