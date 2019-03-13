import React from 'react';
import { createAppContainer } from 'react-navigation'
import { ApolloProvider } from 'react-apollo'
import { ThemeContext, getTheme } from 'react-native-material-ui';

import client from './src/config/Api'
import AppNavigator from './src/AppNavigator'

const AppContainer = createAppContainer(AppNavigator)


const uiTheme = {
  palette: {
    blackColor: '#000000',
    mediumGreyColor: '#999999',
    lightGreyColor: '#e6e6e6',
    blueColor: '#8797D6',
    purpleColor: '#9963ea',
    redColor: '#cf392a'
  },
};

const App = () => {
  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <ApolloProvider client={client}>
        <AppContainer/>
      </ApolloProvider>
    </ThemeContext.Provider>
  )
}

export default App