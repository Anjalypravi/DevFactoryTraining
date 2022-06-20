import { useEffect, useState } from "react"
import Menu from "./Menu";
function Test1(){
    const[id,setId]=useState("");
    const[status,setStatus]=useState("");
    useEffect(()=>{
        
    })
    function disablefirst(){
       var id=3;
        setId(id);
        setStatus("login")
       
    }
    function disablesecond(){
        setId("5");
        console.log(id)

    }
    return<>
     <div className="outer">
        <div className="secondrow">
          {/* Side navigation menu */}
          {<Menu />}
          {/* Main outline */}
          <div className="prowone">
            <label>Attendance</label>
          </div>

          {/* Button for LOGIN and LOGOUT */}
          <div className="log_button">
            <button id="login" onClick={disablefirst}>
              LOGIN
            </button>
            <button id="logout" onClick={disablesecond}>
              LOGOUT
            </button>
          </div>
        </div>{" "}
      </div>
    </>
 
}
export default Test1