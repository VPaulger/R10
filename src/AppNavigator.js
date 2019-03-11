import React from 'react'
import { createBottomTabNavigator } from "react-navigation";
// import Icon from 'react-native-vector-icons/FontAwesome';

import Schedule from './Schedule'
import Map from './Map'
import Faves from './Faves'
import About from './About'


const AppNavigator = createBottomTabNavigator(
  {
    Schedule: {
      screen: Schedule,
      path: '/',
      // navigationOptions: {
      //     tabBarIcon: ({ focused, tintColor }) => {
      //         const iconName = `home${focused ? '' : ''}`;
      //         return <Icon name={iconName} size={25} color={tintColor} />;
      //     },
      // },
    },
    Map: {
      screen: Map,
      path: '/',
      // navigationOptions: {
      //     tabBarIcon: ({ focused, tintColor }) => {
      //         const iconName = `home${focused ? '' : ''}`;
      //         return <Icon name={iconName} size={25} color={tintColor} />;
      //     },
      // },
    },
    Faves: {
      screen: Faves,
      path: '/',
      // navigationOptions: {
      //     tabBarIcon: ({ focused, tintColor }) => {
      //         const iconName = `home${focused ? '' : ''}`;
      //         return <Icon name={iconName} size={25} color={tintColor} />;
      //     },
      // },
    },
    About: {
      screen: About,
      path: '/',
      // navigationOptions: {
      //     tabBarIcon: ({ focused, tintColor }) => {
      //         const iconName = `question-circle${focused ? '' : ''}`;
      //         return <Icon name={iconName} size={25} color={tintColor} />;
      //     },
      // },
    },
  },
  {
    initialRouteName: "Schedule"
  }
)

export default AppNavigator