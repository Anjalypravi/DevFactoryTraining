import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios"
import {ReactSession} from"react-client-session";
import {useNavigate} from "react-router-dom"


function Dashboard() {
  const[usr,serUsrName]=useState('');
const Navigate =useNavigate();
  const [productlist, setProductList] = useState([
    { Id: "1", productName: "ABBCCC", Rate: "100", Tax: "18" },
    { Id: "2", productName: "AABBBC", Rate: "100", Tax: "18" },
    { Id: "3", productName: "AAABBB", Rate: "100", Tax: "18" },
  ]);
useEffect(()=>{
  if(ReactSession.get("username")==undefined){
    Navigate('/')
  }
  
})
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
