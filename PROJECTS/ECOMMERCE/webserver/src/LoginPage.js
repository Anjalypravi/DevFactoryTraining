import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        if (res.data.length > 0) {
          setErrorMessage("Success");
          navigate("/dashboard");
        } else {
          setErrorMessage("Error in Username Or Password");
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
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
            <div>
              <p></p>
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
