import React from 'react';
import { createAppContainer } from 'react-navigation'
import { ApolloProvider } from 'react-apollo'

import client from './src/config/Api'
import AppNavigator from './src/AppNavigator'

const AppContainer = createAppContainer(AppNavigator)


const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer/>
      dummy text
    </ApolloProvider>
  )
}

export default App