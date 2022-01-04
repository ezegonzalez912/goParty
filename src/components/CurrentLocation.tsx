import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Marker } from "react-native-maps";

interface Props {
    location: any
}

const CurrentLocation: React.FC<Props> = ({ location }) => {

    const coordinate = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
    }

    return (
        <Marker coordinate={coordinate}>
            <View style={styles.pointer} />
        </Marker>
    )
}

export default CurrentLocation;

const styles = StyleSheet.create({
    pointer: {
        backgroundColor: "#7241FF",
        borderRadius: 8,
        height: 16,
        width: 16
    }
})
