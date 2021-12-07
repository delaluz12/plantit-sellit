import React, {useState} from 'react';
import "./index.css";
import {Link} from 'react-router-dom';

import { NotificationsNone, Language, Settings, AddCircle, FilterVintage } from "@material-ui/icons";
import StorefrontIcon from '@material-ui/icons/Storefront';

import auth from '../../utils/auth'



export default function SellerTopbar() {
  const {data} = auth.getProfile();
// console.log(data)
const name = data.firstName;
// console.log(name)

 

    return (
        <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">{name}'s Dashboard</span>
        </div>
        <div className="topRight">
        <div className="topbarIconContainer">
          
          <Link to='/shop' >
            <StorefrontIcon/>
            </Link>
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <Link to='/seller/addProduct' className="topbarIconContainer">
            <FilterVintage/>
            </Link>
            
          <div className="topbarIconContainer">
          <Link to='/seller/editProfile' className='link'>
            <Settings />
            </Link>
          </div>
          
          
          <img src="/s3images/18a3a155bee3d4e817ad25df16e3fe83" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
    )
}
