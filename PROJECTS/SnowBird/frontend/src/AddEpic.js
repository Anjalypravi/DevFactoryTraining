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
              <div className="titleinput">
                <lable>Title</lable><br></br>
                <input  type="text"></input>
              </div>
              <br></br>
              <div>
                <lable className="titleinput">
                   Description
                </lable><br></br>
                <input className="descriptioninput" type="text"></input>
              </div>
<br></br>
              <div className="statusin">
                <label>Status</label>
                <br></br>
                <select className="select1" id="status-select">
                  <option value="">-- option--</option>
                  <option value="ToDo">ToDo</option>
                  <option value="InProgress">InProgress</option>
                  <option value="Review">Review</option>
                  <option value="Complete">Complete</option>
                </select>
              </div>
              <br></br>
              <div className="assignuser">
                <label>Assigned to</label>
                <br></br>
                <select
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                >
                  {user.map((item, index) => {
                    return <option>{item.txtUserName}</option>;
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
