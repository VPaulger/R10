import React, { Component } from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'

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
                    
                    <Text style={[styles.base, styles.location]}>{data.Session.location}</Text>
                    <Text h1 style={[styles.base, styles.title]}>{data.Session.title}</Text>
                    <Text style={[styles.base, styles.starttime]}>{moment(data.Session.startTime).format('LT')}</Text>
                    <Text style={[styles.base, styles.description]}>{data.Session.description}</Text>
                    <Text style={[styles.base, styles.presentedby]}>Presented by</Text>
                    <View style={styles.speaker}>
                      <Image
                        style={{width:80, height:80, borderRadius:40}}
                        source = {{uri: data.Session.speaker.image }}
                      />
                      <Text style={[styles.base, styles.name]}>{data.Session.speaker.name}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={this.onPress}
                    >
                      <Text style={[styles.base,{color: 'white'}]}> Remove from Faves </Text>
                    </TouchableOpacity>
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
    alignItems: 'flex-start',
    backgroundColor: 'white',
    margin: 15,
    
  },
  base: {
    fontFamily: "Montserrat-Regular",
    fontSize: 20,
    lineHeight: 40,
    
  },
  session: {
  },
  location: {
    color: '#999999',
  },
  title: {
    fontSize: 35,
    lineHeight: 60,
  },
  starttime: {
    color: 'red',
  },
  description: {
    fontFamily: "Montserrat-Light",
    paddingTop: 10,
    paddingBottom: 10,
  },
  speaker: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 2,
  },
  presentedby: {
    color: '#999999',
  },
  name: {
    paddingLeft: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9963EA',
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 30,
  },
})