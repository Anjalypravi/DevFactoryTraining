import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Singleuser from "./Singleuser";
import SingleUser1 from "./SingleUser1";
import "./styles/SnowBirdStyle.css";

function DashBoard() {
  const [array, setArray] = useState([]);
  const [task, setTask] = useState([]);
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);
  const [fourthArray, setFourthArray] = useState([]);
  const [dragElement, setDragElement] = useState({});
  useEffect(() => {
    var url = "http://localhost:8000/userfetch";
    var req = {};
    var header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data);
        setArray(res.data);
      })

      // .then((res)=>{setArray(res.data)
      // console.log(res)})

      .catch();
  }, []);

  function setTaskClick(e, id) {
    e.preventDefault();
    alert("hi" + id);
    var url = "http://localhost:8000/usertaskfetch";
    var request = { id: id };
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        setTask(res.data);
        var array1 = task;
   console.log("arr" + JSON.stringify(array1));
  for (const element of array1) {
   console.log("elemnt==>" + JSON.stringify(element));
    if (element.txtStatus == "To Do") {
      setFirstArray([...firstArray, element]);
      console.log("here1" + JSON.stringify(firstArray));
    }
    else if (element.txtStatus == "InProgress"){
            setSecondArray([...secondArray, element]);
            console.log("here2" + JSON.stringify(secondArray));}
            else if (element.txtStatus == "Review")
           { setThirdArray([...thirdArray, element]);
            console.log("here3" + JSON.stringify(thirdArray));}
          else if (element.txtStatus == "Complete")
           { setFourthArray([...fourthArray, element])
            console.log("here4" + JSON.stringify(fourthArray));}
            else{console.log("no task")}
  }
      })

      .catch();
  }
 
  const allowDrop = (e) => {
    e.preventDefault();
  };
  const handleDrop =(e) =>{
    console.log(e);
    var target=e.target.className;
    var startedDiv=dragElement.startedDiv;
    if((target!=startedDiv) && (e.target.className=="taskbar1"||
    e.target.className=="taskbar2"||
    e.target.className=="taskbar3"||
    e.target.className=="taskbar4"))
    {
      if(startedDiv=="taskbar1")
     { delete firstArray.data[dragElement.index];
     }else if (startedDiv == "taskbar2") {
      delete secondArray.data[dragElement.index];
    } else if (startedDiv == "taskbar3") {
      delete thirdArray.data[dragElement.index];
    } else if (startedDiv == "taskbar4") {
      delete fourthArray.data[dragElement.index];
    }
    if (target == "taskbar1") {
      var temp = firstArray.data;
      temp.push(dragElement.item);
      setFirstArray({ data: temp });
    }
    else if (target == "taskbar2") {
      var temp = secondArray.data;
      temp.push(dragElement.item);
      setSecondArray({ data: temp });
    }
    else if (target == "taskbar3") {
      var temp = thirdArray.data;
      temp.push(dragElement.item);
      setThirdArray({ data: temp});
    }
    if (target == "taskbar4") {
      var temp = fourthArray.data;
      temp.push(dragElement.item);
      setFourthArray({ data: temp});
    }
    }
    
  }
  const handleDrag =(e,index,startedDiv,item) => {setDragElement({index:index,startedDiv:startedDiv,item:item})};
  return (
    <div className="outer">
      {/* whole content in dashboard */}
      <div className="firstrow">
        <div className="usericon"> </div>
        <label>User</label>
      </div>
      <div lassName="secondrow">
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
        <div className="secondcolumn">
          <div className="slider">
            <div className="usernamerow">
              <div className="eachuser">
                {/* <div className="users"> */}
                <div className="new">
                  {array.map((item, index) => {
                    return (
                      <>
                        <SingleUser1 items={item} getid={setTaskClick} />
                      </>
                    );
                  })}
                  ;
                </div>
                <div className="Userlabel">
                  <>
                    <></>
                  </>
                  {/* <label>user1</label> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="statusnamerow">
            <label>TO DO</label>
            <label>InProgress</label>
            <label>Review</label>
            <label>Complete</label>
          </div>
          <div className="tasks"></div>
          <div className="taskbar1" 
          >
            {task.map((taskitem, taskindex) => {
              if (taskitem.txtStatus == "To Do")
                return (
                  <>
                    <p>{taskitem.txtTitle} 
                    onDragOver={(e)=>allowDrop(e)};
          onDrop{(e)=>handleDrop(e)};
          {firstArray.data.map((item,index)=>{return(
            <p
            draggable="true"
            onDragStart={(e)=>handleDrag(e,index,item)}>
              {item}
            </p>
          )})}</p>
                  </>
                );
            })}
            

          </div>
          <div className="taskbar2">
            {task.map((taskitem, taskindex) => {
              if (taskitem.txtStatus == "InProgress")
                return (
                  <>
                    <p>{taskitem.txtTitle}</p>
                  </>
                );
            })}
          </div>
          <div className="taskbar3">
            {task.map((taskitem, taskindex) => {
              if (taskitem.txtStatus == "Review")
                return (
                  <>
                    <p>{taskitem.txtTitle}</p>
                  </>
                );
            })}
          </div>
          <div className="taskbar4">
            {task.map((taskitem, taskindex) => {
              if (taskitem.txtStatus == "Complete")
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
  );
}
export default DashBoard;
