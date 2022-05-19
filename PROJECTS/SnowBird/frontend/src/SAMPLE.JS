import { useState } from "react";

const SampleTest = () => {
  const [valueData, setValueData] = useState({"data":[
    { id: "1", name: "sample" },
    { id: 2, name: "sample2" }
  ], count: 2});


  const [count, setCount] = useState(2);
  const [obj, setObject] = useState({});
  const [str, setStr] = useState("");

  

  const handleAdd = () => {
      var temp=valueData.data;
      temp.push({})
      setValueData({"data":temp, count:temp.length})
    // array = ["one"];
    // var abc=array;
    // abc.push({})
    // setarray(abc)
    // console.log(array)
    // count = 2;
    // obj = { test: "value" };
    // str = "test";
    // array.push({ id: 3, name: "sample3" });
    // setCount(count+1);
    // console.log(array);
  };

  return (
    <>
      <div>
        <p>
          {JSON.stringify(valueData)},{count},{JSON.stringify(obj)},{str}
        </p>

        {count}
        {valueData.data.map((item, index) => {
          return (
            <p>
              {index} - {item.id} - {item.name}
            </p>
          );
        })}
        <button onClick={handleAdd}>handleAdd</button>
      </div>
    </>
  );
};

export default SampleTest;