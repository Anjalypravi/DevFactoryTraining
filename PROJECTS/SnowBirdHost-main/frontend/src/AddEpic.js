import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './style.css'
// import Task from './Task'
import close from './images/close.png'
import { BsThreeDots } from 'react-icons/bs'
export default function AddEpic({ show, setShow,pname}) {
  const [title, setTitle] = useState('')
  const [array, setArray] = useState([])
  const [user, settxtUserName] = useState([])
  const[uname,setUname]=useState("");
  const [description, setDescription] = useState('')
  const [parray, setpArray] = useState([])
  const [tarray, settarray] = useState([])
  const [id, setid] = useState('')
  const [name, settxtName] = useState('')
  const [taskshow, settaskShow] = useState(false)
 
  // 
  // console.log(prjct_name)
  //  localStorage.getItem('pid', id)
  //  var pid=id;p
  var refprid = localStorage.getItem("prjectid")
  
  console.log("pname",pname)

  // var assignee = '3'
  // var poid = '3'
  //console.log("addepic",prjct_name)
  // const [status, setStatus] = useState([]);
  // var modal = document.getElementById("modal");
  useEffect(() => {
     //console.log("addepic",prjct_name)
     
  var prjct_name=localStorage.getItem("prjectname");
    //  settxtName(prjct_name)
    //alert(prjct_name)
          var url =
      'https://9i5fv8xex0.execute-api.us-west-2.amazonaws.com/userfetch_userPage'
    var header = {}
    var request = {}
    axios
      .post(url, request, header)
      .then((res) => {
        setArray(res.data)
        console.log("array",res.data)
      })
      .catch()
    var url =
      'https://ssq2quluhh.execute-api.us-west-2.amazonaws.com/projectlist_projectpage'
    // var request = '{"id":"' + poid + '"}'
    var header = {}

    axios
      .post(url, request, header)
      .then((res) => {
        setpArray(res.data)
        // console.log("unknown ",res.data)
        // settxtName(res.data[0].txtName)
        // settxtName(prjct_name);
        // console.log(name)
      })
      .catch()
  }, [])
  function handleClick(e) {
    console.log('hi')
    // var url = "http://localhost:8000/Epicinsert";

    // var url =  'https://caunjd3k00.execute-api.us-west-2.amazonaws.com/Epicinsert'
    var url="https://c8qk605u77.execute-api.us-west-2.amazonaws.com/epicinsert_projectpage";
    // var req ='{"txtTitle":'"title"',txtDesc:description,refprojectid:refprid}'
    var req =  '{"txtTitle":"' +  title +  '","txtDescription":"' +   description +  '","refProjectid":"' +   refprid +   '","refAssignee":"' + uname +  '"}'
    var header = {}

    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data)
        setShow(show?false:true);
        // setUser(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
    //alert('Success');
    // setShow(false);
  }
  function invisible(e) {
    setShow(show ? false : true)
  }
  function visible(e) {
    settaskShow(taskshow ? false : true)
  }

  return (
    <>
      {/* <Task taskshow={taskshow} settaskShow={settaskShow} /> */}
      <div className={show ? 'fullmodal' : 'hidden'} id="modal">
        <div className="fullmodal_modalContent_outer">
          <div className="closeleft">
            <div
              onClick={(e) => {
                setShow(show ? false : true)
              }}
              className="closeleft_container"
            >
              <label>X</label>
            </div>
          </div>
          <div className="fullmodal_modalContent">
            <div className="Epic_Taskbutton1">
              <label className="addproject_label">Add Epic</label>
              <button className="Editepicbutton" onClick={handleClick}>
                Save
              </button>
            </div>
            {/* <div className="projectname_div">
                  <label>Select Project</label>
                  <select
                className="as_sc_dropbox1"
                value={name}
                onChange={(e) => {
                  setTextName(e.target.value)
                }}
              >
                {parray.map((item, index) => {
                  return (
                    <>
                      <option value={item.id}>{item.txtName}</option>
                    </>
                  )
                })}
</select>
            </div>  */}
            <div className="projectname_div">
              <label>Project</label>
              <input
              value={pname}
                type="text"
                // onChange={(e) => {
                //   settxtName(e.target.value)
                // }}
              />
            </div>
            <div className="projectname_div">
              <label>Epic Name</label>
              <input
                type="text"
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
                  setUname(e.target.value)
                }}
              >
                {array.map((item, index) => {
                  return (
                    <>
                      <option value={item.id}>
                        {item.txtUserName}
                      </option>
                    </>
                  )
                })}
              </select>
              {/* <select className="project_select" onSelect={(e) => {
                    setUser(e.target.value);
                  }}>
                    {user.map((item, index) => {
                    return <option value={item.id}>{item.txtUserName}</option>;
                  })}
              </select> */}
            </div>
            {/* <div className="projectname_div" id="status-select" onChange={(e)=>{setStatus(e.target.value)}}>
              <label className="assignedto">Status</label>
              <select className="project_select" >
              <option value="ToDo">ToDo</option>
                  <option value="InProgress">InProgress</option>
                  <option value="Review">Review</option>
                  <option value="Complete">Complete</option>
              </select>
            </div> */}
            <div className="projectname_div">
              <label>Description</label>
              <textarea
                rows={4}
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
              ></textarea>
            </div>

            <div className="Epic_Taskbutton">
              <label className="addproject_label">Task</label>
              <button
                className="Editepicbutton"
                onClick={(e) => {
                  invisible()
                  visible()
                }}
              >
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
              {/* {tarray.map((item, index) => {
                return (
                  <div className={item == 2 ? 'row_full active' : 'row_full'}>
                    <div className="table_row">
                      <input type={'checkbox'} />
                      <label>#1006</label>
                      <label>20 Sep, 23:11</label>
                      <label>Paid</label>
                      <label>Splashify 2.0</label>
                      <label>
                        <BsThreeDots/>
                      </label>
                    </div>
                  </div>
                )
              })} */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
