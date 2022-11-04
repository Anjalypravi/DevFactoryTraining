import { FaPlus } from "react-icons/fa";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios' 
import { useEffect} from 'react'

function Addproject()
{
    var modal = document.getElementById("modal");
    const navigate = useNavigate();
    const [name, setTextName] = useState('');
    const [descri, setDescri] = useState('');
    const [options, setOption] = useState([]);
    const [owner, setRefOwner] = useState('')
    const [type, setTextType] = useState('')
    // var btn = document.getElementById("plus");
    // var span = document.getElementsByClassName("close")[0];


    useEffect(() => {
        //var url = "http://localhost:8000/ownerfetch";
        var url =
          ' https://wc9kyrz7xi.execute-api.us-west-2.amazonaws.com/ownerfetch'
        var request = {}
        var header = {}
        axios
          .post(url, request, header)
          .then((res) => {
            console.log("resoptions",+JSON.stringify(res.data))
            var len = res.data.length
            // setA(len);
            if (len > 0) {
              setOption(res.data)
            }
          })
          .catch()
      }, [])

//  function addproject() {
//   modal.style.display = "block";
// }


function closeprject() {
  modal.style.display = "none";
}
function cancel(){
    modal.style.display = "none";

}
function insertproject(){
    var url =
    'https://d7pr4pwfi4.execute-api.us-west-2.amazonaws.com/projectinsert'
  var request = '{ "name": "' + name + '", "owner": "' + owner + '" ,"desc":"' + descri + '","type":"'+type+'"}'
  console.log('owner :' + JSON.stringify(owner))
  var header = {}
  axios
    .post(url, request, header)
    .then((res) => {
      console.log('reS' + JSON.stringify(res.data))
      if (res.data != null) {
        alert('Inserted New project successfully')
        navigate("/project");
      }
      //ReactSession.get("setRefOwner"+owner);
    })
    .catch()
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    return<>
      {/* <button id="plus" onClick={addproject}> Add Prject</button> */}
      
      <div className="modal_project" id="modal">
        <div className="modalContent">
            <div className="addprojectdiv"><label className="addproject_label">Add Project</label>
             {/* <span id="close" className="close" onClick={closeprject}>&times;</span> */}
             </div>
             <div className="projectname_div">
                <label>Projectname</label>
                <input type="text" onChange={(e)=>{setTextName(e.target.value)}}/>
             </div>
             <div className="dropdown_addpr">
             <div className="dropdown_assignedto">
                <label className="assignedto">AssignedTo</label>
                <select className="project_select" onChange={(e) => {
                    setRefOwner(e.target.value)
                  }}>
                    <option>--options--</option>
                        {options.map((item, index) => {
                          return (
                            <>
                              <option value={item.id}>
                                {item.txtUserName}
                              </option>
                            </>
                          )
                        })}
                      </select>
            </div>
             <div className="dropdown_type">
             <label>ProjectType</label>
             <select className="project_select" onChange={(e) => { setTextType(e.target.value) }}>
                  <option>--options--</option>
                   <option value="Telecom">Telecom</option>
                   <option value="Business">Business</option>
                   
                </select>
             </div>
             </div>
             <div className="projectdesc_div">
                <label >Description</label>
                <input type="text" onChange={(e)=>{setDescri(e.target.value)}}/>  
             </div>
             <div className="button_div">
                <div className="buttons_cancel">
                <button onClick={cancel}>Cancel</button>
                <button onClick={insertproject}>Save</button>
                </div>
             </div>
        </div>
      </div>
    </>
}
export default Addproject;