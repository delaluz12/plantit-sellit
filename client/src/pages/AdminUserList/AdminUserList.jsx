import React from 'react'

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline,Storefront, AddShoppingCart, PermIdentity } from "@material-ui/icons";
import { productRows } from '../../components/SellerChart/dummyData';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { QUERY_USERS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useQuery, useLazyQuery } from "@apollo/client";


import "./adminUserList.css"

export default function AdminUserList() {
  const { loading, error, data } = useQuery(QUERY_USERS);
  const [usersdata, setUsersdata] = useState([]);

  useEffect(() => {
    if (data) {
      console.log(data)
      const users = data.users.map(p => {
        return {
          id: p._id,
          role: p.role,
          firstName: p.firstName,
          lastName: p.lastName,
          orders: p.orders.length,
          listings: p.listings.length




        }
      });

      setUsersdata(users)


    }
    else if (!loading) {
      console.log("failed")

    }

  }, [data, loading]);


  const handleDelete = (_id) => {
    setUsersdata(usersdata.filter((item) => item._id !== _id));
  };

  const columns = [


    {
      field: "role",
      headerName: "Role",
      width: 150,
      renderCell: (params) => {
       if (params.value=="seller"){
         return <Storefront/>}
         else if (params.value=="customer"){
          return <AddShoppingCart/>}
          else return<PermIdentity/>
      },
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
    },
    { field: "lastName", headerName: "Last Name", width: 150 },
    {
      field: "orders",
      headerName: "Orders",
      width: 160,
    },
    {
      field: "listings",
      headerName: "Listings",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"user/" + params.row.id}>
              <button className="userListEdit">Disable</button>
            </Link>
           
          </>
        );
      },
    },
  ];

  return (
    <div className='adminUserList'>
      <DataGrid
        rows={usersdata}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        
        
      />
    </div>
  )
}