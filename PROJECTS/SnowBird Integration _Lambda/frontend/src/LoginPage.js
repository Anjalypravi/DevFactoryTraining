import { useState } from "react";
import axios from "axios";
import "./style/styles.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [Username, setusername] = useState("");
  const [Password, setpassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleclick(e) {
    console.log("hi");
    //e.preventDefault();
    var url = "http://localhost:8000/uservalidation";
    var req = { txtUserName: Username, txtPassword: Password };
    var header = {};

    axios
      .post(url, req, header)
      .then((res) => {
        console.log("hiii");
        console.log(res);
        console.log(res.data);
        console.log(res.data[0].VAL);
        var result = res.data[0].VAL;

        if (result == 0) {
          setErrorMessage("Error in Username Or Password");
          console.log("req" + result);
        } else {
          //  // var result=res.data;

          setErrorMessage("Success");
          console.log("req" + result);

          //   //ReactSession.set("token", res.data.token);
          //  //ReactSession.set("username", Username);
          //   //ReactSession.set("password", Password);
          //  //ReactSession.set("userid", result[0].id);
          navigate("/Dash");
        }
      })
      .catch();
  }
  function newclick(e) {
    e.preventDefault();
    navigate("/SignUp");
  }

  return (
    <div className="login_container">
      <div className="login_outerdiv">
        <h2>Login</h2>
        <div className="login_element">
          <label>Username</label>
          <input
            onChange={(e) => {
              setusername(e.target.value);
            }}
            type="text"
          />
        </div>
        <div className="login_element">
          <label>Password</label>
          <input
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
          />
        </div>
        <div className="login_element_button">
          <button onClick={handleclick}>Login</button>
        </div>{" "}
        <p>{errormessage}</p>
      </div>
    </div>
  );
}
export default LoginPage;