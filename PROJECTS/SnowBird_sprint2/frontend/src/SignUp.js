import "./styles/SnowBirdStyle.css";
import { useNavigate } from "react";
function SignUp() {
  // const [user, setUser] = useState([]);
  // function handleClick(e) {
  //   console.log("hi");
  //   var url = "http://localhost:8000/userinsert";
  //   var req = {
     
  //   };
  //   var header = {};
  //   axios
  //     .post(url, req, header)
  //     .then((res) => {
  //       console.log(res.data);
  //       setUser(res.data);
  //     })
  //     .catch();
  //   alert("Success");
  // }
  return (
    <div>
      <div class="fullpge">
        <div class="container">
          <div class="headings">
            <h2>Welcome to Devfactory</h2>
          </div>
          <div class="headings">
                <h3> Employee Registration
                </h3>
            </div>
            
            <div className="innerbox">
            <div><label>First Name</label>
                <input class="twoinaline" type="text"></input>

                <label>Last Name</label>
                <input class="twoinaline" type="text"></input>
            </div>
            <div>
                <label>Gender</label>
                <input class="oneinaline" type="text"></input>
            </div>
            <div><label>Email Id</label>
            <input className="oneinaline" type="text"></input></div>
            <div><label>Address</label><input class="oneinaline" type="text"></input></div>
            <div><label>Apartment,suite,etc</label><input class="oneinaline" type="text"></input></div>
            <div><p></p></div>
            <div><label>City</label>
                <input class="threeinaline" type="text"></input>

                <label>State</label>
                <input class="threeinaline" type="text"></input>

                <label>PIN Code</label>
                <input class="threeinaline" type="text"></input>
            <div><p></p></div>
            </div>
            <div> <label>Country/Region</label>

                <select class="oneinaline" id="Country">
                    <option>SELECT</option>
                    <option>INDIA </option>
                    <option>CHINA </option>
                    <option>PAKISTHAN </option>
                    <option>BANGLADESH </option>
                </select>
            </div>
            <p></p>
            <div><label>Phone</label> 
                <input class="phone" type="text"></input>

                <label>Business/personal website(optional)</label>
                <input class="phone" type="text" placeholder="example.com"></input>
            </div>
            <div><p></p></div>
            
            
            <div><p></p></div>
            <div><button class="left-btn"onClick={HandleClick}> Register</button></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;

