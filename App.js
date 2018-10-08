import React, { Fragment } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './containers/home';
import Genres from './screens/Genres';
import Settings from './screens/Settings';
import { Provider } from "react-redux";
import { store } from "./data/initial";

import {fillDatabase} from './utilities/utilities';

export default class App extends React.Component {
  render() {
    // fillDatabase();
    return (
      <Provider store={ store }>
        <RootNavigator/>
      </Provider>
    );
  }
}

StatusBar.setBarStyle('light-content');

const RootNavigator = createStackNavigator({ 
  Home: Home,
  Genres: Genres,
  Settings: Settings
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#000",
      borderBottomWidth: 0
    },
    headerTintColor: "#ad"
  }

})
    
