import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'




class Session extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Session',
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>Session</Text>
        <Text>This is the session page :)</Text>
      </View>
    )
  }
}

export default Session


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})