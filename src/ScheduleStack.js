import React from "react";
import { createStackNavigator } from "react-navigation";

import Schedule from './Schedule';
import Session from './Session';
import Map from './Map'
import Faves from './Faves'
import About from './About'



const ScheduleStack = createStackNavigator({
    MainPage: Schedule,
    SessionPage: Session,
    // Map: Map,
    // Faves: Faves,
    // About: About,
  },
  {
    initialRouteName: 'MainPage',
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerStyle: {        
        // backgroundColor: 'red',
        // headerBackImage: <LinearGradient/>,  
      },
      // headerBackImage: 
    },
  },
);

export default ScheduleStack