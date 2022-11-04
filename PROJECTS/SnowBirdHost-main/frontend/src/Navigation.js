import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardPage from "./BoardPage";
import EditUser from "./EditUser";
import Login from "./Login";
import Project from "./Project";
import ProjectNew from "./ProjectNew";
import ProjectSample from "./ProjectSmaple";
import SummaryPage from "./SummaryPage";
import User from "./User";




function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}></Route>
          <Route path="/summary" element={<SummaryPage/>}></Route>
          <Route path="/user" element={<User/>}></Route>
          <Route path="/edituser" element={<EditUser/>}></Route>
          <Route path="/project" element={<ProjectNew/>}></Route>
          <Route path="/board" element={<BoardPage/>}></Route>

 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Navigation;
