import "./style/styles.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Menu() {
  var navigate = useNavigate();
  const[select,setSelect]=useState(false);
 
  useEffect(()=>{
    localStorage.setItem("select1",true);
   console.log("Select from report",select)
  },[])
 
  function project() {
    navigate("/project");
  }
  function epic() {
    navigate("/epic");
  }
  function board(){
      navigate("/");
  }
  function task()
  {
      navigate("/task");
  }
  function sprint()
  {
      navigate("/sprint")
  }
  function users()
  {
    navigate("/users")
}
function report(select2)
{ 
  
   
   navigate("/report");
   console.log("select2",select2)
   setSelect(true);
   
   //console.log("select in report",select);
   
  
}
function attendance()
{
  navigate("/attendance")
}
function sprintboard()
{
  navigate("/sprintboard")
}
function showlist(e)
{
  
  setSelect(true);
  e.preventDefault();
  console.log(select)
   console.log("stae"+select);
   
  console.log(select)
}
return(
    <>
    <div className="firstrow">
     
            <div className="usericon"> 
            <div className="loginuser">
            <label>User</label>
            </div>
          </div>
        
        </div>
      <div className="firstcolumn">
        <nav>
          <li onClick={board}>Board</li>
          <li onClick={project}>Projects</li>
          <li onClick={epic}>Epics</li>
          <li onClick={task}>Tasks</li>
          <li onClick={sprint}>Sprints</li>
          <li onClick={users}>Users</li>
          <li onClick={attendance}>Attendance</li>
          <li onClick={sprintboard}>Sprint Board</li>
          <li onClick={showlist} >Report</li>
             <ul className="dropdown">
              <li onClick={report} className={select?"show":"hide"} id="timesheet">TimeSheet</li>
              </ul>
         
         
        </nav>
      </div>
    </>
  );
}
export default Menu;
