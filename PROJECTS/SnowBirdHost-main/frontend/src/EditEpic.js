import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import { useNavigate } from "react-router-dom";
import './style.css'
// import { useEffect, useState } from 'react'
import close from './images/close.png'
import { BsThreeDots } from 'react-icons/bs'
import Modal from './Modal'
// import Task from './Task';
export default function EditEpic({ emodalshow, setemodalshow }) {
  const [name,settxtName]=useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // const[assignee,settxtUserName]=useState([]);
  const [array, setArray] = useState([])
  const [parray, setpArray] = useState([])
  const [status, setStatus] = useState([])
  const [taskarray, settaskarray] = useState([])
  const[user,settxtUserName]=useState('');
  const [eparray, setepArray] = useState([])
  const [show, setShow] = useState()
  const[refprid,setrefprid] =useState('')
  // const [emodalshow, setemodalshow] = useState(false)
  const [taskshow, settaskShow] = useState(false)
  
  // const [statarray, setstatarray] = useState([
  //   { Id: 1, Status: 'To Do' },
  //   { Id: 2, Status: 'In Progress' },
  //   { Id: 3, Status: 'Review' },
  //   { Id: 4, Status: 'Completed' },
  // ])
  
var Id='3';
var poid='3';
  useEffect(() => {
    //  var EpicId = localStorage.getItem('epicid')
    //  setid(EpicId)
    // console.log(Id)
    var url = "https://ssq2quluhh.execute-api.us-west-2.amazonaws.com/projectlist_projectpage";
  var request = '{"id":"'+ poid +'"}';
  var header = {};
 
    axios
      .post(url, request, header)
      .then((res) => {
        setpArray(res.data);
        settxtName(res.data[0].txtName)
        console.log(name);
      })
      .catch();

    var url="https://9i5fv8xex0.execute-api.us-west-2.amazonaws.com/userfetch_userPage"
    var header={};
    var request = {};
    axios
      .post(url, request, header)
      .then((res) => {
        setArray(res.data);
        
      //  console.log(res.data);
      })
      .catch()
    

      var url1 = "https://a0iqhep0rb.execute-api.us-west-2.amazonaws.com/Epicfetch";
      var request1 = '{"id":"'+Id+'"}';
      var header1 = {}
  
      axios
        .post(url1, request1, header1)
        .then((res) => {
          // console.log(Id)
        setepArray(res.data)
        setTitle(res.data[0].txtTitle)
        setDescription(res.data[0].txtDescription)
        // setrefprid(res.data[0].refProjectid)
        settxtUserName(res.data[0].txtUserName)
        
      })
        
        .catch((err) => {
          console.log(err)
        });
        var url2 = "https://0d7azoksze.execute-api.us-west-2.amazonaws.com/default/Taskfetch";
      
        var req2 = '{"refEpicid":"'+Id+'"}';
       console.log(Id)
        var header2 = {};
        axios
          .post(url2, req2, header2)
          .then((res) => {
            // console.log(req2)
            settaskarray(res.data)
            console.log(res.data)
            })
          .catch()
      },[])
        
  
   
      

  function handleClick() {
    console.log('hi')
    // var url = 'http://localhost:8000/updateEpic'
    var url = "https://7qpodl6mw1.execute-api.us-west-2.amazonaws.com/update-epic"
    var req='{"txtTitle":"'+ title +'","txtDescription":"'+description+'","refAssignee":"'+ user +'","refProjectid":"'+ refprid +'","id":"' + Id + '"}'
    // var req = {
    //   txtTitle: title,
    //   txtDesc: description,
    //   refProjectid:refprid,
    //   refAssignee: user}
  
    var header = {}
    axios
      .post(url, req, header)
      .then((res) => {
        // console.log(res.data)
        alert('Success')
      })
      .catch()
      alert('Error')
  }
  function ThisClick() {
    alert('cancelled!!')
  }
  function invisible(e) {
    setemodalshow(emodalshow ? false : true);
  }
  function visible(e) {
    settaskShow(taskshow ? false : true);
  }
 
  
    return (
    <>
    {/* <Task taskshow={taskshow} settaskShow={settaskShow}/> */}
      {/* <Modal modalshow={modalshow} setModalShow={setModalShow} />{' '} */}
      <div className={emodalshow ? 'fullmodal' : 'hidden'} id="emodal">
        <div className="fullmodal_modalContent_outer">
          <div className="closeleft">
            <div
              onClick={(e) => {
                setemodalshow(emodalshow ? false : true)
              }}
              className="closeleft_container"
            >
              <label>X</label>
            </div>
          </div>
          <div className="fullmodal_modalContent">
            <div className="Epic_Taskbutton1">
              <label className="addproject_label">Edit Epic</label>
              <button className="Editepicbutton" onClick={handleClick}>
                Save
              </button>
            </div>
            {/* <div className="projectname_div">
              <label>Select Project</label>
              <select
                className="project_select"
                value={name}
                onSelect={(e) => {
                  setTextName(e.target.value)
                }}
              >
                {parray.map((item, index) => {
                  return <option value={item.txtName}>{item.txtName}</option>
                })}
              </select>
            </div> */}
 <div className="projectname_div">
              <label>Project</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  settxtName(e.target.value)
                }}
              />
            </div>
            <div className="projectname_div">
              <label>Epic Name</label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
              />
            </div>
            <div className="projectname_div">
              <label className="assignedto">Assignee</label>
              <select
                className="project_select" 
                           onChange={(e) => {
                  settxtUserName(e.target.value)
                }}
              >
                {array.map((item, index) => {
                  return (
                    <>
                      <option value={user}>
                        {item.txtUserName}
                      </option>
                    </>
                  )
                })}
              </select>
              </div>
            {/* <div className="projectname_div">
              <label className="assignedto">AssignedTo</label>
              <select
                className="project_select"
                value={user}
                onSelect={(e) => {
                  setUser(e.target.value)
                }}
              >
                {user.map((item, index) => {
                  return (
                    <option value={item.txtUserName}>{item.txtUserName}</option>
                  )
                })}
              </select>
            </div> */}
            {/* <div
              className="projectname_div"
              id="status-select"
              onChange={(e) => {
                setStatus(e.target.value)
              }}
            >
              <label className="assignedto">Status</label>
              <select
                className="project_select"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value)
                }}
              >
                {statarray.map((stitem, stindex) => {
                  return (
                    <>
                      <option value={stitem.Status}>{stitem.Status}</option>
                    </>
                  )
                })}
              </select>
            </div> */}
            <div className="projectname_div">
              <label>Description</label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
              ></textarea>
            </div>

            <div className="button_div"></div>
            <div className="Epic_Taskbutton">
              <label className="addproject_label">Task</label>
              <button
                className="Editepicbutton"
                onClick={(e) => {
                  invisible();
                  visible();
                }}>
                Create Task
              </button>
            </div>
            <div className="main_contentbar_list">
              <div className="table_head">
                <label></label>
                <label>#id</label>
                <label>Task</label>
                <label>Assigned to</label>
                <label>Status</label>
                <label></label>
              </div>
              {taskarray.map((titem, tindex) => {
                return (
                  
                  <div >
                    <div className="table1_row">
                      <input type={'checkbox'} />
                      <label>{titem.id}</label>
                      <label>{titem.txtTitle}</label>
                      <label>{titem.txtUserName}</label>
                      <label>{titem.txtStatus}</label>
                      <div className="dropdown">
                        <label>
                          <BsThreeDots className="dropbtn" />
                        </label>
                        <div className="dropdown-content">
                          <label>Edit</label>
                          <label style={{ color: 'gray' }}>Delete</label>
                        </div>
                      </div>
                      {/* <label>
                        <BsThreeDots/>
                      </label> */}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}