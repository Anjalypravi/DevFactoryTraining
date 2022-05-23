// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import './sstyle.css'

// function NewLogin() {
//     const [username, setUsername]=useState('');
//     const [password , setPassword]=useState(''); 
//     const navigate=useNavigate();

//     function handleClick(e){
//         e.preventDefault();
//         let reqst={"username":username, "password":password};
//         let url="http://localhost:8000/logincheck";
//         let header={ };
//         console.log("req=>"+JSON.stringify(reqst));
//         console.log("url=>"+url);
//         axios.post(
//             url,reqst,header
//         ).then(
//             (res)=>{
//                 console.log(res.data);
//             }
//         ).catch();
//     }
 
//     function linkClick(e){
//         e.preventDefault();
//         navigate('/signup')
//     }

//   return (
//     <div>
//       <h1>Login</h1>
//       <div>
//           <label>Username</label>
//           <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" />
//       </div>
//       <div>
//           <label>Password</label>
//           <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" />
//       </div>
//       <button onClick={(e)=>handleClick(e)}>Login</button>
//       <p onClick={(e)=>{linkClick(e)}} className="link">New User?</p >  
//     </div>
//   );
// }
// export default NewLogin;