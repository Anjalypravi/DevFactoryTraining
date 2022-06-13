import axios from "axios";
import { useState } from "react";
import React from "react";
import "./styles/SnowBirdStyle.css";
function SingleUser1({items,getid})
{
    const handleClick=(e,id)=>{
        e.preventDefault();
        getid(e,id);
    }
    const id=items.id;
    return(
        <div>
            <div className="eachuser">
        <div className="users" onClick={(e)=>{handleClick(e,items.id)}}>
        <div className="userlabel">
<>
          <label>{items.txtUserName}</label>
          </>
        </div>
        </div>
        </div>
        </div>
        
    )
};
export default SingleUser1;