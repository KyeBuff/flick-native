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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const RootNavigator = createStackNavigator({ 
  Home: Home,
  Genres: Genres,
  Settings: Settings
})
