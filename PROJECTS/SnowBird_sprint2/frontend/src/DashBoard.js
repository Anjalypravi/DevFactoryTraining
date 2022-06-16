import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Singleuser from "./Singleuser";
import SingleUser1 from "./SingleUser1";
import "./styles/SnowBirdStyle.css";

function DashBoard() {
  const [array, setArray] = useState([]);
  const [task, setTask] = useState([]);
  const [firstArray, setFirstArray] = useState([ ]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);
  const [fourthArray, setFourthArray] = useState([]);
  const [dragElement, setDragElement] = useState({});
  useEffect(() => {
    var url = "https://d0hjhl13sc.execute-api.us-west-2.amazonaws.com/default/userfetchfinal";
    var req = '{}';
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
    
     setFirstArray([ ]);
    setSecondArray([ ]);
    setThirdArray([ ]);
    setFourthArray([ ]);
    //alert("hi" + id);
    var url = "http://localhost:8000/usertaskfetch";
    var request = { id: id };
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        setTask(res.data);
        var array1 = res.data;

        console.log("arr" + JSON.stringify(array1));
        for (const element of array1) {
          console.log("elemnt==>" + JSON.stringify(element));
          if (element.txtStatus == "To Do") {
            var ab = [...firstArray];
            setFirstArray([ab, element]);
            // console.log("hh"+[JSON.stringify(...firstArray), element])
            console.log("here1" + ab);
          } else if (element.txtStatus == "InProgress") {
            var bc = [...secondArray];
            setSecondArray([bc, element]);
            console.log("here2" + bc);
          } else if (element.txtStatus == "Review") {
            var cd = [...thirdArray];
            setThirdArray([cd, element]);
            console.log("here3" + cd);
          } else if (element.txtStatus == "Complete") {
            var ef = [...fourthArray];
            setFourthArray([ef, element]);
            console.log("here4" + ef);
          } else {
            console.log("no task");
          }
        }
      })

      .catch();
  }

  const allowDrop = (e) => {
    e.preventDefault();
  };
  const handleDrop =(e) =>{
   // console.log(e);
   //console.log(dragElement.item);
    var target=e.target.className;
    var startedDiv=dragElement.startedDiv;
  
    if((target!=startedDiv) && (e.target.className=="taskbar1"||
    e.target.className=="taskbar2"||
    e.target.className=="taskbar3"||
    e.target.className=="taskbar4"))
    {
      if(startedDiv=="taskbar1")
     { delete firstArray[dragElement.index];
     }else if (startedDiv == "taskbar2") {
      delete secondArray[dragElement.index];
    } else if (startedDiv == "taskbar3") {
      delete thirdArray[dragElement.index];
    } else if (startedDiv == "taskbar4") {
      delete fourthArray[dragElement.index];
    }
    if (target == "taskbar1") {
      var temp = [...firstArray];
      console.log("dragelement==>"+JSON.stringify(dragElement))
      temp.push(dragElement.item);
      setFirstArray(temp);
    }
    else if (target == "taskbar2") {
      var temp = [...secondArray]
      console.log("dragelement==>"+JSON.stringify(dragElement))
      temp.push(dragElement.item); 
      setSecondArray(temp);
      
      
      
    }
    else if (target == "taskbar3") {
      var temp = [...thirdArray];
      console.log("dragelement==>"+JSON.stringify(dragElement))
      temp.push(dragElement.item);
      setThirdArray(temp);
    }
    if (target == "taskbar4") {
      var temp = [...fourthArray];
      console.log("dragelement==>"+JSON.stringify(dragElement))
      temp.push(dragElement.item);
      setFourthArray(temp);
    }
    }

  }
  const handleDrag = (e, index, startedDiv, item) => {
    console.log(startedDiv);
      console.log(index);
    setDragElement({ index: index, startedDiv: startedDiv, item:item });
   
  };

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
          onDragOver={(e) => allowDrop(e)}
          onDrop={(e) => handleDrop(e)}
          >
            {/* {JSON.stringify(firstArray)} */}
            {firstArray.map((item, index) => {
              return (
                <>
                  
                  <p
                    draggable="true"
                    onDragStart={(e)=>handleDrag(e,index,"taskbar1",item)}
                    >
                     <p>{item.txtTitle}</p>
                  </p>
                  
                </>
              );
            })}
          </div>
          <div className="taskbar2"
          onDragOver={(e) => allowDrop(e)}
          onDrop={(e) => handleDrop(e)}
          >
            {/* {JSON.stringify(secondArray)} */}
            {secondArray.map((item, index) => {
              return (
                <>
                  <p
                    draggable="true"
                    onDragStart={(e)=>handleDrag(e,index,"taskbar2",item)}
                    >
                     <p>{item.txtTitle}</p>
                  </p>
                </>
              );
            })}
          </div>
          <div className="taskbar3"
          onDragOver={(e) => allowDrop(e)}
          onDrop={(e) => handleDrop(e)}
          >
            {/* {JSON.stringify(thirdArray)} */}
            {thirdArray.map((item, index) => {
              return (
                <>
                  <p
                    draggable="true"
                    onDragStart={(e)=>handleDrag(e,index,"taskbar3",item)}
                    >
                     <p>{item.txtTitle}</p>
                  </p>
                </>
              );
            })}
          </div>
          <div className="taskbar4"
          onDragOver={(e) => allowDrop(e)}
          onDrop={(e) => handleDrop(e)}>
            {/* {JSON.stringify(fourthArray)} */}
            {fourthArray.map((item, index) => {
              return (
                <>
                  <p
                    draggable="true"
                    onDragStart={(e)=>handleDrag(e,index,"taskbar4",item)}
                    >
                     <p>{item.txtTitle}</p>
                  </p>
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
