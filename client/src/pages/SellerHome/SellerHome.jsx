import React from 'react'
import './sellerHome.css'

import { data } from '../../components/SellerChart/dummyData';

import SellerFeaturedInfo from '../../components/SellerFeaturedInfo'
import SellerChart from '../../components/SellerChart'
import SellerWidgetSm from '../../components/SellerWidgetSm';
import SellerWidgetLg from '../../components/SellerWidgetLg';


export default function SellerHome() {
    return (
        <div className='sellerHome'>
            <SellerFeaturedInfo/>
            <SellerChart title= {"Sales Data"} data={data} grid dataKey='sales in dollars' />
            <div className='sellerHomeWidgets'>
        <SellerWidgetSm/>
        <SellerWidgetLg/>
            </div>
        </div>
    )
}
