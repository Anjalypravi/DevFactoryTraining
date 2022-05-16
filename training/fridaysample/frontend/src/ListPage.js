//import "./styles/stylecss.css";
function ListPage() {
  return (
    <div>
      <div>
        <input class='header' type="text"></input>
      </div>

      <div>
        <div>
          <input class="body1" type="text"></input></div>
          <div><input class="body2" type="text"></input>
        </div>
      </div>
      <div class="tablecontent">
        <table>
          <thead>
            <th>id</th> <th>studentName</th> <th>age</th>
          </thead>
          <tbody>
            <tr>
              {" "}
              <td>1</td> <td>Anjana</td> <td>30</td>
            </tr>
            <tr>
              {" "}
              <td>2</td> <td>Bintu</td> <td>28</td>
            </tr>
            <tr>
              {" "}
              <td>3</td> <td>Catherin</td> <td>34</td>
            </tr>
            <tr>
              {" "}
              <td>4</td> <td>Dony</td> <td>33</td>
            </tr>
            <tr>
              {" "}
              <td>5</td> <td>Sarath</td> <td>27</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
export default ListPage;
