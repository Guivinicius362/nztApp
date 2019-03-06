import React from 'react';
import {
	View,
	ScrollView,
	StyleSheet,
	Text,
	Image,
	ActivityIndicator,
} from 'react-native';
import { CustomTextInput, Button } from '../../../components';

const LoginScreen = props => (
	<ScrollView style={styles.boxOne}>
		<View style={styles.boxContainer}>
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Image
					style={styles.avatar}
					source={{
						uri: 'https://s3.us-east-2.amazonaws.com/nzt-m/Nazateen.png',
					}}
				/>
				<Text
					style={{
						marginTop: '20%',
						marginBottom: '10%',
						fontFamily: 'Fredoka',
						color: 'white',
						fontSize: 22,
					}}
				>
					Que bom te ver de novo! :)
				</Text>
			</View>

			<CustomTextInput
				placeholder="Email"
				onChange={props.onChange}
				error={props.errors['email']}
				name="email"
			/>
			<CustomTextInput
				secureTextEntry={true}
				placeholder="Senha"
				onChange={props.onChange}
				name="password"
				error={props.errors['password']}
			/>
			{props.loading ? (
				<ActivityIndicator
					size="small"
					color="#8ec259"
					style={{ marginTop: 30 }}
				/>
			) : (
				<Button
					text="Login"
					height={40}
					bgColor="#8ec259"
					marginTop={20}
					onPress={() => props.signUp()}
				/>
			)}

			{props.awsError && (
				<Text
					style={{
						textAlign: 'center',
						fontFamily: 'Fredoka',
						color: '#FF9494',
						fontSize: 18,
					}}
				>
					{props.awsError}
				</Text>
			)}
		</View>
	</ScrollView>
);
export default LoginScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	boxContainer: {
		flex: 1, // 1:3
		justifyContent: 'center',
	},
	boxOne: {
		flex: 5, // 5:6
		backgroundColor: '#3d3d3d',
		padding: 20,
	},
	avatar: {
		justifyContent: 'center',
		width: 280,
		height: 140,
	},
});
