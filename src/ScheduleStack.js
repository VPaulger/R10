import React from 'react';
import { createStackNavigator } from "react-navigation";

import Schedule from './Schedule';
import Session from './Session';

const ScheduleStack = createStackNavigator({
    MainPage: Schedule,
    SessionPage: Session,
  },{
    initialRouteName: 'MainPage',
    defaultNavigationOptions: {
        headerBackTitle: null,
      }
    
  });

export default ScheduleStack