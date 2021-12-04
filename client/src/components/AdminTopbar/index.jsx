import React from 'react';
import "./index.css";


import { NotificationsNone, Language, Settings } from "@material-ui/icons";




export default function AdminTopbar() {
    return (
        <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">admin Dashboard</span>
        </div>
        <div className="topRight">
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
          <img src="/images/35afa876b7c427a1dbb26d44f25fd57b" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
    )
}
