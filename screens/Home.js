import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.onPressGenres = this.onPressGenres.bind(this);
    this.onPressSettings = this.onPressSettings.bind(this);
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
        <Button title="Settings" onPress={this.onPressSettings} />;
        <Button title="Genres" onPress={this.onPressGenres} />;
      </View>
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