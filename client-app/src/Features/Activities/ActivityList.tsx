import { Activity } from "../../Models/Activity";

    interface Props{
        activities:Activity[];
        handleSelectActivity:(id:string)=>void;
        deleteActivity:(id:string)=>void;
        
    }

export default function ActivityList({activities, handleSelectActivity,deleteActivity}:Props){

    return(
        <div className="list">
            <div className="item-list">
                {activities.map((activity,index) =>(
                    <div className="item" key={index}>
                        <h2>{activity.title}</h2>

                        <p>{activity.description}</p>
                        <p>{activity.city} {activity.venue}</p>
                        <button onClick={()=>{
                          handleSelectActivity(activity.id);
                        }}>view</button>
                         <button onClick={()=>{
                          deleteActivity(activity.id);
                        }}>delete</button>
                    </div>
                    

                ))}
                
            </div>
           
        </div>
    )
}