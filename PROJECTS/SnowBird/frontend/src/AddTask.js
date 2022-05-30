import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react";
import "./styles/SnowBirdStyle.css";
function AddTask() {
  const [user, setUser] = useState([]);
  const [sprint, setSprint] = useState([]);
  const [epic, setEpic] = useState([]);
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
    var url = "http://localhost:8000/sprintfetch";
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
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrow">
          <div className="usericon"></div>
          <label>User</label>
        </div>
        <div className="secondrow">
          {/* Side navigation menu */}
          <div className="firstcolumn">
            <nav>
              <li>Board</li>
              <li>Projects</li>
              <li>Epics</li>
              <li>Tasks</li>
              <li>Sprints</li>
              <li>Users</li>
            </nav>
          </div>

          {/* Main outline */}
          <div className="secondcolumn">
            <div className="buttonright">
              <label>AddTask</label>
              <button>SAVE</button>
            </div>
            <div className="seccolumsecondrow">
              <div>
                <lable>
                  <h4>Title</h4>
                </lable>
                <input className="titleinput" type="text"></input>
              </div>
              <div>
                <lable>
                  <h4>Description</h4>
                </lable>
                <input className="descriptioninput" type="text"></input>
              </div>
              <div className="statusinput">
                <lable>
                  <h4>Status</h4>
                </lable>
                <select className="select1" id="status-select">
                  <option value="">-- option--</option>
                  <option value="ToDo">ToDo</option>
                  <option value="InProgress">InProgress</option>
                  <option value="Review">Review</option>
                  <option value="Complete">Complete</option>
                </select>
              </div>
              <div className="assignedtoinput">
                <lable>
                  <h4>Assigned to</h4>
                </lable>
                <select className="select2" id="Name-select">
                  {user.map((item, index) => {
                    return (
                      <>
                        <option>{item.txtUserName}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <div className="sprintinput">
                <lable>
                  <h4>Sprint Name</h4>
                </lable>
                <select className="select2" id="Name-select">
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
                <lable>
                  <h4>Epic Name</h4>
                </lable>
                <select className="select2" id="Name-select">
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
