import React, { Component } from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


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

        <Button 
          title="Go to the session page"
          onPress={() => navigate('SessionPage')}
        />

        <Query query={GET_SESSIONS}>
          {({ loading, data }) => {
            if (loading || !data) return <Text>LOADING....</Text>;
            return (
              <View>
                {console.log("DATA>>>", data.allSessions[0])}
                {data.allSessions.map(session => {
                  return (
                    <View key={session.id}>
                      <Text>{session.title} </Text>
                      <Text>{session.location}</Text>
                    </View>
                  );
                })}
              </View>
            );
          }}
        </Query>
      </View>
    );
  }
}

export default Schedule;

const GET_SESSIONS = gql`
  query {
    allSessions(orderBy: startTime_ASC) {
      id
      title
      startTime
      location
      description
      speaker {
        id
      }
    }
  }
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
