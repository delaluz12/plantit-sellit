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
            src="/images/e28b6ab31d08fa014c06532447305e97"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmPendingOrders">
            <span className="widgetSmProduct">Golden Pothos</span>
            <span className="widgetSmOrder">Order Placed: <span className="widgetSmOrderDate"> 11/30/2020</span></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="/images/e28b6ab31d08fa014c06532447305e97"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmPendingOrders">
            <span className="widgetSmProduct">Golden Pothos</span>
            <span className="widgetSmOrder">Ordered on: <span className="widgetSmOrderDate"> 11/30/2020</span></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="/images/e28b6ab31d08fa014c06532447305e97"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmPendingOrders">
            <span className="widgetSmProduct">Golden Pothos</span>
            <span className="widgetSmOrder">Ordered on: <span className="widgetSmOrderDate"> 11/30/2020</span></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="/images/e28b6ab31d08fa014c06532447305e97"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmPendingOrders">
            <span className="widgetSmProduct">Golden Pothos</span>
            <span className="widgetSmOrder">Ordered on: <span className="widgetSmOrderDate"> 11/30/2020</span></span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="/images/e28b6ab31d08fa014c06532447305e97"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmPendingOrders">
            <span className="widgetSmProduct">Golden Pothos</span>
            <span className="widgetSmOrder">Ordered on: <span className="widgetSmOrderDate"> 11/30/2020</span></span>
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
