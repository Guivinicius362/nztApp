import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const CustomTextInput = props => (
	<View>
		<View
			style={{
				borderBottomColor: '#98a6f7',
				borderBottomWidth: 2,
				marginBottom: props.error ? 0 : 15,
			}}
		>
			<TextInput
				secureTextEntry={props.secureTextEntry}
				style={styles.textInput}
				placeholderTextColor="#d3d3d3"
				placeholder={props.placeholder}
				multiline={false}
				onChangeText={text => props.onChange({ text, name: props.name })}
			/>
		</View>
		{props.error && (
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
export default CustomTextInput;

const styles = StyleSheet.create({
	container: {},
	textInput: {
		height: 40,
		color: 'white',
		fontSize: 17,
		paddingLeft: '02%',
		fontFamily: 'Fredoka',
	},
});
