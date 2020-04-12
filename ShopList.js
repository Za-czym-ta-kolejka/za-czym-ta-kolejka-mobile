import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Text, Image, ScrollView} from 'react-native';
import { Card, Searchbar  } from 'react-native-paper';

const data = [
  {
    latlng: {
      latitude: 52.2336275,
      longitude: 20.9782332,
    },
    title: 'Frac',
    description: 'Grocery shop',
    clientCount: 10,
    waitTime: 10,
    proximity: "3km"
  },
  {
    latlng: {
      latitude: 52.2336275,
      longitude: 20.9782332,
    },
    title: 'Zabka',
    description: 'Grocery shop',
    clientCount: 10,
    waitTime: 10,
    proximity: "3km"
  },
  {
    latlng: {
      latitude: 52.2336275,
      longitude: 20.9782332,
    },
    title: 'Zabka',
    description: 'Grocery shop',
    clientCount: 10,
    waitTime: 10,
    proximity: "3km"
  },
  {
    latlng: {
      latitude: 52.2336275,
      longitude: 20.9782332,
    },
    title: 'Zabka',
    description: 'Grocery shop',
    clientCount: 10,
    waitTime: 10,
    proximity: "3km"
  },
  {
    latlng: {
      latitude: 52.2336275,
      longitude: 20.9782332,
    },
    title: 'Zabka',
    description: 'Grocery shop',
    clientCount: 10,
    waitTime: 10,
    proximity: "3km"
  }
]


export default class ListInlineStylingShowcase extends React.Component {
  state = {
    search: '',
    filteredData: data
  };

  updateSearch = search => {
    this.setState({ search: search, filteredData: data.filter(function (el) {
        return search === '' ||
            el.title.startsWith(search) ||
            el.description.startsWith(search);
      })})
  };

  render() {
    const { filteredData } = this.state;

    return (
        <View style={styles.container}>
          <Searchbar style={styles.search}
              placeholder="Type Here..."
              onChangeText={this.updateSearch}
              value={this.state.search}
          />
          <ScrollView>
          {filteredData.map((item, i) => (
              <TouchableWithoutFeedback key={i} onPress={() => { this.props.navigation.navigate('ShopDetails') }}>
                <Card style={styles.card}>
                  <View style={styles.cardtop}>
                    <Text> {item.title} </Text>
                    <Text> {item.description} </Text>
                  </View>
                  <View style={styles.cardbotttom}>
                    <Image source={require('./images/shop.png')} resizeMode={'cover'} style={{width: 80,
                      height: 80,
                      marginRight: 10,
                      marginBottom: 12,
                      marginTop: 12}} />
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
                </Card>
              </TouchableWithoutFeedback>
          ))}
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    margin: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
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
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
