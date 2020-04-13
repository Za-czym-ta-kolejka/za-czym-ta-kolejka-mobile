import React from 'react';
import MapView from './Map';
import ShopList from './ShopList';
import ShopDetails from './ShopDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const Stack = createStackNavigator();
function App() {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options= {{headerShown: false}} name="MapView" component={MapView} />
            <Stack.Screen name="ShopList" component={ShopList} />
            <Stack.Screen name="ShopDetails" component={ShopDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </React.Fragment>

  );
}

export default App;