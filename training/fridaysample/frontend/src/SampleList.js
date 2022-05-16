import { useState } from "react";
import "./styles/realstyle.css";
function SampleList() {
  var sampleData = [
    {
      "  id": 1,
      StudentName: "Anjana",
      Age: 30,
    },
    {
      "  id": 2,
      StudentName: "Dony",
      Age: 25,
    },
    {
      "  id": 3,
      StudentName: "Anjana",
      Age: 30,
    },
  ];
  const [tableData, setTableData] = useState([
    {
      "  id": 1,
      StudentName: "Anjana",
      Age: 30
    },
    {
      "  id": 2,
      StudentName: "Dony",
      Age: 25
    },
    {
      "  id": 3,
      StudentName: "Anjana",
      Age: 30
    },
  ]);
  return (
    <div className="outerdiv">
      <div className="firstrow">
        <label>{JSON.stringify(tableData)}User</label>{" "}
      </div>
      <div className="secondrow">
        <div className="secfirstcolumn">
          <nav>
            <li>Home</li>
            <li>Products</li>
            <li>Orders</li>
            <li>Logout</li>
          </nav>
        </div>
        <div className="secsecondcolumn">{JSON.stringify(tableData)}
          <table>
            <thead>
              <th>Id</th> <th>studentslist</th> <th>Mark</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td> <td>Anjana</td> <td>30</td>
              </tr>
              <tr>
                {" "}
                <td>2</td> <td>Dony</td> <td>25</td>
              </tr>
              <tr>
                {" "}
                <td>3</td> <td>Archana</td> <td>26</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <th>Id</th> <th>studentName</th> <th>Age</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td> <td>Anjana</td> <td>30</td>
              </tr>
              
              tableData.map((item,index)=>{return{index}})
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default SampleList;
