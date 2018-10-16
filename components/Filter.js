import React from 'react';
import filters from '../static/filters.json';
import { Button, StyleSheet, View } from 'react-native';

export default ({filter, onPress, active}) => (
	<View style={{
		flex: 1,
		backgroundColor: active ? 'red' : 'white'
	}} >
		<Button 
			onPress={onPress} 
			title={filter.label} 
		/>
	</View>
);