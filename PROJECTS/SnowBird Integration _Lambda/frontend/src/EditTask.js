import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react";
//import "./styles/SnowBirdStyle.css";
import Menu from './Menu'
import "./style/styles.css";
function EditTask() {
  const [user, setUser] = useState([]);
  const [sprint, setSprint] = useState([]);
  const [epic, setEpic] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState([]);
  const [status, setStatus] = useState([]);
  const [hours, setHours] = useState(" ");
  const [id,setId]=useState("");
  const [taskdetail,setTaskDetail]=useState([]);
  const[username,setUserName]=useState("");
  useEffect(() => {
    var tempid = localStorage.getItem('taskid')
    setId(tempid);
    var url="http://localhost:8000/taskdetails";
    var request={id:tempid};
    console.log(request);
    var header={};
    axios
    .post(url,request,header)
    .then((res)=>{
      
      console.log("aaa"+JSON.stringify(res.data));
      setTaskDetail(res.data);

      setTitle(res.data[0].txtTitle);
      setDescription(res.data[0].txtDescription);
      setStatus(res.data[0].txtStatus);
      setUserName(res.data[0].txtUserName);
      setHours(res.data[0].EstHours);
      
      
    })
    .catch();

    var url1 = "http://localhost:8000/userfetch";
    var request1 = {id:tempid};
    var header1 = {};
    axios
      .post(url1, request1, header1)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        console.log(tempid)
      })
      
      .catch();

      var url2 = "http://localhost:8000/sprintfetch";
      var request2 = {id:tempid};
      var header2 = {};
      axios
        .post(url2, request2, header2)
        .then((res) => {
          console.log(res.data);
          setSprint(res.data);
        })
        .catch();

        var url3 = "http://localhost:8000/Epiclistfetch";
    var request3 = {id:tempid};
    var header3 = {};
    axios
      .post(url3, request3, header3)
      .then((res) => {
        console.log(res.data);
        setEpic(res.data);
      })
      .catch();
  }, []);


  function handleClick(e) {
    console.log("hi");
    var url = "http://localhost:8000/Taskinsert";      
    var req = {txtTitle:title,txtDescriotion:description,txtStatus:status,refassignee:4,refSprintId:sprint,EstHours:hours};
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
              <label>EditTask</label>
              <button onClick={handleClick}>SAVE</button>
            </div>
            <div className="seccolumsecondrow">
              <div className="titleinput">
                <label>Title</label><br></br>
                <input  type="text" value={title}></input>
              </div>
              <br></br>
              <div>
                <label className="titleinput" >
                   Description
                </label><br></br>
                <input className="descriptioninput" type="text" value={description}></input>
              </div>
<br></br>
<div className="statusin">
                <label className="lb1">Status</label> <label className="lb2">Estimated Hours</label>
                <br></br>
                <select className="select1" value={status} onChange={(e) => {
                    setStatus(e.target.value);
                  }}id="status-select">
                  
                  <option value="ToDo">ToDo</option>
                  <option value="InProgress">InProgress</option> 
                   <option value="Review">Review</option> 
                   <option value="Complete">Complete</option>
                </select>
                <input type="text"value={hours} onChange={(e) => {
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
                    return <option>{item.txtUserName}</option>;
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
export default EditTask;