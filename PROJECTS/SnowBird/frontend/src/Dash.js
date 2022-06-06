import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Singleuser from "./Singleuser";
import "./styles/SnowBirdStyle.css";
function Dash() {
  var navigate = useNavigate();
  const [array, setArray] = useState([]);
  const [task, setTask] = useState([]);
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);
  const [fourthArray, setFourthArray] = useState("hi");
  var temp;
  useEffect(() => {
    var url = "http://localhost:8000/userfetch";
    var request = {};
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        setArray(res.data);
        console.log("array" + JSON.stringify(array));
      })
      .catch();
  }, []);

  function tasklist(id) {
    console.log("hello");
    var url = "http://localhost:8000/usertaskfetch";
    var request = { id: id };
    //console.log("anj"+request)
    var header = {};
    console.log(id);
    console.log("a" + JSON.stringify(request));

    axios
      .post(url, request, header)

      .then((res) => {
        console.log("res" + JSON.stringify(res.data));

        var array1 = res.data;
        console.log("array=>" + JSON.stringify(array1));
        for (const element of array1) {
          console.log("elemnt==>" + JSON.stringify(element));
          if (element.txtStatus == "To Do")
            setFirstArray([...firstArray, element]);
            
          else if (element.txtStatus == "InProgress")
            setSecondArray([...secondArray, element]);
          else if (element.txtStatus == "Review")
            setThirdArray([...thirdArray, element]);
          else if (element.txtStatus == "Complete")
            setFourthArray([...thirdArray, element]);
          break;
          console.log("fi"+JSON.stringify(firstArray));
          console.log(JSON.stringify(firstArray[" "]));
        }
      })

      .catch();
    //

    console.log(firstArray);

    //console.log(temp);
    //console.log("anj" + JSON.stringify(temp));
    // console.log(temp[0].txtTitle);

    //console.log(temp[0].txtTitle);

    console.log(secondArray);
    console.log(thirdArray);
    console.log(fourthArray);
    //   // const [firstArray, setFirstArray] = useState({
    //   //   data: [temp[0].txtTitle],
    //   //   count: 1,
    //   });
    //setFirstArray(firstArray =>[...firstArray,temp[0].txtTitle]);
    //firstArray.push.(temp[0].txtTitle);
    //console.log(firstArray);
  }
  function project() {
    navigate("/project");
  }
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
{firstArray}
        <div className="firstrow">
          <div className="usericon"> </div>
          <label>User</label>
        </div>
        {/* //{JSON.stringify(fourthArray)} */}
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
