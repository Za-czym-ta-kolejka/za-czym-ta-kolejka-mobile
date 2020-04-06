import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import {
    Icon,
} from '@ui-kitten/components';

const data = {
    latlng: {
        latitude: 52.2336275,
        longitude: 20.9782332,
    },
    title: 'Frac',
    description: 'Grocery shop',
    clientCount: 10,
    waitTime: 10,
    proximity: "3km"
}

export default ShopDetails = (props) => {

    return (
        <View>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
            />
            <Text>{data.title}</Text>

            <Icon name='activity-outline'/>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: { paddingHorizontal: 8 },
});