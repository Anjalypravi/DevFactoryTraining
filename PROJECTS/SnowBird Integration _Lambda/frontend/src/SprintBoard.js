import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import SprintBox from "./SprintBox";
function SprintBoard(){
    const [sprintlist,setSprintList]=useState([]);
    const[state,setState]=useState("");
    useEffect(()=>{
        
        var req={};
        var header={};
        var url="http://localhost:8000/sprintfetch";

        axios.post(url,req,header).then((res)=>{
            console.log(JSON.stringify(res.data));
            setSprintList(res.data);
        }).catch();
    },[])
    const checkChange=()=>{
        setState("checked");

    }
    return<>
    <div className="outer">
        <div className="secondrow">
          {/* Side navigation menu */}
          {<Menu />}
          {/* Main outline */}
          <div className="secondcolumn">
          <div className="toggle"> <label>Show Active Only</label>
             </div>
          <div className="togglerow">
         
          <label class="switch">
         
                    <input type="checkbox" onClick={(e)=>checkChange(e)} value={state} />
                    <span class="slider round"></span>
                </label>
              </div>
                 
            
     
        <div className="sprint_box">
        {sprintlist.map((item,index)=>{
            return<>
            {item.refSprintid==1}
             {<SprintBox index={item.refSprintid}/>}
            </>
            
        })}
        </div>
        <div className="task_row">
            <h3 style={{color:"gray"}}>Tasks</h3>
            <table>
            <thead>
            <th style={{width:15}}>#id</th>
            <th >Task</th>
            <th>Status</th>
            <th>Epic Name</th>
            <th>Project Name</th>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Task1</td>
                <td>To-do</td>
                <td>Epic1</td>
                <td>Event Management</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Task2</td>
                    <td>To-do</td>
                    <td>Epic2</td>
                    <td>Project Management</td>
                </tr>
            </tbody>
            </table>
            <div className="pbutton">
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                        </div>
        </div>
          
        </div>
          </div>
          </div>

    </>
}
export default SprintBoard;

