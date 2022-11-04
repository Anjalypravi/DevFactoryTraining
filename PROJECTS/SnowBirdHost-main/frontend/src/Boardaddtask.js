import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";
export default function Boardaddtask({ badd, setBAdd }) {
  const [projectname, setProjectName] = useState("");
  const [epic, setEpic] = useState("");
  const [assignee, setAssignee] = useState("");
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [array, setArrayFunc] = useState([]);
  const handleSelectProject = (e) => {
    e.preventDefault();
    setProjectName(e.target.value);
  };
  const handleSelectEpic = (e) => {
    e.preventDefault();
    setEpic(e.target.value);
  };
  const handleSelectAssignee = (e) => {
    e.preventDefault();
    setAssignee(e.target.value);
  };
  const handleTask = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };
  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };
  const handleSaveClick = (e) => {
    e.preventDefault();
    // var Status = localStorage.getItem("status");
    // console.log("status1==>", Status);
    const url =
      "https://r27qu988ij.execute-api.us-west-1.amazonaws.com/projectaddtask";
    const req =
      ' { "EpicId":"' +
      epic +
      '","Assignee":"' +
      assignee +
      '", "Title":"' +
      task +
      '","Description":"' +
      description +
      '"}';
    const header = {};
    //console.log("req",data);
    axios
      .post(url, req, header)
      .then((res) => {
        console.log("res", res.data);
        setBAdd(badd ? false : true);
        //setArrayFunc(res.req);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const url =
      "https://sfuv97q3l9.execute-api.us-west-1.amazonaws.com/tbljoining";
    const data = {};
    const header = {};
    axios
      .post(url, data, header)
      .then((res) => {
        console.log("res", res.data);
        setArrayFunc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {" "}
      {/* <div  className={modalshow?"modal_project":"hidden"}  id="modal"> */}
      <div className={badd ? "modal_project" : "hidden"} id="modal">
        {/* <div  className="modal_project"   id="modal"> */}
        <div className="modalContent">
          <label className="addproject_label">Add Task</label>
          <div className="projectname_div">
            <label className="projectname">Projectname</label>
            <select
              className="project_select"
              value={projectname}
              onChange={(e) => handleSelectProject(e)}
            >
              <option>--options--</option>
              {array.map((itm, indx) => {
                return <option value={itm.id}>{itm.txtName}</option>;
              })}
              ;
            </select>
          </div>
          <div className="projectname_div">
            <label className="epic1">Epic</label>
            <select
              className="project_select"
              value={epic}
              onChange={(e) => handleSelectEpic(e)}
            >
              <option>--options--</option>
              {array.map((itm, indx) => {
                return <option value={itm.id}>{itm.txtTitle}</option>;
              })}
              ;
            </select>
          </div>
          <div className="projectname_div">
            <label className="assignee">Assignee</label>
            <select
              className="project_select"
              value={assignee}
              onChange={(e) => handleSelectAssignee(e)}
            >
              <option>--options--</option>
              {array.map((itm, indx) => {
                return <option value={itm.id}>{itm.txtUserName}</option>;
              })}
              ;
            </select>
          </div>
          <div className="projectname_div">
            <label>Task</label>
            <input
              type="text"
              value={task}
              onChange={(e) => handleTask(e)}
            ></input>
          </div>
          <div className="projectname_div">
            <label>Description</label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => handleDescription(e)}
            ></textarea>
          </div>
          <div className="button_div">
            <button
              onClick={(e) => {
                setBAdd(badd ? false : true);
              }}
              className="cancelbutton"
            >
              Cancel
            </button>
            <button onClick={(e) => handleSaveClick(e)}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}