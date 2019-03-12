import React from 'react';
import { createAppContainer } from "react-navigation";
import ApolloClient from 'apollo-boost';

import AppNavigator from './src/AppNavigator'

const AppContainer = createAppContainer(AppNavigator);


const App = () => {
  return (
    <AppContainer/>
  )
}

export default App