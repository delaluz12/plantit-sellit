import React from 'react'

import './sellerWidgetLg.css'

export default function SellerWidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
      return (
        <div className="sellerWidgetLg">
          <h3 className="widgetLgTitle">Latest transactions</h3>
          <table className="widgetLgTable">
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Payment Status</th>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="/s3images/067be058b5915c5a670aadfd25edae3c"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Amber Hall</span>
              </td>
              <td className="widgetLgDate">1 Nov 2021</td>
              <td className="widgetLgAmount">$75.42</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="/s3images/175d1aa9872afbf7bf013db062c13e62"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">6 Nov 2021</td>
              <td className="widgetLgAmount">$169.32</td>
              <td className="widgetLgStatus">
                <Button type="Declined" />
              </td>
            </tr>
            
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="/s3images/8cb53084de51776742da355cc8813a94"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Cara Frey</span>
              </td>
              <td className="widgetLgDate">12 Nov 2021</td>
              <td className="widgetLgAmount">$89.56</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="/s3images/14f08d8b7a4776e72e6e9c06e1aafd2a"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Johnie Reid</span>
              </td>
              <td className="widgetLgDate">17 Nov 2021</td>
              <td className="widgetLgAmount">$14.89</td>
              <td className="widgetLgStatus">
                <Button type="Pending" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="/s3images/82fe214dd3459082f5f7d33bf021f5e9"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Miguel Rosales</span>
              </td>
              <td className="widgetLgDate">19 Jun 2021</td>
              <td className="widgetLgAmount">$115.45</td>
              <td className="widgetLgStatus">
                <Button type="Pending" />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="/s3images/3603a4ac5138b74ea1544b22c722188a"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Itzel Tirado</span>
              </td>
              <td className="widgetLgDate">21 Nov 2021</td>
              <td className="widgetLgAmount">$23.69</td>
              <td className="widgetLgStatus">
                <Button type="Pending" />
              </td>
            </tr>
          </table>
        </div>
      );
}
