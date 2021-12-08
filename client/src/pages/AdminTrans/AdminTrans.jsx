import React from 'react'
import './adminTrans.css'

import { data } from '../../components/SellerChart/dummyData';

import AdminFeaturedInfo from '../../components/AdminFeaturedInfo'
import AdminChat from '../../components/AdminChat'
import AdminWidgetLg from '../../components/AdminWidgetLg';
import AdminWidgetSm from '../../components/AdminWidgetSm';


export default function AdminTrans() {
    return (
        <div className='sellerHome'>
            <AdminFeaturedInfo/>
            <AdminChat title= {"Sales Data"} data={data} grid dataKey='sales in dollars' />
            <div className='sellerHomeWidgets'>
        <AdminWidgetSm/>
        <AdminWidgetLg/>
            </div>
        </div>
    )
}
