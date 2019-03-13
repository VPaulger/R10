import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FavouriteIcon from './FavouriteIcon';

class Faves extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Faves</Text>
        <Text>This is the faves page :)</Text>
        <FavouriteIcon id="cjh2j37mo163p01221qpcklry" />
      </View>
    );
  }
}

export default Faves;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
