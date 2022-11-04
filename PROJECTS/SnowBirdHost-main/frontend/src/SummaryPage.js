import Menu from "./Menu";
// import Header from "./Header";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import menu from "./images/menu.png";
import { BsCheckLg } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
// import MetaTags from 'react-meta-tags';

ChartJS.register(ArcElement, Tooltip, Legend);
function SummaryPage() {
  const [progress, setProgress] = useState("20%");
  const [array, setArray] = useState([]);
  const [todoarray, setTodoarray] = useState([]);
  const [comarray, setComparray] = useState([]);
  const [usrarray, setUserArray] = useState([]);
  const [totaltask, setTotaltask] = useState([]);
  const [inprog, setInprog] = useState([]);
  useEffect(() => {
    var poid = 78;
    var url =
      "https://fh5aj5zhk7.execute-api.us-west-2.amazonaws.com/taskfetch_summarypage";
    var request = '{"poid":"' + poid + '"}';
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("array",JSON.stringify(res.data));
        setArray(res.data);
      })
      .catch();

    var url_todo =
      "https://fmup3leaal.execute-api.us-west-2.amazonaws.com/taskfetch_todo_summarypage";
    var request_todo = '{"poid":"' + poid + '"}';
    var header = {};
    axios
      .post(url_todo, request_todo, header)
      .then((res) => {
        console.log(JSON.stringify(res.data));
        setTodoarray(res.data);
      })
      .catch();

    var url_comp =
      " https://nctexja79l.execute-api.us-west-2.amazonaws.com/taskfetch_completed";

    var header = {};
    axios
      .post(url_comp, request, header)
      .then((res) => {
        console.log(JSON.stringify(res.data));
        setComparray(res.data);
      })
      .catch();

    var url_user =
      "https://16i2mb6jd4.execute-api.us-west-2.amazonaws.com/userlist_summarypage";
    var request_usr = {};
    var header = {};
    axios
      .post(url_user, request_usr, header)
      .then((res) => {
        console.log(JSON.stringify(res.data));
        setUserArray(res.data);
      })
      .catch();

    var url_totaltask =
      " https://1sb9bmub6k.execute-api.us-west-2.amazonaws.com/totaltaskcount_summary";
    var header = {};
    axios
      .post(url_totaltask, request, header)
      .then((res) => {
        console.log(JSON.stringify(res.data));
        setTotaltask(res.data);
      })
      .catch();

    var url_inpr =
      " https://m0ii962qw8.execute-api.us-west-2.amazonaws.com/todograph_summary";
    var header = {};
    var request1 = '{"poid":"' + poid + '"}';
    axios
      .post(url_inpr, request1, header)
      .then((res) => {
        console.log("inprg", JSON.stringify(res.data));
        setInprog(res.data);
      })
      .catch();
  }, []);
  var uname = localStorage.getItem("username");
  //   console.log("uname", uname);

  const data = {
    labels: [],
    datasets: [
      {
        // label: '# of Votes',
        data: [
          comarray.map((itemc, index) => itemc.task),
          inprog.map((itemi, index) => itemi.inprogress),
          todoarray.map((itemt, index) => itemt.task),
        ],
        backgroundColor: ["#3F7D01", "#FFB800", "#FF0000"],
        borderColor: ["rgb(196,196,198)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <div className="main">
        <Menu />
        <div className="main_contentbar">
          {/* Side navigation menu */}
          <div className="main_contentbar_headerbar">
            <div className="main_contentbar_headerbar_left">
              <div>
                <img src={menu} />
              </div>
              <label>Summary</label>
            </div>
            <div className="main_contentbar_headerbar_right">
              <div className="circle">
                <label>AB</label>
              </div>
            </div>
          </div>

          <div className="row1_managerboard">
            <div className="row2_managerboard">
              <div className="box_managerboard">
                <div className="box1_managerboard">
                  <div className="rowcircle">
                    <BsCheckLg className="check_board" />
                  </div>
                  {array.map((item, index) => {
                    return (
                      <>
                      
                        <label className="label_box">{item.task} Tasks</label>
                      </>
                    );
                  })}
                </div>
                <div className="box2_managerboard">
                  <div className="rowcircle">
                    <BsCheckLg className="check_board" />
                  </div>

                  {todoarray.map((item, index) => {
                    return (
                      <>
                        <label className="label_box">{item.task} Todo</label>
                      </>
                    );
                  })}
                </div>
                <div className="box3_managerboard">
                  <div className="rowcircle">
                    <BsCheckLg className="check_board" />
                  </div>
                  <label className="label_box">0 done</label>
                </div>
                <div className="box4_managerboard">
                  <div className="rowcircle">
                    <BsCheckLg className="check_board" />
                  </div>
                  {comarray.map((itemc, index) => {
                    return (
                      <>
                        <label className="label_box">
                          {itemc.task} Completed
                        </label>
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="contentrow_manager">
                <div className="status_manager">
                  <div className="box5_managerboard">
                    <div className="box5_contentlabel">
                      <label style={{ fontWeight: "bold" }}>
                        Status Overview
                      </label>
                    </div>
                    <div className="box5_secrow">
                      <div className="box5_firstcolm">
                        <div className="doughnoutchart">
                          <div className="graph">
                            <Doughnut data={data} />
                          </div>
                        </div>
                      </div>
                      <div className="box5_seccolm">
                        <div className="box5_contents">
                          <div className="red_content">
                            <div className="red">
                              <label>Todo</label>
                            </div>
                          </div>
                          <div className="yellow">
                            <label>Inprogress</label>
                          </div>
                          <div className="green">
                            <label>Completed</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box6_managerboard">
                    <div className="box6_contentlabel">
                      <label style={{ fontWeight: "bold" }}>
                        Team Workload
                      </label>
                    </div>
                    <div className="box6_table">
                      <th style={{ width: "33%" }}>Assignee</th>
                      <th style={{ width: "53%" }}>Work Distribution</th>
                      <th style={{ borderRight: "10%" }}>Count</th>

                      {usrarray.map((itemu, index) => {
                        return (
                          <>
                            <tr>
                              <td className="employeelist">
                                <label>{itemu.txtUserName}</label>
                              </td>
                              <td>
                                <div className="test">
                                  <div className="progressbar">
                                    <div
                                      className="progressthumb"
                                      style={{ width: `${progress}` }}
                                    ></div>
                                  </div>
                                  
                                  
                                </div>
                              </td>
                              <td>
                                
                              </td>
                            </tr>
                          </>
                        );
                      })}

                      <td>
                        {/* <MetaTags>
                     <meta name="viewport" content="width=device-width, initial-scale=1"></meta></MetaTags>

                     
                     <a  href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet"/>
                     <div className="w3-light-grey">
                     <div className="w3-container w3-red w3-padding w3-center" style={{width:"10%"}}></div>
                     </div> */}
                      </td>
                      {/* </tr> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="test">
        <div className="progressbar">
          <div className="progressthumb" style={{ width: `${progress}` }}></div>
        </div>
        <div className="progressbar">
          <div className="progressthumb" style={{ width: `${progress}` }}></div>
        </div>
        <div className="progressbar">
          <div className="progressthumb" style={{ width: `${progress}` }}></div>
        </div>
      </div>
    </div>
  );
}
export default SummaryPage;
