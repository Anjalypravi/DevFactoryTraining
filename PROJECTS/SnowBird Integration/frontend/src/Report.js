import Menu from "./Menu";
import { FaDownload } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import axios from "axios";
function Report() {
  const[taskdetails,setTaskDetails]=useState([]);
  const[user,setUser]=useState([]);
  const[uid,setUid]=useState("");
  useEffect(()=>{
    var url_u="http://localhost:8000/userfetch";
    var request={};
    var header={};
    axios.post(url_u,request,header).then((res)=>{
      console.log(res.data);
      var temp=res.data;
      console.log("temp",temp);
      setUser(temp);
    }).catch()
  },[])
 
  function fetchtask()
  {
          var url="http://localhost:8000/timesheet_taskfetch";
          var request={userid:uid};
          var header={};
          console.log("request"+JSON.stringify(request));
          axios.post(url,request,header).then((res)=>{
            console.log("response"+JSON.stringify(res.data));
            setTaskDetails(res.data);
          }).catch()
  }
  return (
    <>
      <div className="outer">
        <div className="secondrow">
          {/* Side navigation menu */}
          {<Menu  />}
          {/* Main outline */}
          <div className="secondcolumn">
          <div className="report_rowone">
            <label style={{color:'gray'}}>UserName</label>
            <br></br>
            {/* <input type="textbox" /> */}
            <select onChange={(e) => {setUid(e.target.value) }}>
            <option>--options---</option>
            {user.map((item,index)=>{
              // <option>--Options----</option>
              return<>
                <option value={item.id}>{item.txtUserName}</option>
                </>
            })}
             </select>
            <button onClick={fetchtask}>OK</button>
          </div>

          <div className="report_secrow">
            <h1>TimeSheet</h1>
            <h3>Parameters Passed-<label style={{fontWeight:'100',fontSize:'medium'}}>One:One,Two</label></h3>
            
          </div>

          <div className="icons">
            <FaDownload className="fa_download"  size={25}  ></FaDownload>&nbsp;&nbsp;
            <FiRefreshCw className="fa_download" size={25}></FiRefreshCw>
            {/* <FontAwesomeIcon icon="fa-solid fa-down-to-line" /> */}
          </div>

          <div className="report_third">
              
          <table>
            <thead>
            <th >Task</th>
             <th>AssignedTo</th>
            <th>Status</th>
            <th>EstimatedHours</th>
            <th className="time" >ActualFrom</th>
            <th className="time" >ActualTo</th>
            <th>ActualHours</th>
            </thead>
            <tbody>
              {taskdetails.map((item,index)=>{
                return<>
                <tr>
                  <td>{item.txtDescription}</td>
                  <td>{item.txtUserName}</td>
                  <td>{item.txtStatus}</td>
                  <td>{item.EstHours}</td>
                  <td>{item.startdate}</td>
                  <td>{item.enddate}</td>
                  <td></td>
                </tr>
                </>
              })}
              {/* <tr>
                <td>LoginPage</td>  
                <td>Ajay</td>
                <td>InProgress</td>
                <td>40</td>
                <td>2022-04-21</td>
                <td>2022-05-10</td>
                <th>45</th>
                </tr> */}
               
            </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Report;
