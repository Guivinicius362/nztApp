import React, { Component } from 'react';
import LoginScreen from './loginScreen';
import { Auth } from 'aws-amplify';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import { AsyncStorage } from 'react-native';
class RegisterController extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: undefined,
			password: undefined,
			errors: {
				email: false,
				password: false,
			},
			awsError: undefined,
			loading: false,
		};
	}
	onChangeText = ({ text, name }) => {
		this.setState({
			[name]: text,
			errors: {
				email: false,
				password: false,
			},
			awsError: undefined,
		});
	};

	verificaDados = () => {
		const { email, password } = this.state;
		if ((email && password) !== undefined) return this.signIn();
		const state = [
			{ value: email, rawName: 'email' },
			{ value: password, rawName: 'password' },
		];
		const novoState = state.filter(elem => elem.value === undefined);
		novoState.forEach(elem => {
			this.setState(
				(previousState, currentProps) => {
					return {
						...previousState,
						errors: {
							...previousState.errors,
							[elem.rawName]: true,
						},
					};
				},
				() => console.log(this.state),
			);
		});
	};
	_storeData = async () => {
		try {
			console.log('tentando salvar dado');
			await AsyncStorage.setItem('UserToken', '123456789');
		} catch (error) {
			console.log(error);
		}
	};
	signIn = () => {
		const { email, password } = this.state;
		console.log(email, password);
		this.setState({ loading: true });
		Auth.signIn(email, password)
			.then(data => {
				this.setState({ loading: false });
				this._storeData();
				Actions.home();
			})
			.catch(err => this.setState({ awsError: err.message }));
	};

	render() {
		const { onChangeText, verificaDados } = this;

		return (
			<LoginScreen
				loading={this.state.loading}
				onChange={onChangeText}
				signUp={verificaDados}
				errors={this.state.errors}
				awsError={this.state.awsError}
			/>
		);
	}
}
export default RegisterController;
