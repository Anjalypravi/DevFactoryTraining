import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react";
import "./styles/SnowBirdStyle.css";
function AddEpic() {
  const [user, setUser] = useState([]);
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
              <label>AddEpic</label>
              <button>SAVE</button>
            </div>
            <div className="seccolumsecondrow">
              <div>
                <lable>
                  <h4 className="titleinput">Title</h4>
                </lable>
                <input className="titleinput" type="text"></input>
              </div>
              <div>
                <lable>
                  <h4 className="titleinput">Description</h4>
                </lable>
                <input className="descriptioninput" type="text"></input>
              </div>
              <div className="statusinput">
                <lable>
                  <h4 className="titleinput">Status</h4>
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
                  <h4 className="assignedtoinput">Assigned to</h4>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddEpic;
