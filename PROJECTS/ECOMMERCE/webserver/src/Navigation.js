import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Productlist from "./Productlist";
import Addproduct from "./Addproduct";
import Orderlist from "./Orderlist";
import Addorder from "./Addorder";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Productlist" element={<Productlist />}></Route>
          <Route path="/Addproduct" element={<Addproduct />}></Route>
          <Route path="/Orderlist" element={<Orderlist />}></Route>
          <Route path="/Addorder" element={<Addorder />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Navigation;
