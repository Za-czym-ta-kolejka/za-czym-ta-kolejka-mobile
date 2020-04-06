import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import {
  List,
  Icon,
  ListItem,
  Text
} from '@ui-kitten/components';

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
  }
]


const StarIcon = (style) => (
  <Icon {...style} name='star' />
);

export const ListItemWithIconShowcase = ({ title, description, index, navigation }) => (
  <ListItem
    title={title}
    description={description}
    icon={StarIcon}
    onPress={() => { navigation.navigate('ShopDetails') }}
  />
);

export default class ListInlineStylingShowcase extends React.Component {

  renderItem = ({ item, index }) => (
    <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate('ShopDetails') }}>
      <View style={styles.mainItem}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>{`Dystans: ${item.proximity}  `}</Text>
          <Text>{`Kolejka: ${item.waitTime}`}</Text>
        </View>
      </View>
      </TouchableWithoutFeedback>
  );

  render() {
    return (
      <List
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: { paddingHorizontal: 8 },
  title: {
    fontSize: 18
  },
  description: {
    color: "#808080"
  },
  mainItem: {
    flexDirection: "row",
    paddingTop: "3%",
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 3,
    justifyContent: "space-between"
  },
  listItem: {

  }
});