
import "./style.css";
function SignUp() {
  return (
    <div>
      <div class="fullpge">
        <div class="container">
          <div class="headings">
            <h2>Add an address so you can get paid</h2>
          </div>
          <div class="headings">
                <h3>This will be used as your default business address
                </h3>
            </div>
            <div class="headings">
                <h4>You can always change this later
                </h4>
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
            <div><label>First Name</label>
                <input class="twoinaline" type="text"></input>

                <label>Last Name</label>
                <input class="twoinaline" type="text"></input>
            </div>
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
            <div><label>Phone</label> 
                <input class="phone" type="text"></input>

                <label>Business/personal website(optional)</label>
                <input class="phone" type="text" placeholder="example.com"></input>
            </div>
            <div><p></p></div>
            
            <div><input type="checkbox" ></input><label>This store is a registered business</label> </div>

            <div><p></p></div>
            <div><button class="left-btn"><label>"BACK"</label></button></div>
            <div><button class="right-btn"><label>"Enter my store"</label></button></div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;

