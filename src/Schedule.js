import React, { Component } from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'



class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Schedule',
  };


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Schedule</Text>
        <Text>This is the schedule page :)</Text>
        <Button 
          title="Go to the session page"
          onPress={() => navigate('SessionPage')}
        />
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