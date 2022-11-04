import React, { useEffect, useState } from "react";
import downarrow from "./images/downarrow.png";
import logo from "./images/snowlogo.png";
import menu from "./images/menu.png";
import "./style.css";
import search from "./images/search.png";
import cross from "./images/cross.png";
import add from "./images/add.png";
import { BsThreeDots } from "react-icons/bs";
import Menu from "./Menu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import FullModal from './FullModal';
import Modal from './Modal'
import { FaRegUser, FaRegUserCircle, FaUserCircle } from "react-icons/fa";
export default function User() {
//   const [array, setArray] = useState([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 4]);
  var modal = document.getElementById("modal");
  var edit_modal=document.getElementById("edituser_modal")
  const [show,setShow]=useState(false)
  const [modalshow,setModalShow]=useState(false)
  const[user,setUser]=useState([])
  const [array,setArray]=useState([])
  const [editarray,setEditArray]=useState([])
  const [username,setUname]=useState("");
  const[password,setPassword]=useState("");
  const [type,setType]=useState("");
 const[errmsg,setErrorMsg]=useState("");
 const[msg,setMsg]=useState("");
 const navigate = useNavigate();
 const[uname,setUsrname]=useState("");
  const[pw,setPw]=useState("");
  const[role,setRole]=useState("");
  var id=localStorage.getItem("id");
  var nme=localStorage.getItem("name");
  const[uid,setId]=useState("");
  const[euser,setEditUname]=useState("");
  const[editpw,setEditPw]=useState("");
  const[editrole,setEditRole]=useState("");
  useEffect(()=>{
    var url=" https://9i5fv8xex0.execute-api.us-west-2.amazonaws.com/userfetch_userPage";
  var header={};
  var request={};
  console.log("request",request)
  axios.post(url,request,header).then((res)=>{
      console.log(res.data);
      setUser(res.data);
  }).catch();

  var url_usrrole=" https://wu75jb9222.execute-api.us-west-2.amazonaws.com/userrolefetch";
  var req={};
  var header={};
  axios.post(url_usrrole,req,header).then((res)=>{
    console.log(res.data);
    
      var len = res.data.length;
      if (len > 0) {
        setArray(res.data);
       
     
        //console.log(JSON.stringify(array));
         }
  }).catch();


//   var url_edit="https://8conoiw19k.execute-api.us-west-2.amazonaws.com/userupdatefetch_userPage";
//     var header={};
//     setId(id);
//     //setUname(nme);
//     var request='{"id":"'+id+'"}';
//     console.log("req",request);
//     axios.post(url_edit,request,header).then((res)=>{
//          console.log("res"+JSON.stringify(res.data));
//          setEditArray(res.data);
       
//           setEditUname(res.data[0].txtUserName);
         
//           setEditPw(res.data[0].txtPassword);
       
//           setEditRole(res.data[0].txtUserRole);

        //  setEditRole(res.data[0].refUserRole);

    // }).catch();

 
  },[])
  
  function insertuser(){
    var url="https://m8g5rvddt6.execute-api.us-west-2.amazonaws.com/insertuser_user";
   var request='{"username":"'+username+'","password":"'+password+'","type":"'+type+'"}';
   var header={};
   console.log(JSON.stringify(request));
  if(username|| password|| type != "")
  {
    axios.post(url,request,header).then((res)=>{
      if(res.data=="user exists")
    {
    setErrorMsg("Username already in use!! ")
    }
    else
    {
      setMsg("User added succesfully!!!")
      setErrorMsg("");
    }

    }).catch();
  }
  else{
  setErrorMsg("All fields are mandatory!!");
  }

}

function edituser(e,uid,uname)
  {
    e.preventDefault();
    console.log("id",uid);
    console.log("uname",uname)
    localStorage.setItem("id",uid)
    localStorage.setItem("name",uname)
    console.log("uid",uid)
    edit_modal.style.display = "block";
    var url_edit="https://8conoiw19k.execute-api.us-west-2.amazonaws.com/userupdatefetch_userPage";
    var header={};
    // setId(id);
    //setUname(nme);
    var request='{"id":"'+uid+'"}';
    console.log("request to display selected",request)
    axios.post(url_edit,request,header).then((res)=>{
         console.log("res"+JSON.stringify(res.data));
         setEditArray(res.data);
       
          setEditUname(res.data[0].txtUserName);
         
          setEditPw(res.data[0].txtPassword);
       
          setEditRole(res.data[0].txtUserRole);

         setEditRole(res.data[0].refUserRole);

    }).catch();

  }
  function cancel() {
    modal.style.display = "none";
  }
  function edit_cancel() {
    edit_modal.style.display = "none";
  }

function adduser() {
    modal.style.display = "block";
  }
  function updateuser()
  {
    var url="https://20t9ec368d.execute-api.us-west-2.amazonaws.com/userupdate_userPage";
    var header={};
    var request='{"username":"'+euser+'","password":"'+editpw+'","reftype":"'+editrole+'","id":"'+id+'","suname":"'+nme+'"}';
    console.log("req"+request);
    // axios.post(url,request,header).then((res)=>{
    //   if(res.data.code=="ER_DUP_ENTRY")
    //   {
    //     alert("Duplicate entry");
       
    //   }
    //   else 
    //   {
    //     alert("User updated !")
    //   }
    //   console.log("after update"+JSON.stringify(res.data));

    // }).catch();
    if(euser && editpw && editrole != "")
    {
      axios.post(url,request,header).then((res)=>{
        if(res.data=="user exists")
      {
      setErrorMsg("Username already in use!!")
      }
      else
      {
        setMsg("User updated succesfully!!!")
        setErrorMsg("");
        modal.style.display = "none"
      }
  
      }).catch();
    }
    else{
    setErrorMsg("All fields are mandatory!!");
    }

  }
  
  return (
    <> 
  
<div className="main">
        <Menu />
        
        <div className="main_contentbar">
          <button className="fab_button" onClick={adduser}>
            +
          </button>
          {/* <Modal modalshow={modalshow} setModalShow={setModalShow}/> */}
          {/* onClick={()=>{handleModalClick(setModalShow(true))}} */}
          <div className="main_contentbar_headerbar">
            <div className="main_contentbar_headerbar_left">
              <div>
                <img src={menu} />
              </div>
              <label>Users</label>
            </div>
            <div className="main_contentbar_headerbar_right">
              <div className="circle">
                <label>AB</label>
              </div>
            </div>
          </div>
          <div className="main_contentbar_search">
            <div className="main_contentbar_search_left">
              <img src={search} />
              <input placeholder="Search by order #, name or email..." />
            </div>
            <div className="main_contentbar_search_right">
              <button>
                Filters <img src={downarrow} />
              </button>
            </div>
          </div>
          <div className="main_contentbar_filters">
            <div className="main_contentbar_filters_inner">
              <button>
                Filters{" "}
                <img
                  className="main_contentbar_filters_inner_img"
                  src={cross}
                />
              </button>
            </div>
            <div className="main_contentbar_filters_inner">
              <button>
                <img
                  className="main_contentbar_filters_inner_add"
                  id="plus"
                  src={add}
                  
                />
              </button>
            </div>
          </div>
          <div className="main_contentbar_list">
            <table>
              <thead>
                <th></th>
                <th>#Id</th>
                {/* <th>Description</th> */}
                <th>Name</th>
                <th>Role</th>
                <th></th>
                {/* <th>Last Head</th> */}
              </thead>
              <tbody>
                {user.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <td>
                          {" "}
                          <input type={"checkbox"} />
                        </td>
                        <td>{item.id}</td>
                        <td>{item.txtUserName}</td>
                        <td>{item.txtUserRole}</td>
                        <td>
                          {/* <div className="popup"> */}
                          <div className="dropdown">
                          <BsThreeDots className="dropbtn"  />
                          <div className="dropdown-content">
                            <label onClick={(e)=>{edituser(e,item.id,item.txtUserName)}}>Edit</label>
                            <label style={{color:"gray"}}>Delete</label>
                            </div>
                            </div>
                          {/* </div> */}
                        </td>
                        {/* <td>
                            <BsThreeDots onClick={popup} />
                          </td> */}
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="modal_user" id="modal">
        <div className="modalContent">
          <div className="row1_adduserdiv">
            <label className="adduser_label">Add User</label>
            {/* <span id="close" className="close" onClick={closeprject}>&times;</span> */}
          </div>
          <div className="row2_user">
            <div className="row2_colm1_user">
                <FaRegUserCircle  className="icon_user"/>
                {/* <div className="userphoto"><label>Choose Photo</label></div> */}
            </div>
            <div className="row2_colmn2_user">
          <div className="username_div">
            <label>Username</label>
            <input
              type="text" onChange={(e)=>{setUname(e.target.value)} }  className={errmsg?"username_input_red":"username_input"}
              
            />
          </div>
          <div className="username_div">
            <label>Password</label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <div >
            <div className="username_div">
                
              <label>Userrole</label>
              <select  onChange={(e)=>{setType(e.target.value)}}>
                <option>--Select----</option>
              {array.map((item,index)=>{
                    return<>
                    <option value={item.id}>{item.txtUserRole}</option>
                    </>
                })}
              </select>
            </div>
            
          </div>
{/*           
          <div className="buttonuser_div">
            <div className="buttonsuser_cancel">
            <p className="errmsg">{errmsg}</p>
              <p className="msg"> {msg}</p>
              <button onClick={cancel}>Cancel</button>
              <button onClick={insertuser}>Save</button>
            </div>
          </div> */}

          <div className="button_div">
            {/* <div className="buttons_cancel"> */}
             <button onClick={cancel} className="cancelbutton">Cancel</button>
              <button onClick={insertuser}>Save</button>
              </div>
              <p className="errmsg">{errmsg}</p>
              <p className="msg"> {msg}</p>
            {/* </div> */}
         
          
          </div>
           </div>   {/*row2user */}
        </div>
      </div>
      

      {/*  Edit User */}

      <div className="modal_user" id="edituser_modal">
        <div className="modalContent">
          <div className="row1_adduserdiv">
            <label className="adduser_label">Edit User</label>
            {/* <span id="close" className="close" onClick={closeprject}>&times;</span> */}
          </div>
          <div className="row2_user">
            <div className="row2_colm1_user">
                <FaRegUserCircle  className="icon_user"/>
                <div className="userphoto"><label>Choose Photo</label></div>
            </div>
            <div className="row2_colmn2_user">
          <div className="username_div">
            <label>Username</label>
            <input
              type="text" value={euser} onChange={(e)=>{setEditUname(e.target.value)}}
              
            />
          </div>
          <div className="username_div">
            <label>Password</label>
            <input type="password" value={editpw} onChange={(e)=>{setEditPw(e.target.value)}}/>
          </div>
          <div >
            <div className="username_div">
                
              <label>Userrole</label>
              <select value={editrole}  onChange={(e)=>{setEditRole(e.target.value)}}>
                <option>--Select----</option>
              {array.map((item,index)=>{
                    return<>
                    <option value={item.id}>{item.txtUserRole}</option>
                    </>
                })}
              </select>
            </div>
            
          </div>
          
          {/* <div className="buttonuser_div">
            <div className="buttonsuser_cancel">
            <p className="errmsg">{errmsg}</p>
              <p className="msg"> {msg}</p>
              <button onClick={edit_cancel}>Cancel</button>
              <button onClick={updateuser}>Save</button>
            </div>
          </div> */}
          <div className="button_div">
            {/* <div className="buttons_cancel"> */}
             <button onClick={edit_cancel} className="cancelbutton">Cancel</button>
              <button onClick={updateuser}>Save</button>
              </div>
              <p className="errmsg">{errmsg}</p>
              <p className="msg"> {msg}</p>
          
          </div>
           </div>   {/*row2user */}
        </div>
      </div>
  



    </>
  );
}