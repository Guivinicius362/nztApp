import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { View, Text } from 'react-native';
export default class MyDatePicker extends Component {
	constructor(props) {
		super(props);
		this.state = { date: '' };
	}

	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					marginBottom: this.props.error ? 0 : 15,
				}}
			>
				<DatePicker
					style={{ width: '100%' }}
					mode="date"
					date={this.state.date}
					placeholder="Data de Nascimento"
					format="DD/MM/YYYY"
					minDate="01/01/1900"
					maxDate={moment().format('DD/MM/YYYY')}
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					showIcon={false}
					placeholderTextColor="white"
					customStyles={{
						dateInput: {
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'flex-start',
							borderWidth: 0,
							borderBottomColor: '#98a6f7',
							borderBottomWidth: 2,
							paddingLeft: '02%',
						},
						dateText: {
							fontFamily: 'Fredoka',
							fontSize: 18,
							color: 'white',
						},
						placeholderText: {
							fontSize: 18,
							color: '#d3d3d3',
							fontFamily: 'Fredoka',
						},
					}}
					onDateChange={date => {
						this.setState({ date: date }, () => this.props.callBack(date));
					}}
				/>
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
