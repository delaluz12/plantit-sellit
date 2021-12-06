import React from 'react';
import "./index.css";
import {Link} from 'react-router-dom';

import { NotificationsNone, Language, Settings,  } from "@material-ui/icons";
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
          <Link to='/shop'>
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
          <div className="topbarIconContainer">
            <Settings />
          </div>
          
          <img src="/s3images/35afa876b7c427a1dbb26d44f25fd57b" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
    )
}
