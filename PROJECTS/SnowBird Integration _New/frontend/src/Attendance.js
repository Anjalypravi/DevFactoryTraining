import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { format } from "date-fns";
import Moment from "moment";
import React from "react";
const Attendance = () => {
  const [id, setId] = useState("");
  const [datetime, setDateTime] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    var id = 16;
    setId(id);
    console.log("id", id);
    var url = "http://localhost:8000/fetchstatus";
    var request = { id: id };
    console.log("id for status", request);
    var header = {};
    axios
    .post(url, request, header)
    .then((res) => {
      console.log("current" + JSON.stringify(res.data[0].txtstatus));
      var temp=JSON.stringify(res.data);
      var sta=res.data[0].txtstatus
      console.log("t-->",sta)
            // setStatus(res.data.txtstatus)
           if(temp!=null)
           {
            if(sta!="login")
            {
              console.log("sta-logn ",sta)
              document.getElementById("login").disabled = false;
              document.getElementById("logout").disabled =true;      
            }
            else if(sta!="logout")
            {
              console.log("sta",sta)
              document.getElementById("login").disabled = true;
              document.getElementById("logout").disabled = false; 
              
            }
          }
          else
          {
            console.log("sta",sta)
            document.getElementById("login").disabled = false;
            document.getElementById("logout").disabled = true;  
          }
        })
      .catch();
  }, []);

  const disablefirst = () => {
    document.getElementById("login").disabled = true;
    document.getElementById("logout").disabled = false;

    var formattedDate = Moment(new Date()).format("YYYY-MM-DD hh:mm:ss ");
    console.log(formattedDate);

    // setDateTime(formattedDate);
    // console.log("id", id);
    // console.log("status", status);
    // console.log("dat", datetime);
    var url = "http://localhost:8000/insertstatus";
    var request = { refid: id, status: "login", logintime: formattedDate };
    console.log("req", JSON.stringify(request));
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        alert("succefully logged!!");
        // console.lo
      })
      .catch();
  };
  function disablesecond() {
    document.getElementById("logout").disabled = true;
    document.getElementById("login").disabled = false;

    var formattedDate = Moment(new Date()).format("YYYY-MM-DD hh:mm:ss ");
    console.log(formattedDate);
    var url = "http://localhost:8000/insertstatus";
    var request = { refid: id, status: "logout", logintime: formattedDate };
    console.log("req", request);
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        alert("succefully logged out!!");
        // console.lo
      })
      .catch();
  }
  return (
    <>
      <div className="outer">
        <div className="secondrow">
          {/* Side navigation menu */}
          {<Menu />}
          {/* Main outline */}
          <div className="prowone">
            <label>Attendance</label>
          </div>

          {/* Button for LOGIN and LOGOUT */}
          <div className="log_button">
            <button id="login" onClick={disablefirst}>
              LOGIN
            </button>
            <button id="logout" onClick={disablesecond}>
              LOGOUT
            </button>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
export default Attendance;

//
//
