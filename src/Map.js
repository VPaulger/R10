import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'


class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Map</Text>
        <Text>This is the map page :)</Text>
      </View>
    )
  }
}

export default Map


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})