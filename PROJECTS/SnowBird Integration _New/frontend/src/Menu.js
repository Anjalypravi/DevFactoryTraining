import "./style/styles.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaAtlassian,
  FaBtc,
  FaCodepen,
  FaFirefoxBrowser,
  FaFacebookMessenger,
  FaEdge,
  FaFortAwesomeAlt,
  FaHackerNewsSquare,
  FaInstagramSquare,
  FaPiedPiperSquare,
  FaUserCircle
} from "react-icons/fa";
function Menu() {
  var navigate = useNavigate();
  const [select, setSelect] = useState(false);

  useEffect(() => {
    localStorage.setItem("select1", true);
    console.log("Select from report", select);
  }, []);

  function project() {
    navigate("/project");
  }
  function epic() {
    navigate("/epic");
  }
  function board() {
    navigate("/dash");
  }
  function task() {
    navigate("/task");
  }
  function sprint() {
    navigate("/sprint");
  }
  function users() {
    navigate("/users");
  }
  function report(select2) {
    navigate("/report");
    console.log("select2", select2);
    setSelect(true);

    //console.log("select in report",select);
  }
  function attendance() {
    navigate("/attendance");
  }
  function sprintboard() {
    navigate("/sprintboard");
  }
  function showlist(e) {
    setSelect(true);
    e.preventDefault();
    console.log(select);
    console.log("stae" + select);

    console.log(select);
  }
  return (
    <>
      <div className="firstrow">
        <div className="logodiv" onClick={(e)=>navigate("/dash")}>
          <FaPiedPiperSquare /><label>Snow bird</label>
        </div>
        <div className="usericon">
          <FaUserCircle className="usericon_icon" />
          <label></label>
          <div className="popup">
            <label>Logout</label>
          </div>
        </div>
      </div>
      <div className="firstcolumn">
        <nav>
          <li onClick={board}>
            <FaAtlassian  className="menu_icon"/>
            Board
          </li>
          <li onClick={project}>
            <FaBtc  className="menu_icon"/>
            Projects
          </li>
          <li onClick={epic}>
            <FaCodepen  className="menu_icon"/>
            Epics
          </li>
          <li onClick={task}>
            <FaFirefoxBrowser  className="menu_icon"/>
            Tasks
          </li>
          <li onClick={sprint}>
            <FaFacebookMessenger  className="menu_icon"/>
            Sprints
          </li>
          <li onClick={users}>
            <FaEdge  className="menu_icon"/>
            Users
          </li>
          <li onClick={attendance}>
            <FaFortAwesomeAlt  className="menu_icon"/>
            Attendance
          </li>
          <li onClick={sprintboard}>
            <FaHackerNewsSquare  className="menu_icon"/>
            Sprint Board
          </li>
          <li onClick={showlist}>
            <FaInstagramSquare className="menu_icon"/>
            Report
          </li>
          <ul className="dropdown">
            <li
              onClick={report}
              className={select ? "show" : "hide"}
              id="timesheet"
            >
              TimeSheet
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Menu;
