import { observer } from "mobx-react-lite";
import { useStore } from "../../App/stores/store";
import { Activity } from "../../Models/Activity";
import ActivityDetails from "./ActivityDetails";
import ActivityList from "./ActivityList";
import ActivityForm from "./form/ActivityForm";



export default observer( function ActivityDashboard(){
    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore; 
    return( 
        <div className="activities">
        <ActivityList />
        
        <div className="">
        {selectedActivity && !editMode&&
        <ActivityDetails  />}
     
     
        {editMode &&
        <ActivityForm />
        }
        
        </div>
        </div>
    )
})