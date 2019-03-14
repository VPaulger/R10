import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FavouriteIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav: false,
      id: this.props.id,
    };
  }
  async toggleFav(id) {
    try {
      const getFavListString = await AsyncStorage.getItem('favList');
      const getFavListJSON = JSON.parse(getFavListString) || {};
      console.log(getFavListJSON);
      if (getFavListJSON[id]) {
        getFavListJSON[id] = !getFavListJSON[id];
        this.setState({ isFav: getFavListJSON[id] });
      } else {
        getFavListJSON[id] = true;
        this.setState({ isFav: true });
      }
      favListString = JSON.stringify(getFavListJSON);
      await AsyncStorage.setItem('favList', favListString);
    } catch (error) {
      console.log(error);
    }
  }

  async getIsFav(id) {
    try {
      const favList = await AsyncStorage.getItem('favList');
      return favList[id] || false;
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getIsFav(this.state.id);
  }

  displayIcon() {
    if (this.state.isFav) {
      return <Icon name="heart" size={25} color="red" />;
    } else {
      return <Icon name="heart-o" size={25} />;
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.toggleFav(this.state.id)}>
          {this.displayIcon()}
        </TouchableOpacity>
      </View>
    );
  }
}
