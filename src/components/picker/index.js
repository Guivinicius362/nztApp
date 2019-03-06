import React, { Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

export default class CustomPicker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.placeholder,
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Picker
					selectedValue={this.state.value}
					style={{
						height: 35,
						width: 100,
						color: '#d3d3d3',
						transform: [{ scaleX: 1.15 }, { scaleY: 1.15 }],
					}}
					itemStyle={styles.textInput}
					textStyle={{ fontSize: 30 }}
					onValueChange={(itemValue, itemIndex) =>
						this.setState({ value: itemValue }, () =>
							this.props.onChange({ text: itemValue, name: 'gender' }),
						)
					}
				>
					{this.props.items.map(elem => (
						<Picker.Item label={elem.label} value={elem.value} />
					))}
				</Picker>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: '58.5%',
		borderBottomColor: '#00edff',
		borderBottomWidth: 2,
		paddingBottom: 20,
		fontSize: 30,
	},
	textInput: {
		backgroundColor: 'white',
		position: 'absolute',
		height: 80,
		color: 'white',
		fontSize: 30,
		paddingLeft: '02%',
		fontFamily: 'MontserratRegular',
	},
});
