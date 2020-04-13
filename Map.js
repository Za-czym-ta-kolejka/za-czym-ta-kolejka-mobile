import React from 'react';
import MapView, { Marker } from 'react-native-maps';

import {StyleSheet, Text, View, Dimensions, Alert, TouchableWithoutFeedback} from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { Card, Searchbar  } from 'react-native-paper';

const markers = [
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
                    showsUserLocation = {true}
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
                <Searchbar style={styles.search}
                           placeholder="Type Here..."
                           onChangeText={this.updateSearch}
                           value={this.state.search}
                />
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ShopList')}>
                    <Card style={styles.buttonsContainer} >
                        <View style={styles.cardContainer}>
                            <Text>Lista sklepów</Text>
                        </View>
                    </Card>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",

    },
    mapStyle: {
        width: '100%',
        height: '100%',
    },
    search: {
        margin: 10,
        position: "absolute",
        top: '5%',
    },
    buttonsContainer: {
        position: "absolute",
        marginHorizontal: 10,
        width: '80%',
        height: '8 %',
        bottom: '8%',
    },
    cardContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
});
