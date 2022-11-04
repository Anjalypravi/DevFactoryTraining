import downarrow from "./images/downarrow.png";
import logo from "./images/snowlogo.png";
import { useNavigate } from 'react-router-dom'
import menu from "./images/menu.png";
import "./style.css";
import search from "./images/search.png";
import cross from "./images/cross.png";
import add from "./images/add.png";
function Menu(){
  const navigate = useNavigate()
  function summarypage()
  {
    navigate("/summary")
  }
  function projectcall()
  {
    navigate("/project")
  }
  function logincall()
  {
    navigate("/")
  }
    return<>
    <div className="main_menunbar">
          <img src={logo} />
          <div className="main_menunbar_menu">
            <ul>
              <li onClick={logincall}><label >Home</label></li>
              <li onClick={summarypage}>
                <label  >Board</label>
                {/* <div>
                  <img src={downarrow} />
                </div> */}
              </li>
              <li>
                <label>Sprint</label>
                <div>
                  <img src={downarrow} />
                </div>
              </li>{" "}
              <li onClick={projectcall}>
                <label >Project</label>
                {/* <div>
                  <img src={downarrow} />
                </div> */}
              </li>{" "}
              <li>
                <label>Reports</label>
                <div>
                  <img src={downarrow} />
                </div>
              </li>{" "}
              {/* <li>
                <label>Board</label>
                <div>
                  <img src={downarrow} />
                </div>
              </li> */}
            </ul>
          </div>
        </div>
    </>
}
export default Menu;
