import React from 'react';
import Carousel from '../components/Carousel';
import { TouchableHighlight, StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

let _this = null;

export default class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.onPressGenres = this.onPressGenres.bind(this);
    this.onPressSettings = this.onPressSettings.bind(this);
  }

  static navigationOptions = {
    headerRight: (
      <TouchableHighlight
        onPress={() => _this.onPressSettings()}>
      <Ionicons name="md-settings" size={32} color="green" />
      </TouchableHighlight>
    ),
  };

  componentDidMount() {
    _this = this;
  }

  onPressGenres() { 
    this.props.navigation.navigate("Genres")
  }

  onPressSettings() { 
    this.props.navigation.navigate("Settings")
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Home</Text>
        <Button title="Settings" onPress={this.onPressSettings} />
        <Button title="Genres" onPress={this.onPressGenres} />
        <Carousel data={this.props.media} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});