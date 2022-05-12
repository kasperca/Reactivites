import LoadingComponent from "../../App/Layout/LoadingComponent";
import { useStore } from "../../App/stores/store";
import { Activity } from "../../Models/Activity";

    
  

export default function ActivityDetails(){
   const {activityStore} = useStore();
   const {openForm, selectedActivity:activity, cancelSelectActivity} = activityStore;
   if(!activity)return <LoadingComponent/>;
    return(
        
        <div className="activity">
                
            <div className="item" key={activity.id}>
                        <h2>{activity.title}</h2>

                        <p>{activity.description}</p>
                        <p>{activity.city} {activity.venue}</p>
                        <p>{activity.date}</p>
                
                <button onClick={()=>{
                   
                    openForm(activity.id);
                }} className="edit">Edit </button>
                <button onClick={cancelSelectActivity} className="edit">Cancel </button>
                </div>
                </div>
       
    )
}