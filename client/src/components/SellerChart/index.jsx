import React from 'react'
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import "./sellerChart.css"



export default function SellerChart({title, data, dataKey, grid}) {

    
      

    return (
        <div className='sellerChart'>
            <h3 className='sellerChartTitle'> {title}</h3>
            <ResponsiveContainer width='100%' aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey='name' stroke="#609a81"></XAxis>
                    <Line type='monotone' dataKey={dataKey} stroke='#609a81'></Line>
                    <Tooltip/>
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
