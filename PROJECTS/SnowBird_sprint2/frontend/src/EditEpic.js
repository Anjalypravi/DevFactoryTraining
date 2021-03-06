import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react";
import "./styles/SnowBirdStyle.css";
import Menu from './Menu';
function EditEpic() {
  const [user, setUser] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState([]);
  const [status, setStatus] = useState([]);
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

  function handleClick(e) {
    console.log("hi");
    var url = "http://localhost:8000/updateEpic";      
    var req = {txtTitle:title,txtDescription:description,txtStatus:status,refassignee:4,id:7};
    var header = {};
    axios
    .post(url, req, header)
    .then((res) => {
      console.log(res.data);
      setUser(res.data);
      
    })
    .catch();
    
    alert('Success')
};
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
              <label>EditEpic</label>
              <button onClick={handleClick}>SAVE</button>
            </div>
            <div className="seccolumsecondrow">
              <div className="titleinput">
                <lable>Title</lable><br></br>
                <input  type="text" onChange={(e)=>{setTitle(e.target.value)}}></input>
              </div>
              <br></br>
              <div>
                <lable className="titleinput">
                   Description
                </lable><br></br>
                <input className="descriptioninput" type="text" onChange={(e)=>{setDescription(e.target.value)}}></input>
              </div>
<br></br>
              <div className="statusinlongwidth">
                <label>Status</label>
                <br></br>
                <select className="select1" id="status-select" onChange={(e)=>{setStatus(e.target.value)}}>
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
                  onSelect={(e) => {
                    setUser(e.target.value);
                  }}
                >
                  {user.map((item, index) => {
                    return <option value={item.id}>{item.txtUserName}</option>;
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
export default EditEpic;
