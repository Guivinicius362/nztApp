import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BottomNavigation, {
	FullTab,
} from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Sidebar } from '../../components';
import { Drawer } from 'native-base';
import Feed from './components/feed';
import { Actions } from 'react-native-router-flux';
import Cla from './components/Cla';

class HomeView extends Component {
	state = {
		activeTab: 'feed',
		index: 0,
		clas: [
			{
				name: 'Haddock',
				url: 'https://s3.us-east-2.amazonaws.com/nzt-m/haddock.png',
			},
			{
				name: 'RedPuz',
				url: 'https://s3.us-east-2.amazonaws.com/nzt-m/red.png',
			},
			{
				name: 'Natator',
				url: 'https://s3.us-east-2.amazonaws.com/nzt-m/natator.png',
			},
			{
				name: 'Night Shark',
				url: 'https://s3.us-east-2.amazonaws.com/nzt-m/night.png',
			},
		],
		selectedOne: {
			name: 'Haddock',
			url: 'https://s3.us-east-2.amazonaws.com/nzt-m/haddock.png',
		},
	};

	changeCla = direction => {
		if (direction === 'R') {
			if (this.state.index === 3)
				return this.setState({ index: 0, selectedOne: this.state.clas[0] });
			const novoIndex = this.state.index + 1;
			this.setState({
				index: novoIndex,
				selectedOne: this.state.clas[novoIndex],
			});
		} else {
			if (this.state.index === 0)
				return this.setState({ index: 3, selectedOne: this.state.clas[3] });
			const novoIndex = this.state.index - 1;
			this.setState({
				index: novoIndex,
				selectedOne: this.state.clas[novoIndex],
			});
		}
	};

<<<<<<< HEAD
  render() {
    console.log(this.props);
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={
          <Sidebar navigator={this.navigator} singOut={this.props.singOut} />
        }
        onClose={() => this.closeDrawer()}
      >
        <Container style={{ backgroundColor: '#006972', height: '100%' }}>
          <View
            style={{
              backgroundColor: '#005158',
              height: '8%',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Icon
              onPress={() => this.openDrawer()}
              name="bars"
              size={25}
              style={{ marginLeft: '02%' }}
              color="#fff"
            />
          </View>
          <View style={{ height: '84.4%' }}>
            {this.state.activeTab === 'events' ? (
              <Events />
            ) : (
              <Clas
                imageBackground={this.props.selectedOne}
                changeSelected={this.props.changeSelected}
              />
            )}
          </View>

          <BottomNavigation
            onTabPress={newTab => this.setState({ activeTab: newTab.key })}
            renderTab={this.renderTab}
            tabs={this.props.tabs}
          />
        </Container>
      </Drawer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

=======
	renderIcon = icon => ({ isActive }) => (
		<Icon size={24} color="white" name={icon} />
	);

	renderTab = ({ tab, isActive }) => (
		<FullTab
			isActive={isActive}
			key={tab.key}
			label={tab.label}
			renderIcon={this.renderIcon(tab.icon)}
		/>
	);
	closeDrawer = () => {
		this.drawer._root.close();
	};
	openDrawer = () => {
		this.drawer._root.open();
	};

	render() {
		return (
			<Drawer
				ref={ref => {
					this.drawer = ref;
				}}
				content={<Sidebar navigator={this.navigator} />}
				onClose={() => this.closeDrawer()}
			>
				<View style={{ height: '100%', backgroundColor: '#3d3d3d' }}>
					<View
						style={{
							height: '8%',
							flex: 1,
							width: '60%',

							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Icon
							onPress={() => this.openDrawer()}
							name="bars"
							size={30}
							color="#fff"
							style={{ paddingLeft: 10 }}
						/>
						<Text
							style={{ fontFamily: 'Fredoka', color: 'white', fontSize: 20 }}
						>
							Nazateen
						</Text>
					</View>
					<View style={{ height: '84.5%' }}>
						{this.state.activeTab === 'feed' ? (
							<Feed />
						) : (
							<Cla
								selectedOne={this.state.selectedOne.url}
								changeCla={this.changeCla}
							/>
						)}
					</View>

					<BottomNavigation
						onTabPress={newTab => this.setState({ activeTab: newTab.key })}
						renderTab={this.renderTab}
						tabs={tabs}
					/>
				</View>
			</Drawer>
		);
	}
}

const tabs = [
	{
		key: 'feed',
		icon: 'rss',
		label: 'Eventos',
		barColor: '#333',
		pressColor: 'rgba(255, 255, 255, 0.16)',
	},
	{
		key: 'clas',
		icon: 'comments',
		label: 'Clãs',
		barColor: '#333',
		pressColor: 'rgba(255, 255, 255, 0.16)',
	},
];
>>>>>>> 9db239a102ab18c7132c6e1ea6b35be9bc81d6c8
export default HomeView;
