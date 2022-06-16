import Menu from "./Menu";
import "./styles/SnowBirdStyle.css";
function Epic() {
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
          {<Menu/>}
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
              <label>Epic</label>
              <button>CREATE NEW</button>
            </div>
            <div className="tablerow">
              
              <table >
                <thead>
                  <th>#id</th> <th>EpicName</th> <th>Status</th>{" "}
                  <th>ProjectName</th>
                </thead>
                <tbody>
                    <tr className="trow"><td>10</td>   <td>User1</td>  <td>ToDo</td>  <td>Ecommerce</td></tr>
                    <tr className="trow"><td>11</td>   <td>User2</td>  <td>ToDo</td>  <td>Ecommerce</td></tr>
                </tbody>
              </table>
              
            </div>
            <div className="pbutton">
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Epic;
