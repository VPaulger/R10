import React, { Component } from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import moment from 'moment';


const GET_SESSION = gql`
    query {
        Session(id:"cjh2j37mo163p01221qpcklry") {
        location
        title
        startTime
        description
        speaker {
            id
            name
            image
        }
    } 
  }
`;


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
        <Query query={GET_SESSION}>
          {({ loading, data }) => {
            if (loading || !data) {
              return (
                <View>
                  <Text>
                    Loading...
                  </Text>
                </View>
              )
            }
            return (
                <View style={styles.session}>                                
                    {console.log("data: ", data)}
                    {console.log("loading status: ", loading)}
                    {console.log("data.Session: ", data.Session)}
                    
                    <Text style={styles.location}>{data.Session.location}</Text>
                    <Text h1 style={styles.title}>{data.Session.title}</Text>
                    <Text style={styles.starttime}>{moment(data.Session.startTime).format('LT')}</Text>
                    <Text style={styles.description}>{data.Session.description}</Text>
                    <Text style={styles.presentedby}>Presented by</Text>
                    <Image
                      style={{width:80, height:80, borderRadius:40 }}
                      source = {{uri: data.Session.speaker.image }}
                    />
                    <Text style={styles.name}>{data.Session.speaker.name}</Text>
                </View>
            )
          }}
        </Query>
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
    fontFamily: "Montserrat-Regular",
  },
  session: {
    fontFamily: "Montserrat-Regular",
  },
  starttime: {
    color: 'red',
  }
})