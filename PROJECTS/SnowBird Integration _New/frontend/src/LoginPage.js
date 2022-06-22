import { useState } from "react";
import axios from "axios";
import "./style/styles.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [Username, setusername] = useState("");
  const [Password, setpassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const [vsble,setVisble]=useState(false)
  const navigate = useNavigate();

  function handleclick(e) { 
    e.preventDefault();
    var url = "https://2vlntjkuk1.execute-api.us-west-2.amazonaws.com/uservalidation";
    var req ='{"txtUserName": "'+Username+'", "txtPassword": "'+Password+'"}'
    var header = {};

    setVisble(true)
    setErrorMessage("")
    axios
      .post(url, req, header)
      .then((res) => {
        setVisble(false)
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
      .catch(()=>{
        setVisble(false)
        setErrorMessage("Something went wrong!");
      });
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
        <div style={{display: vsble?"":"none" }} class="lds-ring"><div></div><div></div><div></div><div></div></div>
          <button style={{display: vsble?"none":"" }} onClick={(e)=>handleclick(e)}>Login</button>
        </div>{" "}
        <p className="errormssg">{errormessage}</p>
      </div>
    </div>
  );
}
export default LoginPage;
