import React, { useEffect, useState } from "react";
import "./style.css";
import downarrow from "./images/downarrow.png";
import menu from "./images/menu.png";
import add from "./images/add.png";
import search from "./images/search.png";
import cross from "./images/cross.png";
import arrow from "./images/arrow.png";
import user from "./images/user.png";
import threedot from "./images/threedot.png";
import group from "./images/group.png";
import redflag from "./images/redflag.png";

import Menu from "./Menu";
import Boardeditpage from "./Boardeditpage";
import Boardaddtask from "./Boardaddtask";
import { BsThreeDots } from "react-icons/bs";

import axios from "axios";
// import Moment from "moment";
// import { useNavigate } from "react-router-dom";

export default function BoardPage() {
  const [modalshow, setModalShow] = useState(false);
  const [bedit, setBEdit] = useState(false);
  const [badd, setBAdd] = useState(false);
  const [array, setArray] = useState([]);
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);
  const [fourthArray, setFourthArray] = useState([]);
  const [dragElement, setDragElement] = useState({});
  const [id, setId] = useState("");
  const [task, setTask] = useState([]);
  const [taskid, setTaskid] = useState("");
  const [status, setStatus] = useState("");
  const [time, setTime] = useState("");
  //const navigate = useNavigate()

  var temp;
  function handleBoardEditClick(e, item) {
    e.preventDefault();
    localStorage.setItem("taskid", item.id);
    console.log("Task Id==>", item.id);
    const url =
      "https://w2vuo8ba9b.execute-api.us-west-1.amazonaws.com/edittbljoining";
    const data = '{"id":"'+item.id+'"}';
    const header = {};
    axios
      .post(url, data, header)
      .then((res) => {
        console.log("res", res.data);
        // setArrayFunc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setBEdit(bedit ? false : true);
  }
  function handleBoardAddClick(e, item) {
    // alert("hi")
    e.preventDefault();  
    setBAdd(badd ? false : true);
    console.log("badd",badd)
  }
  function handleModalClick(e) {
    e.preventDefault();
    setModalShow(modalshow ? false : true);
  }
  // const handleEditClick = (e, itm) => {
  //   e.preventDefault();
  //   localStorage.setItem("taskid", itm.id);
  //   console.log("Task Id==>", itm.id);
  // };

  useEffect((itm, indx) => {
    // setId(id);
    setFirstArray([]);
    setSecondArray([]);
    setThirdArray([]);
    setFourthArray([]);

    var url =
      "https://pao5y2j7df.execute-api.us-west-1.amazonaws.com/usertaskfetch";
    var data = {};
    var header = {};
    axios
      .post(url, data, header)
      .then((res) => {
        setTask(res.data);
        // var status = res.data.txtStatus;
        // localStorage.setItem("status", status);
        //  console.log("status2==>",status);
        var array = res.data;
        // console.log("arr" + JSON.stringify(array));
        
        var tempfirst = [];
        var tempsecond = [];
        var tempthird = [];
        var tempfourth = [];
        for (const element of array) {
          console.log("element" + JSON.stringify(element));
          // var status = element.txtStatus;
          //  localStorage.setItem("status", status);
          //   console.log("status2==>",status);
          if (element.txtStatus == "to-do") {
            tempfirst = [...tempfirst, element];
            // var status = element.txtStatus;
            // localStorage.setItem("status", status);
            //  console.log("status1==>",status);
          } else if (element.txtStatus == "Inprogress") {
            tempsecond = [...tempsecond, element];
            // var status = element.txtStatus;
            // console.log("status2==>",status);
            // localStorage.setItem("status", status);
          } else if (element.txtStatus == "review") {
            tempthird = [...tempthird, element];
            // var status = element.txtStatus;
            // localStorage.setItem("status", status);
            // console.log("status1==>",status);
          } else if (element.txtStatus == "completed") {
            tempfourth = [...tempfourth, element];
            // var status = element.txtStatus;
            // localStorage.setItem("status", status);
            // console.log("status1==>",status);
          } else {
            console.log("No Task");
          }
        }
        setFirstArray(tempfirst);
        setSecondArray(tempsecond);
        setThirdArray(tempthird);
        setFourthArray(tempfourth);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const allowDrop = (e) => {
    e.preventDefault();
    // alert("hi");
  };
  const handleDrop = (e) => {
    // alert("hi");
    console.log(e);
    e.preventDefault();

    var target = e.target.className;
    if (target == "row4_col first") {
      var status = "to-do";
      setStatus(status);
    }
    if (target == "row4_col second") {
      var status = "Inprogress";
      setStatus(status);
    }
    if (target == "row4_col third") {
      var status = "review";
      setStatus(status);
    }
    if (target == "row4_col fourth") {
      var status = "completed";
      setStatus(status);
    }
    console.log("target==>" + target);
    // console.log("id==>"+id);
    console.log("status==>" + status);
    var startedDiv = dragElement.startedDiv;
    if (
      target != startedDiv &&
      (e.target.className == "row4_col first" ||
        e.target.className == "row4_col second" ||
        e.target.className == "row4_col third" ||
        e.target.className == "row4_col fourth")
    ) {
      if (startedDiv == "row4_col first") {
        delete firstArray[dragElement.index];
      } else if (startedDiv == "row4_col second") {
        delete secondArray[dragElement.index];
      } else if (startedDiv == "row4_col third") {
        delete thirdArray[dragElement.index];
      } else if (startedDiv == "row4_col fourth") {
        delete fourthArray[dragElement.index];
      }
      if (target == "row4_col first") {
        var temp = [...firstArray];
        console.log("dragElement1==>" + JSON.stringify(dragElement));
        var taskid = dragElement.item.id;
        // console.log("id==>"+taskid);
        setTaskid(taskid);
        temp.push(dragElement.item);
        setFirstArray(temp);
      } else if (target == "row4_col second") {
        var temp = [...secondArray];
        console.log("dragElement2==>" + JSON.stringify(dragElement));
        var taskid = dragElement.item.id;
        // console.log("id==>"+taskid);
        setTaskid(taskid);
        temp.push(dragElement.item);
        setSecondArray(temp);
      } else if (target == "row4_col third") {
        var temp = [...thirdArray];
        console.log("dragElement3==>" + JSON.stringify(dragElement));
        var taskid = dragElement.item.id;
        setTaskid(taskid);
        temp.push(dragElement.item);
        setThirdArray(temp);
      }
      if (target == "row4_col fourth") {
        var temp = [...fourthArray];
        console.log("dragElement4==>" + JSON.stringify(dragElement));
        var taskid = dragElement.item.id;
        setTaskid(taskid);
        temp.push(dragElement.item);
        setFourthArray(temp);
      }
    }

    var url1 =
      "https://wj8xvfccwa.execute-api.us-west-1.amazonaws.com/userfetch";
    var req = '{ "status": "' + status + '", "id": "' + taskid + '" }';
    console.log("request==>", req);
    var header = {};
    axios
      .post(url1, req, header)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {});
  };
  const handleDrag = (e, index, startedDiv, item) => {
    console.log(startedDiv);
    console.log(index);
    setDragElement({ index: index, startedDiv: startedDiv, item: item });
    console.log(dragElement);
  };
  return (
    <>


      <Boardeditpage bedit={bedit} setBEdit={setBEdit} />
      <Boardaddtask
        badd={badd}
        setBAdd={setBAdd}
      />

      <div className="main">
        <Menu />

        <div className="main_contentbar">
          <button
            onClick={(e) => {
              handleModalClick(e);
            }}
            className="fab_button"
          >
            +
          </button>
          <div className="main_contentbar_headerbar">
            <div className="main_contentbar_headerbar_left">
              <div>
                <img src={menu} />
              </div>
              <label>
                Board
                {/* {JSON.stringify(firstArray)}
              {JSON.stringify(secondArray)}
              {JSON.stringify(thirdArray)}
              {JSON.stringify(fourthArray)} */}
              </label>
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
              <button className="main_contentbar_filters_inner_button">
                Filters{" "}
                <img
                  className="main_contentbar_filters_inner_img"
                  src={cross}
                />
              </button>
              <button className="main_contentbar_filters_inner_button">
                Filters{" "}
                <img
                  className="main_contentbar_filters_inner_img"
                  src={cross}
                />
              </button>
              <button className="main_contentbar_filters_inner_button">
                Filters{" "}
                <img
                  className="main_contentbar_filters_inner_img"
                  src={cross}
                />
              </button>
            </div>
            <div className="main_contentbar_filters_inner">
              <button className="main_contentbar_filters_inner_button">
                Filters{" "}
                <img
                  className="main_contentbar_filters_inner_img"
                  src={cross}
                />
              </button>
              <button className="main_contentbar_filters_inner_addbutton">
                <img className="main_contentbar_filters_inner_add" src={add} />
              </button>
            </div>
          </div>
          <div className="row4">
            <div
              className="row4_col first"
              onDragOver={(e) => allowDrop(e)}
              onDrop={(e) => handleDrop(e)}
            >
              <div className="row4_col_header">
                <img src={downarrow} />
                <label className="todo">TODO</label>
              </div>

              {firstArray.map((item, index) => {
                return (
                  <>
                    <div
                      className="row4_col_content"
                      draggable="true"
                      onDragStart={(e) => {
                        handleDrag(e, index, "row4_col first", item);
                      }}
                    >
                      <div>
                        <div className="row4_col_singletask_headerrow">
                          <div>
                            <img src={arrow} />
                          </div>
                          <label>{item.txtTitle}</label>
                          <div className="dropdown">
                            <BsThreeDots
                              className="dropbtn"
                              // onClick={(e) => {handleEditClick(e,item);}}
                            />
                            <div className="dropdown-content">
                              <label
                                onClick={(e) => {
                                  handleBoardEditClick(e, item);
                                }}
                              >
                                Edit
                              </label>
                              <label style={{ color: "gray" }}>Delete</label>
                            </div>
                          </div>
                        </div>
                        <div className="row4_col_singletask_childpart1">
                          <div className="row4_col_singletask_childpart_row">
                            <img src={group} />
                            <label>{item.epicname}</label>
                          </div>
                          <div className="row4_col_singletask_childpart_row">
                            {" "}
                            <img src={redflag} />
                            <label>{item.txtName}</label>
                          </div>
                          <div className="row4_col_singletask_childpart_row">
                            {" "}
                            <img src={user} />
                            <label>{item.txtUserName}</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              <div
                className="row4_col_addtask"
                onClick={(e) => {
                  handleBoardAddClick(e);
                }}
              >
                +
              </div>
            </div>
            <div
              className="row4_col second"
              onDragOver={(e) => allowDrop(e)}
              onDrop={(e) => handleDrop(e)}
            >
              <div className="row4_col_header">
                <img src={downarrow} />
                <label className="inprogress">IN PROGRESS</label>
              </div>

              {secondArray.map((item, index) => {
                return (
                  <div
                    className="row4_col_content"
                    draggable="true"
                    onDragStart={(e) => {
                      handleDrag(e, index, "row4_col second", item);
                    }}
                  >
                    <div className="row4_col_singletask_headerrow">
                      <div>
                        <img src={arrow} />
                      </div>
                      <label>{item.txtTitle}</label>
                      <div className="dropdown">
                        <BsThreeDots className="dropbtn" />
                        <div className="dropdown-content">
                          <label
                            onClick={(e) => {
                              handleBoardEditClick(e, item);
                            }}
                          >
                            Edit
                          </label>
                          <label style={{ color: "gray" }}>Delete</label>
                        </div>
                      </div>
                    </div>
                    <div className="row4_col_singletask_childpart2">
                      <div className="row4_col_singletask_childpart_row">
                        <img src={group} />
                        <label>{item.epicname}</label>
                      </div>
                      <div className="row4_col_singletask_childpart_row">
                        {" "}
                        <img src={redflag} />
                        <label>{item.txtName}</label>
                      </div>
                      <div className="row4_col_singletask_childpart_row">
                        {" "}
                        <img src={user} />
                        <label>{item.txtUserName}</label>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div
                className="row4_col_addtask"
                onClick={(e) => {
                  handleBoardAddClick(e);
                }}
              >
                +
              </div>
            </div>
            <div
              className="row4_col third"
              onDragOver={(e) => allowDrop(e)}
              onDrop={(e) => handleDrop(e)}
            >
              <div className="row4_col_header">
                <img src={downarrow} />
                <label className="onreview">ON REVIEW</label>
              </div>
              {thirdArray.map((item, index) => {
                return (
                  <>
                    <div
                      className="row4_col_content"
                      draggable="true"
                      onDragStart={(e) => {
                        handleDrag(e, index, "row4_col third", item);
                      }}
                    >
                      <div className="row4_col_singletask_headerrow">
                        <div>
                          <img src={arrow} />
                        </div>
                        <label>{item.txtTitle}</label>
                        <div className="dropdown">
                          <BsThreeDots className="dropbtn" />
                          <div className="dropdown-content">
                            <label
                              onClick={(e) => {
                                handleBoardEditClick(e, item);
                              }}
                            >
                              Edit
                            </label>
                            <label style={{ color: "gray" }}>Delete</label>
                          </div>
                        </div>
                      </div>
                      <div className="row4_col_singletask_childpart3">
                        <div className="row4_col_singletask_childpart_row">
                          <img src={group} />
                          <label>{item.epicname}</label>
                        </div>
                        <div className="row4_col_singletask_childpart_row">
                          {" "}
                          <img src={redflag} />
                          <label>{item.txtName}</label>
                        </div>
                        <div className="row4_col_singletask_childpart_row">
                          {" "}
                          <img src={user} />
                          <label>{item.txtUserName}</label>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              <div
                className="row4_col_addtask"
                onClick={(e) => handleBoardAddClick(e)}
              >
                +
              </div>{" "}
              {/* <div className="row4_col_singletask collapse"></div> */}
              <div className="row4_col_addtask"></div>
            </div>
            <div
              className="row4_col fourth"
              onDragOver={(e) => allowDrop(e)}
              onDrop={(e) => handleDrop(e)}
            >
              <div className="row4_col_header">
                <img src={downarrow} />
                <label className="completed">COMPLETED</label>
              </div>
              {fourthArray.map((item, index) => {
                return (
                  <>
                    <div
                      className="row4_col_content"
                      draggable="true"
                      onDragStart={(e) => {
                        handleDrag(e, index, "row4_col fourth", item);
                      }}
                    >
                      <div className="row4_col_singletask_headerrow">
                        <div>
                          <img src={arrow} />
                        </div>
                        <label>{item.txtTitle}</label>
                        <div className="dropdown">
                          <BsThreeDots className="dropbtn" />
                          <div className="dropdown-content">
                            <label
                              onClick={(e) => {
                                handleBoardEditClick(e, item);
                              }}
                            >
                              Edit
                            </label>
                            <label style={{ color: "gray" }}>Delete</label>
                          </div>
                        </div>
                      </div>
                      <div className="row4_col_singletask_childpart4">
                        <div className="row4_col_singletask_childpart_row">
                          <img src={group} />
                          <label>{item.epicname}</label>
                        </div>
                        <div className="row4_col_singletask_childpart_row">
                          {" "}
                          <img src={redflag} />
                          <label>{item.txtName}</label>
                        </div>
                        <div className="row4_col_singletask_childpart_row">
                          {" "}
                          <img src={user} />
                          <label>{item.txtUserName}</label>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              <div
                className="row4_col_addtask"
                onClick={(e) => handleBoardAddClick(e)}
              >
                +
              </div>
              {/* <div className="row4_col_singletask collapse"></div> */}
              <div className="row4_col_addtask"></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}



