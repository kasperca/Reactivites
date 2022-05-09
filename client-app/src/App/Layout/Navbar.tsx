import React from "react";

interface Props{
    openForm:()=>void;
}

export default function NavBar({openForm}:Props){

    return(
        <nav>
            <div className="img-con">
                <img src="/assets/logo.png" alt=""  />
                
            </div>
            <div className="nav-elements">
                <h2>Reactivites</h2>
                <h2>Activities</h2>
                <button onClick={openForm}>Create Activity</button>
            </div>

        </nav>
    )

}