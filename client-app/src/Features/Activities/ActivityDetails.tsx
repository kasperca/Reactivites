import { Activity } from "../../Models/Activity";

    interface Props{
        activity:Activity;
        handleCancelActivity:()=>void;
        openForm:(id:string) => void;
        
    }

  

export default function ActivityDetails({ openForm, activity, handleCancelActivity}:Props){
   
    return(
        
        <div className="activity">
                
            <div className="item" key={activity.id}>
                        <h2>{activity.title}</h2>

                        <p>{activity.description}</p>
                        <p>{activity.city} {activity.venue}</p>
                    
                
                <button onClick={()=>{
                   
                    openForm(activity.id);
                }} className="edit">Edit </button>
                <button onClick={()=>{
                    handleCancelActivity();
                }} className="edit">Cancel </button>
                </div>
                </div>
       
    )
}