import Carousel from 'react-native-snap-carousel';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

const horizontalMargin = 20;
const slideWidth = 280;
const sliderWidth = 300;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 100;

export default class MyCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      entries: this.props.data
    }
  }

  componentDidUpdate() {
    if(this.state.entries !== this.props.data) {
      this.setState({entries: this.props.data})
    }
  }

  _renderItem ({item, index}) {
      return (
          <View style={styles.slide}>
              <Text style={styles.title}>{item.title}</Text>
              {item.img_url ? 
                <View style={styles.imageContainer}>
                  <ImageBackground imageStyle={styles.image} style={styles.image} source={{uri: item.img_url}}/>
                </View>
                :
                <View style={styles.imageContainer}>
                  <ImageBackground imageStyle={styles.image} style={styles.image} source={{uri: 'https://placehold.it/600x600'}}/>
                </View>
              }
          </View>
      );
  }


  render () {
      return (
        <View style={styles.view}>
          <Carousel
            data={this.state.entries}
            renderItem={this._renderItem}
            windowSize={1}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
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
  slide: {
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
 
  },
  image: {
    borderRadius: 5,
    height: 300,
    width: 300,
  },
  view: {
    height: '50%',
  },
  imageContainer: {
    borderRadius: 25,
  }
});
