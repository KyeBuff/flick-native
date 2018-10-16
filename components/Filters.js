import React, {Component} from 'react';
import filters from '../static/filters.json';
import Filter from './Filter';
import { StyleSheet, View } from 'react-native';


export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 0,
		}
		this.onPress = this.onPress.bind(this);
	}

	onPress(active) {
		this.setState({active})
	}

	render() {
		return (
			<View style={ styles.filters }>
				{filters.map((filter, i) => (
					<Filter 
						key={i} 
						active={this.state.active === i}
						filter={filter} 
						onPress={() => this.onPress(i)}
					/>
				))}
			</View>
		)
	}
}
	
);

const styles = StyleSheet.create({
  filters: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});