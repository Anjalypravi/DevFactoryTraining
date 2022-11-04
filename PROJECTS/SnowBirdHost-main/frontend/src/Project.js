import React from "react";
import downarrow from "./images/downarrow.png";
import logo from "./images/snowlogo.png";
import menu from "./images/menu.png";
import "./style.css";
import search from "./images/search.png";
import cross from "./images/cross.png";
import add from "./images/add.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import { BsThreeDots } from "react-icons/bs";
import Menu from "./Menu";
export default function Project() {
  const [name, setTextName] = useState("");
  const [descri, setDescri] = useState("");
  const [options, setOption] = useState([]);
  const [owner, setRefOwner] = useState("");
  const [type, setTextType] = useState("");
  const [array, setArray] = useState([]);
  var modal = document.getElementById("modal");
  useEffect(() => {
    var url1 =
      "https://iivyvr2ukc.execute-api.us-west-2.amazonaws.com/default/projectload";
    var request1 = {};
    var header1 = {};
    axios
      .post(url1, request1, header1)
      .then((res) => {
        setArray(res.data);
        console.log(res.data);
      })
      .catch();

    //var url = "http://localhost:8000/ownerfetch";
    var url =
      " https://wc9kyrz7xi.execute-api.us-west-2.amazonaws.com/ownerfetch";
    var request = {};
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("resoptions", +JSON.stringify(res.data));
        var len = res.data.length;
        // setA(len);
        if (len > 0) {
          setOption(res.data);
        }
      })
      .catch();
  }, []);

  //  function addproject() {
  //   modal.style.display = "block";
  // }
  function editproject(n) {
    console.log("fetid" + n);
    modal.style.display = "block";
  }

  function closeprject() {
    modal.style.display = "none";
  }
  function cancel() {
    modal.style.display = "none";
  }
  function insertproject() {
    var url =
      "https://d7pr4pwfi4.execute-api.us-west-2.amazonaws.com/projectinsert";
    var request =
      '{ "name": "' +
      name +
      '", "owner": "' +
      owner +
      '" ,"desc":"' +
      descri +
      '","type":"' +
      type +
      '"}';
    console.log("owner :" + JSON.stringify(owner));
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("reS" + JSON.stringify(res.data));
        if (res.data != null) {
          alert("Inserted New project successfully");
          
        } 
      })
      .catch();
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function addproject() {
    modal.style.display = "block";
  }
  return (
    <>
      <div className="main">
        <Menu />
        
        <div className="main_contentbar">
          <button className="fab_button" onClick={addproject}>
            +
          </button>
          <div className="main_contentbar_headerbar">
            <div className="main_contentbar_headerbar_left">
              <div>
                <img src={menu} />
              </div>
              <label>Project</label>
            </div>
            <div className="main_contentbar_headerbar_right">
              <div className="circle">
                <label>AB</label>
              </div>
            </div>
          </div>
          <div className="main_contentbar_search">
            <div className="main_contentbar_search_left">
              <img src={search} />
              <input placeholder="Search by order #, name or email..." />
            </div>
            <div className="main_contentbar_search_right">
              <button>
                Filters <img src={downarrow} />
              </button>
            </div>
          </div>
          <div className="main_contentbar_filters">
            <div className="main_contentbar_filters_inner">
              <button>
                Filters{" "}
                <img
                  className="main_contentbar_filters_inner_img"
                  src={cross}
                />
              </button>
            </div>
            <div className="main_contentbar_filters_inner">
              <button>
                <img
                  className="main_contentbar_filters_inner_add"
                  id="plus"
                  src={add}
                  onClick={addproject}
                />
              </button>
            </div>
          </div>
          <div className="main_contentbar_list">
            <table>
              <thead>
                <th></th>
                <th>Project Name</th>
                {/* <th>Description</th> */}
                <th>Type</th>
                <th>Assigned To</th>
                <th></th>
                {/* <th>Last Head</th> */}
              </thead>
              <tbody>
                {array.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <td>
                          {" "}
                          <input type={"checkbox"} />
                        </td>
                        <td>{item.txtName}</td>
                        <td>{item.txtType}</td>
                        <td>{item.txtUserName}</td>
                        <td>
                          {/* <div className="popup"> */}
                          <BsThreeDots onClick={()=>{editproject(item.id)}}/>
                          {/* </div> */}
                        </td>
                        {/* <td>
                            <BsThreeDots onClick={popup} />
                          </td> */}
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="modal_project" id="modal">
        <div className="modalContent">
          <div className="addprojectdiv">
            <label className="addproject_label">Add Project</label>
            {/* <span id="close" className="close" onClick={closeprject}>&times;</span> */}
          </div>
          <div className="projectname_div">
            <label>Projectname</label>
            <input
              type="text"
              onChange={(e) => {
                setTextName(e.target.value);
              }}
            />
          </div>
          <div className="dropdown_addpr">
            <div className="dropdown_assignedto">
              <label className="assignedto">AssignedTo</label>
              <select className="project_select" onChange={(e) => { setRefOwner(e.target.value);
                }}
              >
                <option>--options--</option>
                {options.map((item, index) => {
                  return (
                    <>
                      <option value={item.id}>{item.txtUserName}</option>
                    </>
                  );
                })}
              </select>
            </div>
            <div className="dropdown_type">
              <label>ProjectType</label>
              <select
                className="project_select"
                onChange={(e) => {
                  setTextType(e.target.value);
                }}
              >
                <option>--options--</option>
                <option value="Telecom">Telecom</option>
                <option value="Business">Business</option>
              </select>
            </div>
          </div>
          <div className="projectdesc_div">
            <label>Description</label>
            <input
              type="text"
              onChange={(e) => {
                setDescri(e.target.value);
              }}
            />
          </div>
          <div className="button_div">
            <div className="buttons_cancel">
              <button onClick={cancel}>Cancel</button>
              <button onClick={insertproject}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
