import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

class MaskTextInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
	}

	render() {
		return (
			<View style={{ marginBottom: this.props.error ? 0 : 15 }}>
				<View style={styles.container}>
					<TextInputMask
						key={this.props.name}
						style={styles.textInput}
						placeholder={this.props.placeholder}
						type={this.props.type}
						placeholderTextColor="#d3d3d3"
						value={this.state.text}
						options={this.props.options}
						onChangeText={text => {
							this.setState({ text }, () =>
								this.props.onChange({ text, name: this.props.name }),
							);
						}}
					/>
				</View>
				{this.props.error && (
					<Text
						style={{
							color: '#FF9494',
							fontFamily: 'Fredoka',
							marginTop: 5,
							paddingLeft: '02%',
						}}
					>
						Preencha esse campo!
					</Text>
				)}
			</View>
		);
	}
}

export default MaskTextInput;

const styles = StyleSheet.create({
	container: {
		borderBottomColor: '#98a6f7',
		borderBottomWidth: 2,
	},
	textInput: {
		height: 40,
		color: 'white',
		fontSize: 17,
		paddingLeft: '02%',
		fontFamily: 'Fredoka',
	},
});
