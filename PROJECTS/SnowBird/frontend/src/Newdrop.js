import { useState } from "react";
import "./styles/Style.css";

function Newdrop() {
  const [firstArray, setFirstArray] = useState({
    data: ["user1", "user2"],
    count: 2,
  });
  const [secondArray, setSecondArray] = useState({
    data: ["user3", "user4", "user5"],
    count: 3,
  });
  const [thirdArray, setThirdArray] = useState({ data: ["user6","user7"], count: 2 });
  const [fourthArray, setfourthArray] = useState({ 
      data: ["user8", "user9", "user10"],
    count: 3,
  });
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
      target !== startedDiv &&
      (e.target.className === "firstDiv" ||
        e.target.className === "secondDiv" ||
        e.target.className === "thirdDiv"||
        e.target.className === "fourthDiv" )
    ) {
      if (startedDiv === "firstDiv") {
        delete firstArray.data[dragElement.index];
      } else if (startedDiv === "secondDiv") {
        delete secondArray.data[dragElement.index];
      } else if (startedDiv === "thirdDiv") {
        delete thirdArray.data[dragElement.index];
      }else if (startedDiv === "fourthDiv") {
        delete fourthArray.data[dragElement.index];
      if (target == "firstDiv") {
        var temp = firstArray.data;
        temp.push(dragElement.item);
        setFirstArray({ data: temp, count: temp.length });
      } else if (target === "secondDiv") {
        var temp = secondArray.data;
        temp.push(dragElement.item);
        setSecondArray({ data: temp, count: temp.length });
      }
      if (target == "thirdDiv") {
        var temp = thirdArray.data;
        temp.push(dragElement.item);
        setThirdArray({ data: temp, count: temp.length });
      }
      if (target == "fourthDiv") {
        var temp = fourthArray.data;
        temp.push(dragElement.item);
        setfourthArray({ data: temp, count: temp.length });
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
        className="firstDiv"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {firstArray.data.map((item, index) => {
          return (
            <p
              draggable="true"
              onDragStart={(e) => handleDrag(e, index, "firstDiv", item)}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="secondDiv"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {secondArray.data.map((item, index) => {
          return (
            <p
              draggable="true"
              onDragStart={(e) => handleDrag(e, index, "secondDiv", item)}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="thirdDiv"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {thirdArray.data.map((item, index) => {
          return (
            <p
              draggable="true"
              onDragStart={(e) => handleDrag(e, index, "thirdDiv", item)}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="fourthDiv"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {thirdArray.data.map((item, index) => {
          return (
            <p
              draggable="true"
              onDragStart={(e) => handleDrag(e, index, "fourthDiv", item)}
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
}
export default Newdrop;