import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import { useStore } from "../../../App/stores/store";
import { Activity } from "../../../Models/Activity";


export default observer(function ActivityForm(){
    

    const {activityStore} = useStore();
    const {selectedActivity, closeForm, createActivity,updateActivity, loading} = activityStore;

    const initialState = selectedActivity ?? {
        id:'',
        title:'',
        category:'',
        description:'',
        date:'',
        city:'',
        venue:'',
    }
    const[activity, setActivity] = useState(initialState);
    function handleSubmit(){
        activity.id ? updateActivity(activity) : createActivity(activity);
    }

    function handleInputChange(e:ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        setActivity({...activity, [name]:value})

    }

    return(
        <div className="form">
            <form onSubmit={handleSubmit} autoComplete="off" action="">
                <input type="text" placeholder="title" value={activity.title} name="title" onChange={handleInputChange} id="" />
                <input type="text" placeholder="description" value={activity.description} onChange={handleInputChange} name="description" id="" />
                <input type="text" placeholder="category" value={activity.category} onChange={handleInputChange} name="category" id="" />
                <input type="text" placeholder="city" value={activity.city} onChange={handleInputChange} name="city" id=""/>
                <input type="text" placeholder="venue" value={activity.venue} onChange={handleInputChange} name="venue" id="" />
                <input type="date" placeholder="date" value={activity.date} onChange={handleInputChange} name="date" id="" />
                <button  className="submit">Submit</button>
                <button onClick={closeForm} >cancel</button>
            </form>
        </div>
    )

})