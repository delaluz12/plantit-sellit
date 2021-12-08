import React from 'react'

import './adminWidgetLg.css'

export default function AdminWidgetLg() {
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
                  src="/s3images/175d1aa9872afbf7bf013db062c13e62"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$122.00</td>
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
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus">
                <Button type="Declined" />
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
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus">
                <Button type="Pending" />
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
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$122.00</td>
              <td className="widgetLgStatus">
                <Button type="Approved" />
              </td>
            </tr>
          </table>
        </div>
      );
}
