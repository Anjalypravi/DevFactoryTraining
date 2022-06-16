import axios from "axios";
import { useState } from "react";
import React from "react";
function Singleuser({ items, getUid }) {
  //console.log("items" + JSON.stringify(items));
  const id = items.id;
 // console.log("id"+JSON.stringify(id));

  return (
    <div>
      <div className="eachuser">
        <div className="users" onClick={() => getUid(id)}>
         
          <div className="userlabel">
            <>
              <label>{items.txtUserName}</label>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Singleuser;
