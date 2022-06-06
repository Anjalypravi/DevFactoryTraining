import {BrowserRouter,Routes,Route} from "react-router-dom";

import LoginPage from "./LoginPage";
import Epic from "./Epic";
import AddEpic from "./AddEpic";
import EditEpic from "./EditEpic.js";
import Draganddrop from "./Draganddrop.js"
import Dash from "./Dash.js"
import AddTask from "./AddTask.js";
import EditTask from "./EditTask.js";
import Trial from "./Trial.js"
import Dashdragdrop from "./Dashdragdrop.js"

function Navigation(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}></Route>
                <Route path="/Epic" element={<Epic/>}></Route>
                <Route path="/AddEpic" element={<AddEpic/>}></Route>
                <Route path="/EditEpic" element={<EditEpic/>}></Route>
                <Route path="/Draganddrop" element={<Draganddrop/>}></Route>
                <Route path="/Dash" element={<Dash/>}></Route>
                <Route path="/AddTask" element={<AddTask/>}></Route>
                <Route path="/EditTask" element={<EditTask/>}></Route>
                <Route path="/Trial" element={<Trial/>}></Route>
                <Route path="/Dashdragdrop" element={<Dashdragdrop/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}
export default Navigation;