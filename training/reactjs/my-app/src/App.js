import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="innerdiv">
          <div><label><h2>Login</h2></label></div>

          <div class="user"><label>Username</label>
            <input type="text" placeholder="Username" />

            <label>Password</label>
            <input type="text" placeholder="Password" />
          </div>

          <div class="styleing"><button>Login</button></div>

        </div>
      </div>
    </div>
  );

}



export default App;
