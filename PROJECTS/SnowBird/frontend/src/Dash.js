
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Singleuser from "./Singleuser";
import "./styles/SnowBirdStyle.css";
function Dash() {
  var navigate = useNavigate();
  const [array, setArray] = useState([]);
  const [task, setTask] = useState([]);
  var temp;
  useEffect(() => {
    var url = "http://localhost:8000/userfetch";
    var request = {};
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        setArray(res.data);
        console.log("array"+JSON.stringify(array));
      })
      .catch();
  }, []);

  function tasklist(id) {
    var url = "http://localhost:8000/usertaskfetch";
    var header = {};
    var request = {"id": id };
    console.log("id");
    console.log("req" + JSON.stringify(request));

    axios
      .post(url, request, header)
       
      .then((res) => {
        console.log(res.data);
        var len = res.data.length;
        console.log("id");
        temp = res.data;
        console.log(temp);
        console.log("temp" + JSON.stringify(temp));
        setTask(res.data);
        console.log("task" + JSON.stringify(task));
      })
      .catch();
  }

  function project() {
    navigate("/project");
  }
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrow">
          <div className="usericon"> </div>
          <label>User</label>
        </div>
        <div className="secondrow">
          {/* Side navigation menu */}

          <div className="firstcolumn">
            <nav>
              <li>Board</li>
              <li onClick={project}>Projects</li>
              <li>Epics</li>
              <li>Tasks</li>
              <li>Sprints</li>
              <li>Users</li>
            </nav>
          </div>

          {/* Main outline */}
          <div className="secondcolumn">
            <div className="slider">
              <div className="usernamerow">
                {array.map((item, index) => {
                  return <>{<Singleuser items={item} getUid={tasklist} />}</>;
                })}
              </div>
            </div>
            {/* Task status name */}
            <div className="statusnamerow">
              <label>TO DO</label>
              <label>InProgress</label>
              <label>Review</label>
              <label>Complete</label>
            </div>

            <div className="tasks"></div>
            <div className="taskbar1">
              {task.map((taskitem, taskindex) => {
                if (taskitem.txtStatus == "To Do")
                  return (
                    <>
                      <p>{taskitem.txtTitle}</p>
                    </>
                  );
              })}
            </div>
            <div className="taskbar2">
              {task.map((taskitem, taskindex) => {
                if (taskitem.txtStatus == "Review")
                  return (
                    <>
                      <p>{taskitem.txtTitle}</p>
                    </>
                  );
              })}
            </div>
            <div className="taskbar3">
              {task.map((taskitem, taskindex) => {
                if (taskitem.txtStatus == "Inprogress")
                  return (
                    <>
                      <p>{taskitem.txtTitle}</p>
                    </>
                  );
              })}
            </div>
            <div className="taskbar4">
              {task.map((taskitem, taskindex) => {
                if (taskitem.txtStatus == "Completed")
                  return (
                    <>
                      <p>{taskitem.txtTitle}</p>
                    </>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dash;
