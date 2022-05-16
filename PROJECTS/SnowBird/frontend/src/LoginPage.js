import { useState } from "react";
import "./styles/SnowBirdStyle.css";
function LoginPage() {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
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
            <input type="text" placeholder={UserName}></input>{" "}
          </div>
        </div>
        <div className="Password">
          <label>
            <h4>Password</h4>
          </label>
          <input type="password" placeholder={Password}></input>
        </div>

        <div>
          <div className="Login">
            <button>Login</button>
          </div>
          <p>
            <div className="Newuser">
              <onclick>Newuser?</onclick>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
