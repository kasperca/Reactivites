import { observer } from "mobx-react-lite";
import { SyntheticEvent, useState, useTransition } from "react";
import { useStore } from "../../App/stores/store";
import { Activity } from "../../Models/Activity";

 

export default observer( function ActivityList(){
    const {activityStore} = useStore();
    const {activitiesByDate:activities, deleteActivity, selectActivity, loading} = activityStore;

    const [target, setTarget] = useState('');

    function handleActivityDelete(e:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    

    return(
        <div className="list">
            <div className="item-list">
                {activities.map((activity,index) =>(
                    <div className="item" key={index}>
                        {loading&&<h2>DELETING</h2>}
                        <h2>{activity.title}</h2>

                        <p>{activity.description}</p>
                        <p>{activity.city} {activity.venue}</p>
                        <p>{activity.date}</p>
                        <button onClick={()=>{
                          selectActivity(activity.id);
                        }}>view</button>
                         <button onClick={(e)=>{
                          handleActivityDelete(e, activity.id);
                     
                          console.log('wtfff');
                        }}>delete</button>
                    </div>
                    

                ))}
                
            </div>
           
        </div>
    )
})