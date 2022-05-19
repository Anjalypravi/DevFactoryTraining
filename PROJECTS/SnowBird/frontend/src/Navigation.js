import {BrowserRouter,Routes,Route} from "react-router-dom";

import LoginPage from "./LoginPage";
import Epic from "./Epic";
import AddEpic from "./AddEpic";
import EditEpic from "./EditEpic.js";

function Navigation(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}></Route>
                <Route path="/Epic" element={<Epic/>}></Route>
                <Route path="/AddEpic" element={<AddEpic/>}></Route>
                <Route path="/EditEpic" element={<EditEpic/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}
export default Navigation;