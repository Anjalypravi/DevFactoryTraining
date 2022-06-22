import axios from "axios"

function Test(){
    var url="https://fe09g884n6.execute-api.us-west-2.amazonaws.com/fetchuser";
    var request ={};
    var header={};
    function handleClick(){
        axios.post(url,request,header).then((res)=>{
            console.log(res.data);
        }).catch()
    }
    return<>
    <button onClick={handleClick}>Click me</button>
    </>
}
export default Test