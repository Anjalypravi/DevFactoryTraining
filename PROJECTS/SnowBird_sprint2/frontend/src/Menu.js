import "./styles/SnowBirdStyle.css";
import { useNavigate } from "react-router-dom";
function Menu() {
  var navigate = useNavigate();
  function project() {
    navigate("/project");
  }
  function epic() {
    navigate("/Epic");
  }
  function board(){
      navigate("/");
  }
  function tasks()
  {
      navigate("/Tasks");
  }
  function sprint()
  {
      navigate("/sprint")
  }
  function users()
  {
    navigate("/users")
}
function sprintboard()
{
  navigate("/sprintboard")
}
  return (
    <>
      <div className="firstcolumn">
        <nav>
          <li onClick={board}>Board</li>
          <li onClick={project}>Projects</li>
          <li onClick={epic}>Epics</li>
          <li onClick={tasks}>Tasks</li>
          <li onClick={sprint}>Sprints</li>
          <li onClick={users}>Users</li>
          <li onClick={sprintboard}>Sprint Board</li>
        </nav>
      </div>
    </>
  );
}
export default Menu;