import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>About</Text>
        <Text>This is the about page :)</Text>
      </View>
    )
  }
}

export default About


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})