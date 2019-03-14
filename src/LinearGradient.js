import React, { Component } from "react";
// import LinearGradient from 'react-native-linear-gradient'; // Only if no expo


class LinearGradient extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
          locations={[0,0.5,0.6]}
          colors={['#4c669f', '#3b5998', '#192f6a']}>
        </LinearGradient>
      </View>
    );
  }
}

export default LinearGradient;