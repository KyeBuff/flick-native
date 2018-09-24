import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Genres from './screens/Genres';
import Settings from './screens/Settings';

import {fillDatabase} from './utilities/utilities';

export default class App extends React.Component {
  render() {
    // fillDatabase();
    
    return (
      <RootNavigator/>
    );
  }
}

const RootNavigator = createStackNavigator({ 
  Home: Home,
  Genres: Genres,
  Settings: Settings
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTitleStyle: {
      color: "#fff",
    },
    headerTintColor: "#fff"
  }
})
