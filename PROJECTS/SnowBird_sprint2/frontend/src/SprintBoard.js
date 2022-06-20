import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import SprintBox from "./SprintBox";
import "./styles/Style.css";
function SprintBoard(){
    const [sprintlist,setSprintList]=useState([]);
    const[state,setState]=useState("");
    const [taskarray, settaskarray] = useState([])
    useEffect(()=>{
        
        var req={};
        var header={};
        var url="http://localhost:8000/sprintboardfetch";

        axios.post(url,req,header).then((res)=>{
            console.log(JSON.stringify(res.data));
            setSprintList(res.data);
        }).catch();

        
            var url = 'http://localhost:8000/fetchtask'
            var request = {}
            var header = {}
        
            axios
              .post(url, request, header)
              .then((res) => {
                console.log(res.data)
                settaskarray(res.data)
              })
              .catch((err) => {
                console.log(err)
              })
          
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
            <table className="tablerow">
              <tr className="TblFirstrow">
                <th>#id</th>
                <th>Task</th>
                <th>Status</th>
                <th>Epic</th>
                <th>ProjectName</th>
              </tr>
              {taskarray.map((item, index) => {
                return (
                  <>
                    <tr >
                      <td className="tbdata">{item.id}</td>
                      <td>{item.txtTitle}</td>
                      <td>{item.txtStatus}</td>
                      <td>{item.epictitle}</td>
                      <td>{item.txtName}</td>
                    </tr>
                  </>
                )
              })}
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