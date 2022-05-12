import React, { useContext } from "react";
import { useStore } from "../stores/store";



export default function NavBar(){
 const {activityStore} = useStore();
    return(
        <nav>
            <div className="img-con">
                <img src="/assets/logo.png" alt=""  />
                
            </div>
            <div className="nav-elements">
                <h2>Reactivites</h2>
                <h2>Activities</h2>
                <button onClick={()=>{
                    activityStore.openForm();
                }}>Create Activity</button>
            </div>

        </nav>
    )

}