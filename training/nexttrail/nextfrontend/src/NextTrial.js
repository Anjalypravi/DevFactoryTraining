import { useState } from "react";
import "./NextStyle/NextStyle.css"
function NextTrial(){
    const[uname,setuname]=useState("")
    //setuname={"Anjaly"}
    return(
        
            <div className="outerdiv">
                <div className="firstrow">
                    <label>User</label>
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
                    <div className="secsecondcolumn">
                        <div className="Dashboard"> <label>Dashboard</label></div>
                    </div>
                </div>
            </div>
        
    );
};
export default NextTrial;