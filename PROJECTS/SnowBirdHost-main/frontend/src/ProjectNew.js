import React, { useEffect, useState } from "react";
import downarrow from "./images/downarrow.png";
import logo from "./images/snowlogo.png";
import menu from "./images/menu.png";
// import "./newstyle.css";
import "./style.css";
import search from "./images/search.png";
import cross from "./images/cross.png";
import add from "./images/add.png";
import { BsThreeDots } from "react-icons/bs";
import AddEpic from './AddEpic'
import EditEpic from './EditEpic'
// import FullModal from './FullModal';
import Modal from "./Modal";
import Menu from "./Menu";
import axios from "axios";
export default function ProjectNew() {
  const [array, setArray] = useState([]);
  const [list, setList] = useState([]);
  //   const[num,setNum]=useState("")
  var num;
  //   Modal 
  const [show, setShow] = useState(false);
  const [modalshow, setModalShow] = useState(false);
  var modalproject = document.getElementById("modalproject");
  var eproject = document.getElementById("eproject");
  const [emodalshow, setemodalshow] = useState(false)
  const [epicshow, setEpicShow] = useState(false);
  const [epiclist, setEpicList] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [prjctid, setPrjectid] = useState("");
  //   Add project
  const [options, setOption] = useState([]);
  const [owner, setRefOwner] = useState("");
  const [descri, setDescri] = useState("");
  const [name, setTextName] = useState("");
  const [type, setTextType] = useState("");
 const [prname,setPrname]=useState("");
  var pname;
  const [sample, setSample] = useState([{ "txtName": "SnowBird ", "txtType": "Telecom", "txtUserName": "Sunu", "id": 7, "isClicked": false },
  { "txtName": "TestProject 1", "txtType": "Business", "txtUserName": "Sunu", "id": 56, "isClicked": true, "epic": [{ "txtTitle": "amcd", "txtStatus": "to-do", "txtUserName": "Sunu" }] },
  { "txtName": "NewProject2", "txtType": "Telecom", "txtUserName": "Sunu", "id": 58, "isClicked": false },
  { "txtName": "new project", "txtType": "Business", "txtUserName": "Sunu", "id": 68, "isClicked": false }])
  // var len=epiclist.length;
  // console.log("len",len)
  //   update project
  const [pdetails, setPdetails] = useState([]);


  const [desc, setDesc] = useState('')
  var poid = "78";
  var index;
  useEffect(() => {
    
    var url =
      "https://ssq2quluhh.execute-api.us-west-2.amazonaws.com/projectlist_projectpage";
    var request = '{"id":"' + poid + '"}';
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("res pro", JSON.stringify(res.data));
        var temp = [...res.data]
        for (const element of temp) {
          element.isClicked = false;
          element.epic = [];
        }
        setArray(temp);
        console.log("array", res.data)
        // setArray(res.data);
      })

      .catch();

    var url_option =
      " https://wc9kyrz7xi.execute-api.us-west-2.amazonaws.com/ownerfetch";
    var request = {};
    var header = {};
    axios
      .post(url_option, request, header)
      .then((res) => {
        console.log("resoptions", +JSON.stringify(res.data));
        var len = res.data.length;
        // setA(len);
        if (len > 0) {
          setOption(res.data);
        }
      })
      .catch();



    //   update project



  }, []);
  function handleModalClick(e) {
    e.preventDefault();
    setModalShow(modalshow ? false : true);
  }
  function canceladd() {
    modalproject.style.display = "none";
  }
  function cancel() {
    eproject.style.display = "none";
  }
  function addproject() {
    modalproject.show.display = "block";
  }
  function listepic(e, id, prjctname,index) {

    e.preventDefault();
    //  pname=prjctname;
    setPrname(prjctname)
    localStorage.setItem("prjectname",prjctname)
    console.log("selected project anme",prjctname);
    let temp = [...array]
    temp[index].isClicked = temp[index].isClicked ? false : true
    var url_elist =
      " https://5xnu9tghf7.execute-api.us-west-2.amazonaws.com/listepic_projectpage";
    var request = '{"id":"' + id + '"}';
    var header = {};
    axios
      .post(url_elist, request, header)
      .then((res) => {
        temp[index].epic = res.data;

        setArray(temp)
      })
      .catch((err) => { })
    return;

    console.log("selected project", id);
    console.log("index", index);
    var temp_array = [...array];
    temp_array[index].isClicked = temp_array[index].isClicked ? false : true;
    var url_elist =
      " https://5xnu9tghf7.execute-api.us-west-2.amazonaws.com/listepic_projectpage";
    var request = '{"id":"' + id + '"}';
    var header = {};
    axios
      .post(url_elist, request, header)
      .then((res) => {

        var temp_epiclist = [...res.data]
        var temp;
        var epic;
        // for(const element of res.data)
        // {
        if (res.data != null) {
          temp_array[index]["epic"] = [...temp_epiclist];
          list[index] = [...temp_array]
          setArray(list)
          setEpicList(res.data)
        }
        else {
          temp_array[index]["epic"] = [..."epic"];
          list[index] = [...temp_array]
          setArray(list)
          setEpicList(res.data)

        }
        // }
        //  console.log("temp",JSON.stringify(temp[1]))
        console.log("epiclist", JSON.stringify(epiclist));
        // ;

        console.log("list_array", JSON.stringify(array));

        // console.log("array",+JSON.stringify(res.data))
        setEpicShow(epicshow ? false : true);
      })

      .catch();
  }
  function addproject() {
    modalproject.style.display = "block";
  }

  function addepic_projectname(e,prjctname,prjctid)
  {
    e.preventDefault();
    // var n=prjctname;
    var pid=prjctid;
    
    // localStorage.setItem("prjectname",n)
    localStorage.setItem("prjectid",pid)
    setShow(show ? false : true)
    
  }

  function insertproject() {
    var url =
      "https://d7pr4pwfi4.execute-api.us-west-2.amazonaws.com/projectinsert";
    var request =
      '{ "name": "' +
      name +
      '", "owner": "' +
      owner +
      '" ,"desc":"' +
      descri +
      '","type":"' +
      type +
      '"}';

    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("reS", JSON.stringify(res.data));
        if (res.data == "user exists") {
          alert("Name exists!!");

          //   canceladd();
        } else {
          alert("Inserted New project successfully");
          // canceladd();
          modalproject.style.display = "none";
        }
      })
      .catch();
  }
  //   ******************************Update project
  function updateproject(id) {
    console.log("selected prjct on liad dispaly", id)
    localStorage.setItem("prjctid", id)
    eproject.style.display = "block";
    var url1 =
      ' https://0kcgyqm6ra.execute-api.us-west-2.amazonaws.com/editproject_selectedproject'
    var request1 = '{"pid":"' + id + '"}'

    var header1 = {}
    var request = {}
    axios
      .post(url1, request1, header1)
      .then((res) => {
        console.log(res.data)
        setPdetails(res.data)
        setTextName(res.data[0].txtName)
        setRefOwner(res.data[0].txtUserName)
        setRefOwner(res.data[0].id)
        setTextType(res.data[0].txtType)
        setDescri(res.data[0].txtDescription)
      })
      .catch()

  }
  function editproject() {
    // console.log("selected projct",id)
    var id = localStorage.getItem("prjctid")

    var url =
      ' https://rwxzbtkeol.execute-api.us-west-2.amazonaws.com/default/projectupdate'
    var request = '{ "prjctname": "' + name + '",  "refowner": "' + owner + '" ,"id":"' + id + '","desc":"' + descri + '","type":"' + type + '"}'
    console.log('owner :' + JSON.stringify(owner))
    console.log('id :' + JSON.stringify(id))
    console.log("requ for update", request)
    var header = {}
    axios
      .post(url, request, header)
      .then((res) => {
        console.log("res in edit", JSON.stringify(res.data))
        if (res.data != '') {
          alert('Project updated successfully')
          cancel();
        }
        else {
          alert("name exists")
        }
      })
      .catch()
  }
  //  function test(e,itm,id,index)
  //  {
  //   e.preventDefault();
  //       setEpicShow(epicshow ? false : true);
  //       listepic(id, index,itm.isClicked?false:true);
  //       setIsClicked(itm.isClicked ? false : true);
  //  }

  return (
    <>
      {/* <FullModal show={show} setShow={setShow}/> */}
      {/* <Modal modalshow={modalshow} setModalShow={setModalShow}/> */}
      {/* <EditEpic emodalshow={emodalshow} setemodalshow={setemodalshow}/> */}
      <AddEpic show={show} setShow={setShow} pname={prname} />
      <div className="main">
        <Menu />
        <div className="main_contentbar">
          <button onClick={addproject} className="fab_button">
            +
          </button>
          <div className="main_contentbar_headerbar">
            <div className="main_contentbar_headerbar_left">
              <div>
                <img src={menu} />
              </div>
              <label>Project</label>
              {/* {array.map((itm, index) => {
                return<>
                <label>{itm}</label>
                </>
              })} */}
            </div>
            <div className="main_contentbar_headerbar_right">
              <div className="circle">
                <label>AB</label>
              </div>
            </div>
          </div>
          <div className="main_contentbar_search">
            <div className="main_contentbar_search_left">
              <img src={search} />
              <input placeholder="Search by order #, name or email..." />
            </div>
            <div className="main_contentbar_search_right">
              <button>
                Filters <img src={downarrow} />
              </button>
            </div>
          </div>
          <div className="main_contentbar_filters">
            <div className="main_contentbar_filters_inner">
              <button>
                Filters{" "}
                <img
                  className="main_contentbar_filters_inner_img"
                  src={cross}
                />
              </button>
            </div>
            <div className="main_contentbar_filters_inner">
              <button>
                <img className="main_contentbar_filters_inner_add" src={add} />
              </button>
            </div>
          </div>
          <div className="main_contentbar_list">
            <div className="table_head">
              <label></label>
              <label>ProjectName</label>
              <label>Type</label>
              <label>AssignedTo</label>

              <label></label>

            </div>
            {array.map((itm, indx) => {
              return (
                <div className={itm.isClicked ? "row_full active" : "row_full"} onClick={(e) => { listepic(e, itm.id,itm.txtName, indx) }}>
                  <div className="table_row">


                    <input type={"checkbox"} />
                    <label  >
                      {itm.txtName}
                    </label>
                    <label>{itm.txtType}</label>
                    <label>{itm.txtUserName}</label>
                    <div className="dropdown">
                      <label>
                        <BsThreeDots className="dropbtn" />
                      </label>

                      <div className="dropdown-content">
                        <label onClick={() => { updateproject(itm.id) }}>Edit</label>
                        <label style={{ color: "gray" }}>Delete</label>
                      </div>
                    </div>
                  </div>
                  <div className={epicshow == true || itm.isClicked == true ? "visible" : "hidden"}>

                    {itm.epic.map((eitem, index) => {

                      return (
                        <>
                          <div className="epic_row">
                            <label></label>
                            <label>{eitem.txtTitle}</label>
                            <label>{eitem.txtStatus}</label>
                            <label>{eitem.txtUserName}</label>
                            <div className="dropdown">
                              <label>
                                <BsThreeDots className="dropbtn" />
                              </label>

                              <div className="dropdown-content">
                                <label onClick={(e) => setemodalshow(emodalshow ? false : true)}>Edit</label>
                                <label style={{ color: "gray" }}>Delete</label>
                              </div>
                            </div>

                          </div>
                        </>
                      );

                    })}

                    <div className="buttonrow">
                      <button onClick={(e)=>{addepic_projectname(e,itm.txtName,itm.id)}}  >
                        + Create Epic
                      </button>
                    </div>
                    {/* </div> */}
                  </div>

                </div>
              );
            })}
          </div>
        // </div>
      </div>

      {/* ********************************Add project Modal************************************************* */}

      <div className="modalproject" id="modalproject">
        <div className="modalContent">
          <div className="addprojectdiv">
            <label className="addproject_label">Add Project</label>
          </div>
          <div className="projectname_div">
            <label>Projectname</label>
            <input
              type="text"
              onChange={(e) => {
                setTextName(e.target.value);
              }}
            />
          </div>
          <div className="projectname_div">
            <label>Description</label>
            <textarea
              onChange={(e) => {
                setDescri(e.target.value);
              }}
            />
          </div>
          {/* <div className="dropdown_addpr"></div> */}
          {/* <div className="dropdown_assignedto"> */}
          <div className="projectname_div">
            <label>AssignedTo</label>
            <select
              className="project_select"
              onChange={(e) => {
                setRefOwner(e.target.value);
              }}
            >
              <option>--options--</option>
              {options.map((item, index) => {
                return (
                  <>
                    <option value={item.id}>{item.txtUserName}</option>
                  </>
                );
              })}
            </select>
          </div>
          {/* </div> */}
          <div className="projectname_div">
            <label>ProjectType</label>
            <select
              className="project_select"
              onChange={(e) => {
                setTextType(e.target.value);
              }}
            >
              <option>--options--</option>
              <option value="Telecom">Telecom</option>
              <option value="Business">Business</option>
              <option value="Management">Management</option>
            </select>
          </div>

          <div className="button_div">
            {/* <div className="buttons_cancel"> */}
            <button onClick={canceladd} className="cancelbutton">Cancel</button>
            <button onClick={insertproject}>Save</button>
            {/* </div> */}
          </div>
        </div>
      </div>


      {/* *********************************************Update Project************************************************* */}

      <div className="modalproject" id="eproject">
        <div className="modalContent">
          <div className="addprojectdiv">
            <label className="addproject_label">Edit Project</label>
          </div>
          <div className="projectname_div">
            <label>Projectname</label>
            <input
              type="text" value={name}
              onChange={(e) => {
                setTextName(e.target.value);
              }}
            />
          </div>
          <div className="projectname_div">
            <label>Description</label>
            <input type="text" value={descri}
              onChange={(e) => {
                setDescri(e.target.value);
              }}
            />
          </div>
          {/* <div className="dropdown_addpr"></div> */}
          {/* <div className="dropdown_assignedto"> */}
          <div className="projectname_div">
            <label>AssignedTo</label>
            <select
              className="project_select" value={owner}
              onChange={(e) => {
                setRefOwner(e.target.value);
              }}
            >
              <option>--options--</option>
              {options.map((item, index) => {
                return (
                  <>
                    <option value={item.id}>{item.txtUserName}</option>
                  </>
                );
              })}
            </select>
          </div>
          {/* </div> */}
          <div className="projectname_div">
            <label>ProjectType</label>
            <select
              className="project_select" value={type}
              onChange={(e) => {
                setTextType(e.target.value);
              }}
            >
              <option>--options--</option>
              <option value="Telecom">Telecom</option>
              <option value="Business">Business</option>
              <option value="Management">Management</option>
            </select>
          </div>

          <div className="button_div">
            {/* <div className="buttons_cancel"> */}
            <button onClick={cancel} className="cancelbutton">Cancel</button>
            <button onClick={editproject}>Save</button>
            {/* </div> */}
          </div>
        </div>
      </div>


    </>
  );
}
