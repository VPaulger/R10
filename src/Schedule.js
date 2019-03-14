import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Link } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
// import { ListItem } from 'react-native-material-ui';
// import { ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import FavouriteIcon from './FavouriteIcon';

class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Schedule',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* <Button 
          title="Go to the session page"
          onPress={() => navigate('SessionPage')}
        /> */}

          <Query query={GET_SESSIONS}>
            {({ loading, data }) => {
              if (loading || !data) return <Text>LOADING....</Text>;
              return (
                <View style={styles.list}>
                  {console.log('DATA>>>', data.allSessions[0])}
                  {data.allSessions.map(session => {
                    return (
                      <View>
                        {/* <Link onPress={() => navigate('SessionPage')}> */}
                        <Text style={styles.startTime}>
                          {moment(session.startTime).format('LT')}
                        </Text>
                        <Text style={styles.title}>{session.title}</Text>
                        <View style={styles.scheduleContainer}>
                          <Text style={styles.location}>
                            {session.location}
                          </Text>
                          <FavouriteIcon
                            id={session.id}
                            styles={styles.favIcon}
                          />
                        </View>
                        {/* </Link> */}
                      </View>
                    );
                  })}
                </View>
              );
            }}
          </Query>
        </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scheduleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  favIcon: {
    backgroundColor: '#FFFFFF',
    paddingRight: 10,
  },
  list: {
    width: '100%',
  },
  startTime: {
    backgroundColor: '#e6e6e6',
    padding: 10,
  },
  title: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    paddingTop: 15,
  },
  location: {
    backgroundColor: '#FFFFFF',
    color: '#999999',
    padding: 10,
    paddingTop: 0,
    paddingBottom: 15,
  },
});
