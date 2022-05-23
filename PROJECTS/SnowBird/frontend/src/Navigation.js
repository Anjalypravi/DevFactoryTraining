import {BrowserRouter,Routes,Route} from "react-router-dom";

import LoginPage from "./LoginPage";
import Epic from "./Epic";
import AddEpic from "./AddEpic";
import EditEpic from "./EditEpic.js";
import Draganddrop from "./Draganddrop.js"
import Dash from "./Dash.js"
// import DashDropdown from "./DashDropdown.js"

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
                {/* <Route path="/DashDropdown" element={<DashDropdown/>}></Route> */}
            </Routes>
            </BrowserRouter>
        </div>
    );
}
export default Navigation;