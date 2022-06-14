import { useState } from "react";
import "./styles/SnowBirdStyle.css";


function DragAndDrop(){
  const [array1,setArray1]=useState([{"txtTitle":"Task1"}]);
  const[array2,setArray2]=useState([{"txtTitle":"Task2"}]);
  const [dragElement, setDragElement] = useState({});
  const allowDrop = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    console.log(e);
    e.preventDefault();
    var target = e.target.className;
    var startedDiv = dragElement.startedDiv;
    if (
      target != startedDiv &&
      (e.target.className == "taskbar1" ||
        e.target.className == "taskbar2" ||
        e.target.className == "taskbar3" ||
        e.target.className == "taskbar4")
    );
    {
      if (startedDiv == "taskbar1") {
        delete array1.data[dragElement.index];
      } 
      if (target == "taskbar1") {
        var temp = array1.data;
        temp.push(dragElement.item);
        setArray1({ data: temp, count: temp.length });
      } else if (target == "taskbar2") {
        var temp = array2.data;
        temp.push(dragElement.item);
        setArray2({ data: temp, count: temp.length });
      }
      const handleDrag = (e, index, startedDiv, item) => {
        // console.log(startedDiv);
        // console.log(index);
        setDragElement({ index: index, startedDiv: startedDiv, item: item });
      };
    
  };

return(
  <div>
    
    <div className="statusnamerow">
  <label>TO DO</label>
  <label>InProgress</label>
  <label>Review</label>
  <label>Complete</label>
</div>
<div className="tasks"></div>
          <div className="taskbar1">
          {array1[0].txtTitle}
          </div>
          <div className="taskbar2">
          {array2[0].txtTitle}
          </div>
          <div className="taskbar3"></div>
          <div className="taskbar4"></div>
</div>
)}
}
export  default DragAndDrop;