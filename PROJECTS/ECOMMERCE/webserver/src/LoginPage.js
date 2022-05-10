import "./style.css"
import {useNavigate} from "react-router-dom"
function LoginPage(){
    const Navigate =useNavigate();
    function newclick(e){
        e.preventDefault();
        Navigate("/signup");
    }
    return(
      <div>
     <head>

<link rel="stylesheet" href="style.css" />
</head>

<body>

<div class="container">
    <div class="innerdiv">
        <div><label><h2>Login</h2></label></div>
                        
        <div class= "user"><label><b>Username</b></label>
            <input type="text" placeholder="Username"/>
        <div><p></p></div>
         <label><b>Password</b></label>
            <input type="text" placeholder="Password" />
        </div>

        <div><p></p></div>
        
        <div class="styleing"><button>Login</button><p>onclick ={(e)=>{newclick(e);}}classname="new">New user?<p></p></p></div>
       


        <div><p class ="link">New user?</p></div>

        <div><p></p></div>

    </div>
</div>




</body>
      </div>
    );
  }
  export default LoginPage;