import React from "react";
import "./style.css";
export default function Modal({modalshow, setModalShow}) {
  return (
    <>
      {" "}
      {/* <div  className={modalshow?"modal_project":"hidden"}  id="modal"> */}
    
      <div className={modalshow?"modal_project":"hidden"} id="modal">
          {/* <div  className="modal_project"   id="modal"> */}
        <div className="modalContent"> 
            <label className="addproject_label">Add User</label> 
          <div className="projectname_div">
            <label>Projectname</label>
            <input type="text" />
          </div>
          <div className="projectname_div">
              <label className="assignedto">AssignedTo</label>
              <select className="project_select">
                <option>--options--</option>
              </select>  
          </div>
          <div className="projectname_div">
            <label>Description</label>
            <textarea rows={4}></textarea>
          </div>
          <div className="button_div"> 
              <button onClick={(e)=>{setModalShow(modalshow?false:true)}} className="cancelbutton">Cancel</button>
              <button  onClick={(e)=>{setModalShow(modalshow?false:true)}}>Save</button> 
          </div>
        </div>
      </div>
    </>
  );
}