import React from "react";
import { useEffect } from "react";
//UI imports
import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
// import { productRows } from "../../components/SellerChart/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import "./sellerProductList.css";

import Auth from "../../utils/auth";

//setUp dynamic rendering of productdata
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS, QUERY_PRODUCTS_BY_SELLER } from "../../utils/queries";
// import { useStoreContext } from "../../utils/GlobalState";
// import { UPDATE_SELLERPRODUCTS } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

export default function SellerProductList() {
  const userData = Auth.getProfile();
  const sellerId = userData.data._id;
  // console.log(sellerId)

  const { loading, data } = useQuery(QUERY_PRODUCTS_BY_SELLER, {
    variables: { sellerId }
  });

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
  const classes = useStyles();

  const [sellerData, setSellerData] = useState([]);
  // console.log(sellerData)

  useEffect(() => {
    if (data) {
      const updatedSellerProducts = data.productsBySeller.map((p) => {
        return {
          id: p._id,
          price: p.price,
          image: p.image,
          name: p.name,
          category: p.category.name,
          sellerId: p.sellerId._id,
          shipStatus: p.shipStatus,
          sold: p.sold,
        };
      });
      // console.log(updatedSellerProducts)
      setSellerData(updatedSellerProducts);
      // dispatch({
      //   type: UPDATE_SELLERPRODUCTS,
      //   sellerProducts: updatedSellerProducts,
      // });
      updatedSellerProducts.forEach((product) => {
        idbPromise("sellerProducts", "put", product);
      });
    } else if (!loading) {
      idbPromise("sellerProducts", "get").then((products) => {
        setSellerData(products);
      });
    }
    // return (updatedSellerProducts)
  }, [data, loading]);

  // console.log(sellerData)

  const [pageSize, setPageSize] = useState(5);

  const handleDelete = (id) => {
    setSellerData(sellerData.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 200, resizable: false, hide: true },
    {
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {/* <img className="productListImg" src={`/s3images/${params.row.image}`} alt="" /> */}
            {params.row.name}
          </div>
        );
      },
    },
    { field: "category", headerName: "Category", width: 250 },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 150,
    // },
    {
      field: "price",
      headerName: "Price",
      width: 160,
      valueFormatter: (params) => {
        const valueFormatted = params.row.price.toFixed(2);
        return `$ ${valueFormatted} `;
      },
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
            {/* <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    },
    {
      field: "sold",
      headerName: "Sold",
      width: 150,
      type: "boolean",
    },
  ];

  return (
    <div className="sellerProductList">
      <div className={classes.root}>
      <DataGrid
        autoHeight
        rows={sellerData}
        disableSelectionOnClick
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        checkboxSelection
        getCellClassName={(params) => {
          if (params.field === 'sold') {
            return params.value == true ? 'hot' : 'cold';
          }
          return '';
        }}
      />
      </div>
    </div>
  );
}