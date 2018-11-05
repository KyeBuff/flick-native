import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default ({ onPress }) => (
	<TouchableOpacity 
        style={styles.flickBtnContainer}
        onPress={onPress}
    >
        <Text style={ styles.flickBtn }>FLICK</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  flickBtnContainer: {
    marginRight: '15%',
    marginLeft: '15%',
    width: '60%',
    backgroundColor: '#62ffb0',
    borderRadius: 8,
  },
  flickBtn: {
  	textShadowColor: '#49bf84',
  	textShadowOffset: {width: 1, height: 3},
  	textShadowRadius: 1,
  	fontFamily: 'arimo',
    fontSize: 45,
    color: '#FFF',
    textAlign: 'center',
    padding: 15,
    letterSpacing: 7,
  },
});
