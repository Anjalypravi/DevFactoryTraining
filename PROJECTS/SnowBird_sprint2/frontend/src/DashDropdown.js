import { useState } from "react";
import "./styles/Style.css";

function DashDropdown() {
  const [taskbar1, setTaskbar1] = useState({
    data: ["user1", "user2"],
    count: 2
  });

  const [taskbar2,setTaskbar2] =useState({data:["user3","user4"],count:2});
  const allowDrop = (e) => {
    e.preventDefault();
  };
  const handleDrop =(e)=>{
     
      e.preventDefault();
      var target=e.target.className;
      var startedDiv=dragElement.startedDiv;
      if(
target!=startedDiv &&(e.target.className=="firstDiv"|| e.target.className=="secondDiv")
      ){
       if(startdDiv=="firstDiv")   {
        delete taskbar1.data[dragElement.index];
       }else if(startedDiv=="secondDiv"){
           delete taskbar2.data[dragElement.index];
       }

       }
       if (target=="firstDiv"){
           var temp=taskbar1.data;
           temp.push(dragElement.item);
           setTaskbar1({data:temp,count:temp.length});
               }else if(target=="secondDiv"){
                   var temp=taskbar2.data;
                   temp.push(dragElement.item);
                   setTaskbar2({data:temp,count:temp.length});
               }
      }
  }
  const handleDrag = (e, index, startedDiv, item) => {
    
    setDragElement({ index: index, startedDiv: startedDiv, item: item });

    return(
        <div className="fullpage">
            <div className="firstdiv"
            onDragOver={(e) => allowDrop(e)}
            onDrop={(e) => handleDrop(e)}
            >
               {taskbar1.data.map((item, index) => {
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
            
        </div>
    )
};

export default DashDropdown;
