import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dash from "./Dash";
import Report from "./Report";
import AddProject from "./AddProject";

import EditProject from "./EditProject";
import Epic from "./Epic";
import EditUser from "./EditUser";
import Project from "./Project";
import AddUser from "./AddUser";
import Users from "./Users";
import Menu from "./Menu";

import SprintBoard from "./SprintBoard";

import Attendance from "./Attendance";
import Task from "./Task";
import AddTask from "./AddTask";
import EditEpic from "./EditEpic";
import AddEpic from "./AddEpic";
import EditTask from "./EditTask";
import LoginPage from "./LoginPage";
import Sprint from "./Sprint";
// import Attendance1 from "./Attendance1";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dash" element={<Dash/>}>
            {" "}
          </Route>
          <Route path="/report" element={<Report />}>
            {" "}
          </Route>
          {/* <Route path="/attendance " element={<Attendance  />}>
            {" "}
          </Route> */}
          <Route path="/project" element={<Project />}>
            {" "}
          </Route>
          <Route path="/addproject" element={<AddProject />}>
            {" "}
          </Route>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/editproject" element={<EditProject />}></Route>
          <Route path="/epic" element={<Epic />}></Route>
          <Route path="/edituser" element={<EditUser />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
          <Route path="/editepic" element={<EditEpic />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          {/* <Route path="/attendance" element={<Attendance />}></Route> */}
          <Route path="/sprintboard" element={<SprintBoard />}></Route>
          <Route path="/attendance" element={<Attendance/>}></Route>
          <Route path="/task" element={<Task/>}></Route>
          <Route path="/addtask" element={<AddTask/>}></Route>
          <Route path="/addepic" element={<AddEpic/>}></Route>
          <Route path="/edittask" element={<EditTask/>}></Route>
          <Route path="/sprint" element={<Sprint/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Navigation;
