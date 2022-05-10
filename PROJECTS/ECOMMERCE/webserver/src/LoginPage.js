
import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const[username,setusername]= useState("");
    const[password,setpassword]= useState("");
 const navigate = useNavigate();

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
              <input type="text" placeholder="Username" value={username} />
              <div>
                <p></p>
              </div>
              <label>
                <b>Password</b>
              </label>
              <input type="text" placeholder="Password" value={password} />
            </div>
            <div>
              <p></p>
            </div>
            {
              <div>
                <button>Login</button>
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
