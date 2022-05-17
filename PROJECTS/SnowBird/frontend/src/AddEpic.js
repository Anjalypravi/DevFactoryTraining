import "./styles/Epicstyle.css";
function AddEpic() {
  return (
    <div>
      <div className="outer">
        {/* USer name with icon */}
        <div className="firstrow">
          <div className="usericon"></div>
          <label>User</label>
        </div>
        <div className="secondrow">
          {/* Side navigation menu */}
          <div className="firstcolumn">
            <nav>
              <li>Board</li>
              <li>Projects</li>
              <li>Epics</li>
              <li>Tasks</li>
              <li>Sprints</li>
              <li>Users</li>
            </nav>
          </div>

          {/* Main outline */}
            <div className="secondcolumn">
            <div className="buttonright">
              <label>AddEpic</label>
              <button>SAVE</button>
            </div>
            <div className="seccolumsecondrow">
              <div>
                <lable>
                  <h4>Title</h4>
                </lable>
                <input className="titleinput" type="text"></input>
              </div>
              <div>
                <lable>
                  <h4>Description</h4>
                </lable>
                <input className="descriptioninput" type="text"></input>
              </div>
              <div>
                <lable>
                  <h4>Status</h4>
                </lable>
                <input type="text" name="Status" value="ToDo"
       selectBoxOptions="ToDo;Review;InProgress;Completed;"></input>
              </div>
              <div>
                <lable>
                  <h4>Assigned to</h4>
                </lable>
                <input className="assignedtoinput" type="text"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddEpic;
