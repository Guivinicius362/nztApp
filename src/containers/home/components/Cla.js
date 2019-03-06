import React, { Component } from 'react';
import { ImageBackground, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class Cla extends Component {
	render() {
		return (
			<ImageBackground
				source={{ uri: this.props.selectedOne }}
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'row',
					paddingLeft: 20,
					paddingRight: 20,
				}}
			>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<Icon
						name="arrow-left"
						size={30}
						color="white"
						onPress={() => this.props.changeCla('L')}
					/>
					<Icon
						name="arrow-right"
						size={30}
						color="white"
						onPress={() => this.props.changeCla('R')}
					/>
				</View>
			</ImageBackground>
		);
	}
}

export default Cla;
