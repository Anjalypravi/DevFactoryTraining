
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Singleuser from "./Singleuser";
import "./styles/SnowBirdStyle.css";

function DashBoard() {
  const [array,SetArray]=useState([]);
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
              <div className="users">
                <div className="Userlabel">
                <>
                <>
              <label>user1</label>
            </>
            </>
                </div>
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
            <div className="taskbar1"></div>
            <div className="taskbar2"></div>
            <div className="taskbar3"></div>
            <div className="taskbar4"></div>
            </div>
      </div>
    </div>
  )
    
}
export default DashBoard;