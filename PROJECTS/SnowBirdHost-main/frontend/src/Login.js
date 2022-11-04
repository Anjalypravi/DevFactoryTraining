import React from "react";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import "./style.css";
import img1 from "./images/left.png";
import img2 from "./images/left.png";
//import logo from "./images/logo_snow.png";
import dlogo from "./images/dlogo.png";
import logo from "./images/snowlogo.png";
import left from './images/left.png'
import { FaPiedPiperSquare } from 'react-icons/fa'
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc'
export default function Login() {
  const [Username, setusername] = useState('')
  const [Password, setpassword] = useState('')
  const [errormessage, setErrorMessage] = useState('')
  const [vsble, setVisble] = useState(false)
  const navigate = useNavigate()
  const [id,setId]=useState("");
  // const [refUserRole,setRefUserRole]=useState("");
  var uid;
  function handleclick(e) {
  e.preventDefault()
    var url =
      'https://2vlntjkuk1.execute-api.us-west-2.amazonaws.com/uservalidation'
    var req =
      '{"txtUserName": "' + Username + '", "txtPassword": "' + Password + '"}'
    var header = {}
    
    var n = Username
    console.log("n",n)
    localStorage.setItem('username', Username)
   
//     localStorage.setItem("id");
//     // localStorage.setItem("refUserRole")
// console.log("id",id);
// // console.log("refUserRole",refUserRoles)
    
setVisble(true)
setErrorMessage('')
axios.post(url, req, header).then((res) => {
  setVisble(false)
  console.log('hiii')
  console.log(res)
  console.log("rers"+JSON.stringify(res.data))
      //  var uid=res.data[0].id
      //  setId(uid)
      //  console.log("uid",uid)
       
      var len=res.data.length;
      console.log("l",len)
       if (Username && Password != null) 
       {
         if(len!=0)
         { 
           var uid=res.data[0].id
           setId(uid)
           console.log("uid",uid)
           if(res.data[0].refUserRole==1)
          {
           navigate("/summary");
          }
          else if(res.data[0].refUserRole==2)
          {
           navigate("/board")
          }
          else if(res.data[0].refUserRole==3)
          {
            navigate("/user")
          }     
         }
         else{
           setErrorMessage("Error in Username Or Password")
         }
       }
       else
       {
         setErrorMessage("Username or password cannot be empty")
       }      // If username or password are empty
        // return res.status(501).json({
        // status: 501,
        // setErrorMessage('Enter username and password')
      // } else {
        // if (result === undefined) {
          // setErrorMessage('Enter username and password')
          // console.log("req" + result);
        // } else {
          //  // var result=res.data;

          // setErrorMessage('Success')
          // console.log("req" + result);

          //   //ReactSession.set("token", res.data.token);
          //  //ReactSession.set("username", Username);
          //   //ReactSession.set("password", Password);
          //  //ReactSession.set("userid", result[0].id);
          // navigate('/Dash')
        // }
      
      // .catch(()=>{
      // setVisble(false)
      // setErrorMessage("Something went wrong!");
    })
  }
  
  return (
    <>
      <div className="outer">
        <div className="outer_col1">
          <div>
            <img src={img1} />
          </div>
        </div>
        <div className="outer_col2">
          <div className="outer_col2_row1">
            <img src={logo} className="outer_col2_row1_img" />
            <input onChange={(e) => {
                setusername(e.target.value)}}
              type={"text"}
              placeholder="Enter Email"
              className="outer_col2_row1_input"
            />
            <input  onChange={(e) => {
                setpassword(e.target.value)
              }}
              type={"password"} placeholder="Enter password" />
            <button onClick={handleclick} >Continue</button>
            <p style={{color:"red"}}>{errormessage}</p>
          </div>
          <label className="outer_col2_row2">
            Privacy Policy . User Notice
          </label>
          <img className="outer_col2_row3" src={dlogo} />
          <label className="outer_col2_row4">One account for Snow bird</label>
        </div>
        <div className="outer_col3">
         <div><img src={img2} /></div> 
        </div>
      </div>
    </>
  );
}
