import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { StyleSheet, Text, View, Image } from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  aboutToggles(index) {
    console.log('aboottoggles ', this.state, index);
    if (this.state.collapsed === index) {
      this.setState({
        collapsed: false,
      });
    } else {
      this.setState({
        collapsed: index,
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Query query={GET_CONDUCT}>
          {({ loading, data }) => {
            if (loading || !data) {
              return (
                <View>
                  <Text> loading .. </Text>
                </View>
              );
            }
            return (
              <View>
                <Image 
                  style={styles.headingImage}
                  source={require('../assets/images/r10_logo.png')} 
                  />
                <View
                  style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
                <Text style={styles.contentText}>
                  R10 is a conference that focuses on just about any topic
                  related to dev.
                </Text>
                <Text style={styles.heading}>Date & Venue</Text>
                <Text style={styles.contentText}>
                  The R10 conference will take place on Tuesday, June 27, 2017
                  in Vancouver, BC.
                </Text>
                <Text style={styles.heading}>Code of Conduct</Text>
                {data.allConducts.map((element, index) => (
                  <View key={element.order}>
                    <Collapse
                      onToggle={this.aboutToggles.bind(this, index)}
                      isCollapsed={this.state.collapsed === index}
                    >
                      <CollapseHeader>
                        <View>
                          <Text style={styles.conductTitle}>
                            {this.state.collapsed === index ? '-' : '+'}{' '}
                            {element.title}
                          </Text>
                        </View>
                      </CollapseHeader>
                      <CollapseBody>
                        <Text style={styles.conductContent}>{element.description}</Text>
                      </CollapseBody>
                    </Collapse>
                  </View>
                ))}
                <View
                  style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
            );
          }}
        </Query>
      </View>
    );
  }
}

export default About;

const GET_CONDUCT = gql`
  query {
    allConducts(orderBy: order_ASC) {
      order
      title
      description
    }
  }
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    fontFamily: "Montserrat-Regular"
  },
  headingImage: {
    alignSelf: 'center',
    margin: 20,
  },
  heading: {
    fontSize: 30,
    fontFamily: "Montserrat-Regular",
    margin: 10,
  },
  contentText: {
    fontSize: 20,
    fontFamily: "Montserrat-Light",
    margin: 10,
  },
  dropdownMenu: {
    flex: 1,
    flexDirection: 'row',
  },
  conductTitle: {
    color: '#9963ea',
    fontFamily: "Montserrat-Regular",
    fontSize: 20,
    margin: 10,
  },
  conductContent: {
    fontFamily: "Montserrat-Light",
    fontSize: 20,
    margin: 10,
  }
});
