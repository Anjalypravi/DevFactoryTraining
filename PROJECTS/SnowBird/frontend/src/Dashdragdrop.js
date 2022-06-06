import { useState } from "react";
import "./styles/SnowBirdStyle.css";

function DragAndDrop() {
  const [firstArray, setFirstArray] = useState({
    data: ["Task1"],
    count: 1,
  });
  const [secondArray, setSecondArray] = useState({});
  const [thirdArray, setThirdArray] = useState({});
  const [fourthArray, setFourthArray] = useState({});
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
    ) {
      if (startedDiv == "taskbar1") {
        delete firstArray.data[dragElement.index];
      } else if (startedDiv == "taskbar2") {
        delete secondArray.data[dragElement.index];
      } else if (startedDiv == "taskbar3") {
        delete thirdArray.data[dragElement.index];
      } else if (startedDiv == "taskbar4") {
        delete fourthArray.data[dragElement.index];
      }
      if (target == "taskbar1") {
        var temp = firstArray.data;
        temp.push(dragElement.item);
        setFirstArray({ data: temp, count: temp.length });
      } else if (target == "taskbar2") {
        var temp = secondArray.data;
        temp.push(dragElement.item);
        setSecondArray({ data: temp, count: temp.length });
      } else if (target == "taskbar3") {
        var temp = thirdArray.data;
        temp.push(dragElement.item);
        setThirdArray({ data: temp, count: temp.length });
      }
      if (target == "taskbar4") {
        var temp = fourthArray.data;
        temp.push(dragElement.item);
        setFourthArray({ data: temp, count: temp.length });
      }
    }
  };
  const handleDrag = (e, index, startedDiv, item) => {
    // console.log(startedDiv);
    // console.log(index);
    setDragElement({ index: index, startedDiv: startedDiv, item: item });
  };

  return (
    <div className="drageAndDrop">
      <div
        className="taskbar1"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {firstArray.data.map((item, index) => {
          return (
            <p
              draggable="true"
              onDragStart={(e) => handleDrag(e, index, "taskbar1", item)}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="taskbar2"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {secondArray.data.map((item, index) => {
          return (
            <p
              draggable="true"
              onDragStart={(e) => handleDrag(e, index, "taskbar2", item)}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="taskbar3"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {thirdArray.data.map((item, index) => {
          return (
            <p
              draggable="true"
              onDragStart={(e) => handleDrag(e, index, "taskbar3", item)}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="taskbar4"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {fourthArray.data.map((item, index) => {
          return (
            <p
              draggable="true"
              onDragStart={(e) => handleDrag(e, index, "taskbar4", item)}
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default DragAndDrop;
