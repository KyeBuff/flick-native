import React from 'react';
import filters from '../static/filters.json';
import { Button, StyleSheet, View } from 'react-native';

export default ({filter, onPress, active}) => (
	<View
		style={ styles.buttonContainer }>
		<Button 
			style={ styles.button }
			onPress={onPress} 
			title={filter.label} 
		/>
	</View>
);

const styles = StyleSheet.create({
  button: {
  	textShadowColor: '#49bf84',
  	textShadowOffset: {width: 1, height: 3},
  	textShadowRadius: 1,
  	fontFamily: 'arimo',
    fontSize: 45,
    color: '#FFF',
    textAlign: 'center',
    padding: 15,
    letterSpacing: 7,
  }
});
