import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants';
import { API_KEY_GOOGLE } from '@env';

const GOOGLE_PLACES_API_KEY = API_KEY_GOOGLE;

const SearchPlaces = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'es',
        }}
        fetchDetails={true}
        onPress={(data, details = null) => console.log(data, details)}
        requestUrl={{
          url:
            'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginTop: Constants.statusBarHeight,
    width: '100%',
    padding: 15
  },
});

export default SearchPlaces;