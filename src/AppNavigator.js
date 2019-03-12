import React from 'react'
import { createBottomTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

import Schedule from './Schedule'
import Map from './Map'
import Faves from './Faves'
import About from './About'
import ScheduleStack from './ScheduleStack';


const TabBarComponent = (props) => (<BottomTabBar {...props} />);


const AppNavigator = createBottomTabNavigator(
  {
    Schedule: {
      screen: ScheduleStack,
      path: '/',
      navigationOptions: {
          tabBarIcon: ({ focused, tintColor }) => {
              const iconName = `calendar${focused ? '' : ''}`;
              return <Icon name={iconName} size={25} color={tintColor} />;
          },
      },
    },
    Map: {
      screen: Map,
      path: '/',
      navigationOptions: {
          tabBarIcon: ({ focused, tintColor }) => {
              const iconName = `map${focused ? '' : ''}`;
              return <Icon name={iconName} size={25} color={tintColor} />;
          },
      },
    },
    Faves: {
      screen: Faves,
      path: '/',
      navigationOptions: {
          tabBarIcon: ({ focused, tintColor }) => {
              const iconName = `heart${focused ? '' : ''}`;
              return <Icon name={iconName} size={25} color={tintColor} />;
          },
      },
    },
    About: {
      screen: About,
      path: '/',
      navigationOptions: {
          tabBarIcon: ({ focused, tintColor }) => {
              const iconName = `info-circle${focused ? '' : ''}`;
              return <Icon name={iconName} size={25} color={tintColor} />;
          },
      },
    },
  },
  {
    initialRouteName: "Schedule",
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      style: {
        // height: 70, ?
        // padding: 10, ?
        height: 65,
        padding: 5,
        backgroundColor: '#000000',
      },
    },
  },
)

export default AppNavigator