import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const useCurrentLocation = () => {

    const [location, setLocation] = useState<any>(null);

    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        })();
    }, []);

    const initialRegion = {
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
        latitudeDelta: 0,
        longitudeDelta: 0.05,
    }

    return { location, initialRegion };
}
