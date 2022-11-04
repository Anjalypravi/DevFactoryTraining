
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";
export default function Boardeditpage({ bedit, setBEdit }) {
  const [projectname, setProjectName] = useState("");
  const [epic, setEpic] = useState("");
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [array, setArrayFunc] = useState([]);
  // const [id, setId] = useState("");
  const handleSelectProject = (e) => {
    e.preventDefault();
    setProjectName(e.target.value);
  };
  const handleSelectEpic = (e) => {
    e.preventDefault();
    setEpic(e.target.value);
  };
  const handleTask = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };
  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };
  var id = localStorage.getItem("taskid");
  console.log("task id get=", id);
  useEffect(() => {
    const url =
      "https://w2vuo8ba9b.execute-api.us-west-1.amazonaws.com/edittbljoining";
    const data = '{"id":"' + id + '"}';
    const header = {};
    axios
      .post(url, data, header)
      .then((res) => {
        console.log("res", res.data);
        setArrayFunc(res.data);
        // setProjectName(res.data[0].txtName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSaveClick = (e) => {
    e.preventDefault();
    // var id = localStorage.getItem("taskid");
    // console.log("task id get2=", id);
    // var a = localStorage.getItem("taskid");
    const url =
      "https://w0f3gv3q97.execute-api.us-west-1.amazonaws.com/projectedittask";
    const req =
      ' { "txtTask":"' +
      task +
      '","txtDescription":"' +
      description +
      '","id":"' +
      id +
      '"}';
    const header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        console.log("res", res.data);
        setBEdit(bedit ? false : true);
        //setArrayFunc(res.req);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {" "}
      {/* <div  className={modalshow?"modal_project":"hidden"}  id="modal"> */}
      <div className={bedit ? "modal_project" : "hidden"} id="modal">
        {/* <div  className="modal_project"   id="modal"> */}
        <div className="modalContent">
          <label className="addproject_label">Edit Task</label>
          <div>
            <div className="projectname_div">
              <label className="projectname">Projectname</label>
              <select
                className="project_select"
                value={projectname}
                onChange={(e) => handleSelectProject(e)}
              >
                {/* <option>--options--</option> */}
                {array.map((itm, indx) => {
                  return <option value={itm.id}>{itm.txtName}</option>;
                })}
              </select>
            </div>
            <div className="projectname_div">
              <label className="epic1">Epic</label>
              <select
                className="project_select"
                value={epic}
                onChange={(e) => handleSelectEpic(e)}
              >
                {/* <option>--options--</option> */}
                {array.map((itm, indx) => {
                  return <option value={itm.id}>{itm.txtTitle}</option>;
                })}
              </select>
            </div>
            <div className="projectname_div">
              <label>Task</label>
              {/* {array.map((itm,indx)=>{
                return */}
              <input type="text" value={task} onChange={(e) => handleTask(e)}>
                {/* {itm.task} */}
              </input>
              {/* })} */}
            </div>
            <div className="projectname_div">
              <label>Description</label>
              {/* {array.map((itm,indx)=>{
                return( */}
              <textarea
                rows={4}
                value={description}
                onChange={(e) => handleDescription(e)}
                // value={itm.id}
              >
                {/* {itm.txtDescription} */}
              </textarea>
              {/* )
              })} */}
            </div>
            <div className="button_div">
              <button
                onClick={(e) => {
                  setBEdit(bedit ? false : true);
                }}
                className="cancelbutton"
              >
                Cancel
              </button>
              <button onClick={(e) => handleSaveClick(e)}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}