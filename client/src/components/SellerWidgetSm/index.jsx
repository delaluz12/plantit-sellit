import React from 'react'
import { Visibility } from "@material-ui/icons";

import './sellerWidgetSm.css'

export default function SellerWidgetSm() {
    return (
        <div className='sellerWidgetSm'>
            <span className="widgetSmTitle">Pending Orders</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="/s3images/01153beacdd1ff935e1c7d1e6a489d93"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmPendingOrders">
            <span className="widgetSmProduct">Monstera Cutting Lg</span>
            <span className="widgetSmOrder">Order Placed: <span className="widgetSmOrderDate"> 23 Nov 2021</span></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="/s3images/672c2b3df345f42733ac0cc8e22c9fe0"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmPendingOrders">
            <span className="widgetSmProduct">Snake Plant Pup - 1</span>
            <span className="widgetSmOrder">Ordered on: <span className="widgetSmOrderDate"> 25 Nov 2021</span></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="/s3images/57fb93dd998514f1ac8dc26a094da754"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmPendingOrders">
            <span className="widgetSmProduct">Rare Hawaiian Species</span>
            <span className="widgetSmOrder">Ordered on: <span className="widgetSmOrderDate"> 28 Nov 2021</span></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="/s3images/bbf6a069e52a4083e4a0145d0aa5aa8e"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmPendingOrders">
            <span className="widgetSmProduct">Philodendron Micans</span>
            <span className="widgetSmOrder">Ordered on: <span className="widgetSmOrderDate"> 2 Dec 2021</span></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="/s3images/e28b6ab31d08fa014c06532447305e97"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmPendingOrders">
            <span className="widgetSmProduct">Golden Pothos 1 Node</span>
            <span className="widgetSmOrder">Ordered on: <span className="widgetSmOrderDate"> 5 Dec 2021</span></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
        </div>
    )
}
