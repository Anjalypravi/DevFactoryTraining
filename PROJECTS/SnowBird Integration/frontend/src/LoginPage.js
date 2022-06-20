import { useState } from "react";
import axios from "axios";
//import "./styles/SnowBirdStyle.css";
import { useNavigate } from "react-router-dom";
import "./style/styles.css";
function LoginPage() {
  const [Username, setusername] = useState("");
  const [Password, setpassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  var tempid = localStorage.setItem('userid')
  function handleclick(e) {
    console.log('hi');
    //e.preventDefault();
    var url = "http://localhost:8000/uservalidation";
    var req = { txtUserName:  Username,  txtPassword: Password };
    var header = {};
    
    axios
    .post(url, req, header)
    .then((res) => {
      console.log('hiii');
      console.log(res);
      console.log(res.data);
      console.log(res.data[0].VAL);
      var result= res.data[0].VAL;
      
      
      if (result==0) {
        setErrorMessage("Error in Username Or Password");
        console.log("req"+result);
       } else {
      //  // var result=res.data;

       setErrorMessage("Success");
       console.log("req"+result);

      //   //ReactSession.set("token", res.data.token);
      //  //ReactSession.set("username", Username);
      //   //ReactSession.set("password", Password);
      //  //ReactSession.set("userid", result[0].id);
        navigate("/dash");
      }
    })
    .catch();
}
  function newclick(e) {
    e.preventDefault();
    navigate("/SignUp");
  }

  return (
    <div className="Container">
      <div className="Outerdiv">
        <div>
          <label>
            <h2>Login</h2>
          </label>
        </div>
        <div className="Username">
          <label>
            <h4>UserName</h4>
          </label>
          <div>
          <input onChange={(e)=>{setusername(e.target.value)}} type="text" />
          </div>
        </div>
        <div className="Password">
          <label>
            <h4>Password</h4>
          </label>
          <input onChange={(e)=>{setpassword(e.target.value)}} type="password" />
        </div>

        <div>
          <div className="Login">
          <button onClick={handleclick}>Login</button>
          </div>
          <p>{errormessage}</p>
          <p
                  onClick={(e) => {
                    newclick(e);
                  }}
                  
                  className="Newuser"
                  >
                    New user?
                   </p>  
                  
        </div>
      </div>
    </div>
  );
}
export default LoginPage;