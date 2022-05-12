import { useState } from "react";


import axios from "axios";
import { useNavigate } from "react-router-dom";
import {ReactSession} from"react-client-session";

function LoginPage() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleclick(e) {
    e.preventDefault();
    var url = "http://localhost:8000/uservalidation";
    var req = { username: username, password: password };
    var header = {};
    axios
    .post(url, req, header)
    .then((res) => {
      console.log(res.data);
      if (res.data.token=="") {
        setErrorMessage("Error in Username Or Password");
        
      } else {
        var result=res.data;

        setErrorMessage("Success");
console.log("success");
        ReactSession.set("token", res.data.token);
        ReactSession.set("username", username);
        ReactSession.set("password", password);
       // ReactSession.set("userid", result[0].id);
        navigate("/dashboard");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

  function newclick(e) {
    e.preventDefault();
    navigate("/SignUp");
  }

  return (
    <div>
      <head>
        <link rel="stylesheet" href="style.css" />
      </head>

      <body>
        <div class="container">
          <div class="innerdiv">
            <div>
              <label>
                <h2>Login</h2>
              </label>
            </div>
            <div class="user">
              <label>
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
              />
              <div>
                <p></p>
              </div>
              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <div>
              <p>{errormessage}</p>
            </div>
            {
              <div>
                <button onClick={handleclick}>Login</button>
                <p
                  onClick={(e) => {
                    newclick(e);
                  }}
                  className="link"
                >
                  New user?
                </p>
              </div>
            }

            <div>
              <p></p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}


export default LoginPage;
