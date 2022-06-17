function Productlist(){

  // const [productlist, setProductList] = useState([
  //   { Id: "1", productName: "ABBCCC", Rate: "100", Tax: "18" },
  //   { Id: "2", productName: "AABBBC", Rate: "100", Tax: "18" },
  //   { Id: "3", productName: "AAABBB", Rate: "100", Tax: "18" },
  // ]);
    return(
      <div>
        
      <div>
        {" "}
        <table>
          <thead>
            <th>Id</th>
            <th>ProductName</th>
            <th>Rate</th>
            <th>Tax</th>
          </thead>

          <tbody>
            {Productlist.map((item, num) => {
              return (
                <tr>
                  <td> {item.Id}</td>
                  <td>{item.productName}</td>
                  <td>{item.Rate}</td>
                  <td>{item.Tax}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
  export default Productlist;