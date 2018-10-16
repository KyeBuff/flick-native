import React, {Fragment} from 'react';
import Carousel from '../components/Carousel';
import Filters from '../components/Filters';
import { TouchableHighlight, TouchableOpacity, StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Font } from 'expo';

let _this = null;

export default class Home extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    }
    this.onPressGenres = this.onPressGenres.bind(this);
    this.onPressSettings = this.onPressSettings.bind(this);
    this.onPressFlick = this.onPressFlick.bind(this);
  }

  static navigationOptions = {
    headerRight: (
      <TouchableHighlight
        onPress={() => _this.onPressSettings()}
      >
        <Ionicons 
          name="md-settings" 
          size={32} 
          color="lightgrey"
          style={{marginRight: 20}}
        />
      </TouchableHighlight>
    ),
  };

  async componentDidMount() {
    _this = this;
    await Font.loadAsync({
       'bangers': require('../assets/fonts/bangers.ttf'),
     });
    this.setState({fontLoaded: true});
   }

  onPressGenres() { 
    this.props.navigation.navigate("Genres")
  }

  onPressSettings() { 
    this.props.navigation.navigate("Settings")
  }

  onPressFlick() { 
    this.props.getMedia()
  }

  render() {
    return (
      <View style={ styles.container }>
        <Carousel data={this.props.media} />
        {this.state.fontLoaded ?
          <TouchableOpacity 
            style={styles.flickBtnContainer}
            onPress={this.onPressFlick}
          >
            <Text style={ styles.flickBtn }>Flick</Text>
          </TouchableOpacity>
        : null}
        <Filters />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flickBtnContainer: {
    marginRight: '15%',
    marginLeft: '15%',
    width: '70%',
    backgroundColor: '#34495E',
  },
  flickBtn: {
    borderRadius: 3,
    fontFamily: 'bangers', 
    fontSize: 56,
    color: '#FFF',
    textAlign: 'center',
  },
});