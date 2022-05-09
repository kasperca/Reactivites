import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../../Models/Activity';
import Navbar from './Navbar';
import ActivityDashboard from '../../Features/Activities/ActivitiesDashboard';
import {v4 as uuid} from 'uuid';


function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);


  useEffect(()=>{
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(reponse => {
      setActivities(reponse.data);
      
    })
  },[]);

  function handleSelectActivity(id:string){
    setSelectedActivity(activities.find(x=> x.id === id));
  }

  function handleCancelActivity(){
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?:string){
    id!==undefined? handleSelectActivity(id) : handleCancelActivity();
    setEditMode(true);
  }

  function handleFormClose(){
    setEditMode(false);
  }
  
function handleCreateOrEditActivity(activity:Activity){
  activity.id ? setActivities([...activities.filter(x=> x.id !== activity.id), activity])
  : setActivities([...activities, {...activity, id:uuid()}]);
  setEditMode(false);
  setSelectedActivity(activity);
}
  function handleDelteActivity(id:string){
    setActivities([...activities.filter(x=>x.id !== id)]);
  }

  return (
    <div className="App">

      <Navbar openForm={handleFormOpen}/>
      <ActivityDashboard handleSelectActivity={handleSelectActivity} handleCancelActivity={handleCancelActivity} selectedActivity={selectedActivity} activities={activities}  
      editMode={editMode} openForm={handleFormOpen} closeForm={handleFormClose} 
      createOrEdit={handleCreateOrEditActivity}
      deleteActivity={handleDelteActivity}
      />
 
    </div>
  );
}

export default App;
