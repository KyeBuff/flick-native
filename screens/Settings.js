import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Settings extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Settings</Text>
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