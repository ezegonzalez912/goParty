import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Constants from 'expo-constants';
import MapView from "react-native-maps";
import CurrentLocation from "../components/CurrentLocation";
import { useCurrentLocation } from "../hooks/useCurrentLocation";
import PartyMarker from "../components/PartyMarker";
import SearchPlaces from "../components/SearchPlaces";

const Main = () => {

    const { location, initialRegion } = useCurrentLocation();

    return (
      <>
        {
          location &&
          <MapView style={styles.map} initialRegion={initialRegion}>
            <CurrentLocation location={location}/>
            <PartyMarker />
          </MapView>
        }
        <SearchPlaces />
      </>
    )
}

export default Main

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    marginTop: Constants.statusBarHeight,
  }
});
  