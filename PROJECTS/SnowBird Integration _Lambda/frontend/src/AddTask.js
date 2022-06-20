import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react";
import "./style/styles.css";
import Menu from './Menu'
function AddTask() {
  const [user, setUser] = useState([]);
  const [sprint, setSprint] = useState([]);
  const [epic, setEpic] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState([]);
  const [status, setStatus] = useState([]);
  const [hours, setHours] = useState(" ");
  useEffect(() => {
    var url = "http://localhost:8000/userfetch";
    var request = {};
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch();
  }, []);
  useEffect(() => {
    var url = "http://localhost:8000/sprintfetch_task";
    var request = {};
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        setSprint(res.data);
      })
      .catch();
  }, []);
  useEffect(() => {
    var url = "http://localhost:8000/Epiclistfetch";
    var request = {};
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        setEpic(res.data);
      })
      .catch();
  }, []);
  function handleClick(e) {
    console.log("hi");
    var url = "http://localhost:8000/Taskinsert";
    var req = {
      txtTitle: title,
      txtDescriotion: description,
      txtStatus: status,
      refassignee: 7,
      refSprintId: sprint,
      EstHours:hours
    };
    var header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch();
    alert("Success");
  }
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        {/* <div className="firstrow">
          <div className="usericon"> </div>
          <label>User</label>
        </div> */}
        <div className="secondrow">
          {/* Side navigation menu */}

          {<Menu />}

          {/* Main outline */}
          <div className="secondcolumn">
            <div className="buttonright">
              <label>AddTask</label>
              <button onClick={handleClick}>SAVE</button>
            </div>
            <div className="seccolumsecondrow">
              <div className="titleinput">
                <lable>Title</lable>
                <br></br>
                <input
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                ></input>
              </div>
              <br></br>
              <div>
                <lable className="titleinput">Description</lable>
                <br></br>
                <input
                  className="descriptioninput"
                  type="text"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></input>
              </div>
              <br></br>
              <br></br>
              <div className="statusin">
                <label className="lb1">Status</label> <label className="lb2">Estimated Hours</label>
                <br></br>
                <select className="select1" id="status-select">
                  <option value="">-- option--</option>
                  <option value="ToDo">ToDo</option>
                  <option value="InProgress">InProgress</option>
                  <option value="Review">Review</option>
                  <option value="Complete">Complete</option>
                </select>
                <input type="text" onChange={(e) => {
                    setHours(e.target.value);
                  }}></input>
              </div>
              <br></br>
              <div className="assignuser">
                <label>Assigned to</label>
                <br></br>

                <select
                  onSelect={(e) => {
                    setUser(e.target.value);
                  }}
                >
                  {user.map((item, index) => {
                    return <option value={item.id}>{item.txtUserName}</option>;
                  })}
                </select>
              </div>
              <div className="sprintinput">
                <label>Sprint Name</label>
                <br></br>
                <select
                  onSelect={(e) => {
                    setSprint(e.target.value);
                  }}
                >
                  {sprint.map((item, index) => {
                    return (
                      <>
                        <option>{item.txtSprintName}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="epicinput">
                <label>Epic Name</label>
                <br></br>
                <select
                  onSelect={(e) => {
                    setEpic(e.target.value);
                  }}
                >
                  {epic.map((item, index) => {
                    return (
                      <>
                        <option>{item.txtTitle}</option>
                        console.log(item.txtTitle);
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddTask;