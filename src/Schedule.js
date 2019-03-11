import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'


class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Schedule</Text>
        <Text>This is the schedule page :)</Text>
      </View>
    )
  }
}

export default Schedule


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})