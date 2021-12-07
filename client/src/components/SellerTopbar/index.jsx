import React from 'react';
import "./index.css";
import {Link} from 'react-router-dom';

import { NotificationsNone, Language, Settings, AddCircle } from "@material-ui/icons";
import StorefrontIcon from '@material-ui/icons/Storefront';




export default function SellerTopbar() {
    return (
        <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Seller Dashboard</span>
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
            <AddCircle/>
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
