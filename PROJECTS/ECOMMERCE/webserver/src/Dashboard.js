import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [sample, setSample]=useState('');
  const [usr, setUsrName] = useState("");
  const Navigate = useNavigate();
  
  useEffect(() => {
    if (ReactSession.get("username") == undefined) {
      Navigate("/");
    }
    setUsrName(ReactSession.get("username"))

    setSample('')
    var token=ReactSession.get("token")
  });
  return (
    <div>
      <div className="header">
        <label>{usr}</label>
      </div>
      <div className="menu">
        <label>Menu</label>

        <nav>
          <li>Home</li>
          <li>onclick ={}Products</li>
          <li>Orders</li>
          <li>Logout</li>
        </nav>
      </div>
      

          </div>
  );
}
export default Dashboard;
