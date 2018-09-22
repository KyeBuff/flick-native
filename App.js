import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Genres from './screens/Genres';
import Settings from './screens/Settings';

export default class App extends React.Component {
  render() {
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
