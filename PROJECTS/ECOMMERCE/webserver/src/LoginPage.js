function LoginPage(){
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

        <div class="styleing"><button>Login</button></div>


    </div>
</div>




</body>
      </div>
    );
  }
  export default LoginPage;