import React from 'react';
import MapView, { Marker } from 'react-native-maps';

import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import {
    Button,
    Layout,
  } from '@ui-kitten/components';


markers = [
    {
        latlng: {
            latitude: 52.2336275,
            longitude: 20.9782332,
        },
        title: 'Frac',
        description: 'Grocery shop',
    }
]

export default class MyMapView extends React.Component {
    state = {
        location: null,
        geocode: null,
        errorMessage: ""
    }

    componentDidMount() {
        this.getLocationAsync()
    }

    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }

        let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Low});

        const { latitude , longitude } = location.coords;
        let region = {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        };
        this.mapRef.animateToRegion(region, 1000);
      };
    
    render() {
        const {location,geocode, errorMessage } = this.state
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle}
                    region={this.state.mapRegion}
                    provider="google"
                    ref={(ref) => { this.mapRef = ref }}
                    >
                    {markers.map(marker => (
                        <Marker
                            key={marker.title}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
                </MapView>
                <View style={styles.buttonsContainer}>
                    <Button onPress={() => this.props.navigation.navigate('ShopList')}>Lista sklepów</Button>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        // position: 'absolute',
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    buttonsContainer: {
        position: "absolute",
        bottom: 50,
        left: 10,
        flexDirection: 'row',
        paddingVertical: 16,
        margin: 8,
    }
});
