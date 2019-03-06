import React from 'react';
import {
	View,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
	Image,
	Text,
	ActivityIndicator,
} from 'react-native';
import {
	DatePicker,
	CustomTextInput,
	MaskTextInput,
	Button,
	Picker,
} from '../../../components';

const RegisterScreen = props => (
	<ScrollView style={styles.boxOne}>
		{console.log(props)}
		<View style={styles.boxContainer}>
			<TouchableOpacity
				style={{
					flex: 1,
					justifyContent: 'center',
					flexDirection: 'row',
					marginBottom: 30,
				}}
				onPress={() => props.getImage()}
			>
				<Image style={styles.avatar} source={{ uri: props.profileUrl }} />
			</TouchableOpacity>
			{props.photoError && (
				<Text
					style={{
						textAlign: 'center',
						fontFamily: 'Fredoka',
						color: '#FF9494',
						fontSize: 18,
					}}
				>
					Selecione uma foto
				</Text>
			)}
			<CustomTextInput
				placeholder="Nome"
				onChange={props.onChange}
				name="name"
				error={props.errors['name']}
			/>
			<CustomTextInput
				placeholder="Email"
				onChange={props.onChange}
				name="email"
				error={props.errors['email']}
			/>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'center',
				}}
			>
				<DatePicker
					callBack={date => props.onChange({ text: date, name: 'birthdate' })}
					error={props.errors['birthdate']}
				/>
			</View>
			<MaskTextInput
				placeholder="Número de telefone"
				onChange={props.onChange}
				type={'cel-phone'}
				name="phone"
				error={props.errors['phone']}
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
					style={{ marginTop: 10 }}
				/>
			) : (
				<Button
					text="Criar conta!"
					height={40}
					bgColor="#8ec259"
					onPress={() => props.signUp()}
					marginTop={10}
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
export default RegisterScreen;

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
		borderWidth: 2,
		borderColor: 'rgba(0,0,0,0.2)',
		alignItems: 'center',
		justifyContent: 'center',
		width: 150,
		height: 150,
		backgroundColor: '#fff',
		borderRadius: 100,
	},
});
