import * as React from 'react';
import {
    ScrollView,
    View,
    Image,
    Dimensions,
    StyleSheet,
    Platform,
    TouchableWithoutFeedback,
    Text
} from 'react-native';

import {Card} from "react-native-paper";

const item = {
    latlng: {
        latitude: 52.2336275,
        longitude: 20.9782332,
    },
    title: 'Frac',
    description: 'Grocery shop',
    clientCount: 10,
    waitTime: 10,
    proximity: "3km",

};



export default class ShopDetails extends React.Component {

    render() {
        const photos = Array.from({ length: 5 }).map(
            (_, i) => `https://unsplash.it/300/300/?random&__id=${i}`
        );

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <TouchableWithoutFeedback>
                    <Card style={styles.card}>
                        <View style={styles.shopmain}>
                            <View style={styles.cardtop}>
                                <Text> {item.title} </Text>
                                <Text> {item.description} </Text>
                            </View>
                            <View style={styles.cardbotttom}>
                                <Image source={{uri: 'https://unsplash.it/300/300/?random&__id=$1'}}
                                       resizeMode={'cover'} style={{
                                    width: 80,
                                    height: 80,
                                    marginRight: 10,
                                    marginBottom: 12,
                                    marginTop: 12
                                }}/>
                                <View>
                                    <View style={styles.details}>
                                        <Text style={styles.text}> {item.clientCount} klientów w kolejkce </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.text}> {item.waitTime} średni czas oczekiwania </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.text}> {item.proximity} od Ciebie </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Card>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Card style={styles.card}>
                        <View style={styles.photos}>
                            {photos.map(uri => (
                                <View key={uri} style={styles.item}>
                                    <Image source={{uri}} style={styles.photo}/>
                                </View>
                            ))}
                        </View>
                    </Card>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Card style={styles.card}>
                        <View style={styles.buttonContainer}>
                            <Text>
                                Prześlij zdjęcie
                            </Text>
                        </View>
                    </Card>
                </TouchableWithoutFeedback>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    shopmain: {
        text: {
            padding: 10,
        },
        cardtop: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor: '#ECF0F1',
            borderBottomWidth: 2,
            paddingVertical: 5,
        },
        cardbotttom: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 5,
        },
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#ecf0f1',
            padding: 8,
        },
    },
    photos: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    photo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 4,
    },
    item: {
        height: Dimensions.get('window').width / 2,
        width: '50%',
        padding: 4,
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
});
