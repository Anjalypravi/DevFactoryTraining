function Singleuser(props){
    console.log(props.array);
      return(<div>
           
           <div className="eachuser">
           
                  <div className="users">
                    <div className="userlabel">
                     
                      <label>{props.array.map((item,index)=>{return<>{item.txtUserName}</>})}</label>
                    </div>
                   
                    </div> 
                    
                
                </div>
                
      </div>)
       
  }
  export default Singleuser;
 