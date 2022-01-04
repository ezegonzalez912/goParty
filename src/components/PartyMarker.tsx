import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Marker } from "react-native-maps";

const PartyMarker = () => {

    const partys:any = [];

    return (
        <>
            {
                  partys.map((party:any, index:number) => (
                      <Marker
                          key={index}
                          coordinate={{
                              latitude: party.coors.lat,
                              longitude: party.coors.lng,
                          }}
                      >
                          <View style={styles.currentLocation} />
                      </Marker>
                  ))
              }   
        </>
    )
}

export default PartyMarker;

const styles = StyleSheet.create({
    currentLocation: {
      backgroundColor: "#7241FF",
      borderRadius: 8,
      height: 16,
      width: 16,
    }
  });