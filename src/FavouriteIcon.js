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
      const favListString = await AsyncStorage.getItem('favList');
      const favListJSON = JSON.parse(favListString) || {};
      const isFav = favListJSON[id] || false;
      this.setState({ isFav });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getIsFav(this.state.id);
  }

  render() {
    return (
      <View style={this.props.styles}>
        <TouchableOpacity onPress={() => this.toggleFav(this.state.id)}>
          {this.state.isFav && <Icon name="heart" size={20} color="red" />}
          {!this.state.isFav && <Icon name="heart-o" size={20} />}
        </TouchableOpacity>
      </View>
    );
  }
}
