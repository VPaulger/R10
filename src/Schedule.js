import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>  
        <Query query={GET_SESSIONS}>
          {({ loading, data }) => {
            return (
              <View>              
                {console.log(data)}
              </View>
            )
          }}
        </Query>
      </View>
    )
  }
}

export default Schedule


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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})