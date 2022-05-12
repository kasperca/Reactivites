import React, { useEffect, useState } from 'react';
import { Activity } from '../../Models/Activity';
import Navbar from './Navbar';
import ActivityDashboard from '../../Features/Activities/ActivitiesDashboard';
import {v4 as uuid} from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';


function App() {

  const {activityStore} = useStore();

  const [subtmitting, setSubmitting] = useState(false);


  useEffect(()=>{
      activityStore.loadActivities();
  },[activityStore]);


  

  if(activityStore.loadingInitial) return <div className="app"><Navbar /><LoadingComponent content="Loading app" /></div>

  return (
    <div className="App">

      <Navbar />
      <ActivityDashboard  
      />
 
    </div>
  );
}

export default observer(App);
