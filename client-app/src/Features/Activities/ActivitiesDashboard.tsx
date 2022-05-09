import { Activity } from "../../Models/Activity";
import ActivityDetails from "./ActivityDetails";
import ActivityList from "./ActivityList";
import ActivityForm from "./form/ActivityForm";
interface Props{
    activities:Activity[];
    selectedActivity:Activity |undefined;
    handleSelectActivity:(id:string)=>void;
    handleCancelActivity:()=>void;
    editMode:boolean;
    openForm:(id:string)=>void;
    closeForm:()=>void;
    createOrEdit:(activity:Activity)=>void;
    deleteActivity:(id:string)=>void;
 
}


export default function ActivityDashboard({deleteActivity,activities, selectedActivity, handleCancelActivity, handleSelectActivity, editMode,openForm,closeForm, createOrEdit}:Props){

    return( 
        <div className="activities">
        <ActivityList activities={activities} handleSelectActivity={handleSelectActivity} deleteActivity={deleteActivity}/>
        
        <div className="">
        {selectedActivity && !editMode&&
        <ActivityDetails handleCancelActivity={handleCancelActivity} 
        activity={selectedActivity}
        openForm={openForm}
        />}
     
     
        {editMode &&
        <ActivityForm createOrEdit={createOrEdit} closeForm={closeForm} activity={selectedActivity}/>
        }
        
        </div>
        </div>
    )
}