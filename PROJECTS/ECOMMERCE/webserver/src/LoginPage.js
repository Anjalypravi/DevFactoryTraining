import "./style.css";
import { useNavigate } from "react-router-dom";
function LoginPage() {
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
              <input type="text" placeholder="Username" />
              <div>
                <p></p>
              </div>
              <label>
                <b>Password</b>
              </label>
              <input type="text" placeholder="Password" />
            </div>
            <div>
              <p></p>
            </div>
            {
              <div><button>Login</button>
                <p
                  onClick={(e)=> {
                    newclick(e);
                  } }
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
