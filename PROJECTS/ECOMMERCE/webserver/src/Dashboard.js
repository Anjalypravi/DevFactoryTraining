import { useState } from "react";
import "./style.css";
import {ReactSession} from"react-client-session";

function Dashboard() {
  const [productlist, setProductList] = useState([
    { Id: "1", productName: "ABBCCC", Rate: "100", Tax: "18" },
    { Id: "2", productName: "AABBBC", Rate: "100", Tax: "18" },
    { Id: "3", productName: "AAABBB", Rate: "100", Tax: "18" },
  ]);
const[usr,serUsrName]=useState('');
  return (
    <div>
      <div className="header">
        <label>User</label>
      </div>
      <div className="menu">
        <label>Menu</label>
      
      
      <nav>
        <li>Home</li>
        <li>Products</li>
        <li>Orders</li>
        <li>Logout</li>
      </nav>
</div>
      <div>
        {" "}
        <table>
          <thead>
            <th>Id</th>
            <th>ProductName</th>
            <th>Rate</th>
            <th>Tax</th>
          </thead>

          <tbody>
            {productlist.map((item, num) => {
              return (
                <tr>
                  <td> {item.Id}</td>
                  <td>{item.productName}</td>
                  <td>{item.Rate}</td>
                  <td>{item.Tax}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Dashboard;
