import React from "react";
import { useEffect } from "react";
//UI imports
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../components/SellerChart/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

import "./sellerProductList.css";

//setUp dynamic rendering of productdata
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_SELLERPRODUCTS } from "../../utils/actions";
import { idbPromise } from '../../utils/helpers';

export default function SellerProductList() {
  // const [state, dispatch] = useStoreContext();


  // const [rowData, setRowData] = useState([]);

  // const {sellerProducts} = state;
  // console.log(state);
  // const { loading, data } = useQuery(QUERY_PRODUCTS);
  // console.log(data);
  // const {products} = data;
  // console.log (products);
  // const rawData = data;
  // {
  //   id: "",
  //   name: "",
  //   img: "",
  //   stock: "",
  //   price: "",
  // },
  // console.log(rawData.products);
  // const prodArr = rawData.products;

  
  // console.log(rowData);

  
  // const [state, dispatch] = useStoreContext();
  // const { sellerProducts, clean } = state;
  // console.log(sellerProducts);
  
  const { loading, data } = useLazyQuery(QUERY_PRODUCTS);

//   const updatedSellerProducts = sellerProducts.map(p => {
//     return {
//       id: p._id,
//       price: p.price,
//       image: p.image,
//       name: p.name,
//       quantity: p.quantity
//     }
//   })
// console.log(updatedSellerProducts)

const [dummyData, setDummyData] = useState([]);
// console.log(dummyData)

  useEffect(() => {
    if (data) {
      
      const updatedSellerProducts = data.products.map(p => {
        return {
          id: p._id,
          price: p.price,
          image: p.image,
          name: p.name,
          quantity: p.quantity
        }
      });
      // console.log(updatedSellerProducts)
      setDummyData(updatedSellerProducts)
      // dispatch({
      //   type: UPDATE_SELLERPRODUCTS,
      //   sellerProducts: updatedSellerProducts,
      // });
      updatedSellerProducts.forEach((product) => {
        idbPromise('sellerProducts', 'put', product);
      });
    } else if (!loading) {
      idbPromise('sellerProducts', 'get').then((products) => {
        setDummyData(products);
      });
    }
    // return (updatedSellerProducts)
  }, [data, loading]);
  // console.log(dummyData)
  

 

  const handleDelete = (id) => {
    setDummyData(dummyData.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Product",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={`/images/${params.row.image}`} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "quantity", headerName: "qty", width: 150 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 150,
    // },
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
    <div className="sellerProductList">
      <DataGrid
        rows={dummyData}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}
