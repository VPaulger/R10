import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';


class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Map</Text>
        <Text>This is the map page :)</Text>

        <MapView
          initialRegion={{
            latitude: 43.644058,
            longitude: -79.386726,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Marker coordinate={{ latitude: 43.644058, longitude: -79.386726 }}
            image={require('../images/map_pin.png')}
            />
        </MapView>
      </View>
    );
  }
}

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
