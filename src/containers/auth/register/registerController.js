import React, { Component } from 'react';
import RegisterScreen from './registerScreen';
import ImagePicker from 'react-native-image-picker';
import { Auth } from 'aws-amplify';
import { RNS3 } from 'react-native-aws3';
import { Actions } from 'react-native-router-flux';
import secret from '../../../../secrets/s3AcessKey.json';
class RegisterController extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fileUploaded: false,
			file: undefined,
			name: undefined,
			email: undefined,
			phone: undefined,
			birthdate: undefined,
			awsError: undefined,
			errors: {
				name: false,
				email: false,
				phone: false,
				birthdate: false,
				password: false,
			},
			loading: false,
			password: undefined,
			profileUrl:
				'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8wGzbqNXi-GIcZLlzwDjJTGLRRVK8XDheU3zHnfGq-DTdWmHaPFmMIHl5ZA',
		};
	}
	onChangeText = ({ text, name }) => {
		this.setState({
			[name]: text,
			awsError: undefined,
			photoError: undefined,
			errors: {
				name: false,
				email: false,
				phone: false,
				birthdate: false,
				password: false,
			},
		});
	};

	verificaDados = () => {
		const { name, email, password, phone, birthdate, file } = this.state;
		if (file === undefined) return this.setState({ photoError: true });
		if ((name && email && password && phone && birthdate && file) !== undefined)
			return this.signUp();
		const state = [
			{ value: name, rawName: 'name' },
			{ value: email, rawName: 'email' },
			{ value: password, rawName: 'password' },
			{ value: phone, rawName: 'phone' },
			{ value: birthdate, rawName: 'birthdate' },
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

	signUp = () => {
		const {
			file,
			name,
			email,
			password,
			phone,
			birthdate,
			fileUploaded,
		} = this.state;
		const x = phone.replace(/\D/g, '');
		const phone_number = `+55${x}`;
		this.setState({ loading: true });
		!fileUploaded
			? RNS3.put(file, optionsS3).then(response => {
					console.log(response.headers.Location);
					this.setState(
						{ fileUploaded: true, profileUrl: response.headers.Location },
						() => {
							Auth.signUp({
								username: email,
								password,
								attributes: {
									name,
									picture: response.headers.Location,
									email,
									phone_number,
									birthdate,
								},
							})
								.then(data => {
									console.log(data);
									this.setState({ loading: false });
									Actions.home();
								})
								.catch(err => this.setState({ awsError: err.message }));
						},
					);
			  })
			: Auth.signUp({
					username: email,
					password,
					attributes: {
						name,
						picture: this.state.profileUrl,
						email,
						phone_number,
						birthdate,
					},
			  })
					.then(data => {
						console.log(data);
						this.setState({ loading: false });
						Actions.home();
					})
					.catch(err => this.setState({ awsError: err.message }));
	};

	getImage = () => {
		ImagePicker.showImagePicker(options, response => {
			this.setState({
				file: {
					uri: response.uri,
					name: response.fileName,
					type: response.type,
				},
				profileUrl: response.uri,
				photoError: undefined,
			});
		});
	};

	render() {
		const { getImage, onChangeText, verificaDados } = this;
		const { profileUrl, errors, awsError, photoError, loading } = this.state;
		return (
			<RegisterScreen
				getImage={getImage}
				profileUrl={profileUrl}
				errors={errors}
				onChange={onChangeText}
				awsError={awsError}
				loading={loading}
				photoError={photoError}
				signUp={verificaDados}
			/>
		);
	}
}
export default RegisterController;
const options = {
	title: 'Escolha uma foto',
	takePhotoButtonTitle: 'Tirar uma foto',
	chooseFromLibraryButtonTitle: 'Escolher uma foto',
};
const optionsS3 = {
	keyPrefix: 'uploads/',
	bucket: 'nzt-m',
	region: 'us-east-2',
	accessKey: secret.accessKey,
	secretKey: secret.secretKey,
	successActionStatus: 201,
};
