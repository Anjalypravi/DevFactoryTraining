import React from "react";
import "./style/jiraloginstyle.css";
import img1 from "./images/left.png";
import img2 from "./images/left.png";
import logo from "./images/snowlogo.png";
import dlogo from "./images/dlogo.png";

export default function JiraLogin() {
  return (
    <>
      <div className="outer">
        <div className="outer_col1">
          <div>
            <img src={img1} />
          </div>
        </div>
        <div className="outer_col2">
          <div className="outer_col2_row1">
            <img src={logo} className="outer_col2_row1_img" />
            <input
              type={"text"}
              placeholder="Enter Email"
              className="outer_col2_row1_input"
            />
            <input type={"password"} placeholder="Enter password" />
            <button>Continue</button>
          </div>
          <label className="outer_col2_row2">
            Privacy Policy . User Notice
          </label>
          <img className="outer_col2_row3" src={dlogo} />
          <label className="outer_col2_row4">One account for Snow bird</label>
        </div>
        <div className="outer_col3">
         <div><img src={img2} /></div> 
        </div>
      </div>
    </>
  );
}