import {BrowserRouter,Routes,Route} from "react-router-dom"

import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Productlist from "./Productlist";


function Navigation(){
  return(
    <div>
      
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/Productlist" element={<Productlist />}></Route>
      
    </Routes>
  </BrowserRouter>
    </div>
  );
}
export default Navigation;