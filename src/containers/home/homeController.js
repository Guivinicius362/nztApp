import React, { Component } from 'react';

// Components
import HomeView from './homeView';
import { Auth } from 'aws-amplify';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
class homeController extends Component {
  state = {
    selectedOne: 'https://s3.us-east-2.amazonaws.com/nzt-m/haddock.png',
    index: 0,
    clas: [
      'https://s3.us-east-2.amazonaws.com/nzt-m/haddock.png',
      'https://s3.us-east-2.amazonaws.com/nzt-m/natator.png',
      'https://s3.us-east-2.amazonaws.com/nzt-m/night.png',
      'https://s3.us-east-2.amazonaws.com/nzt-m/red.png',
    ],
    tabs: [
      {
        key: 'events',
        icon: 'calendar',
        label: 'Eventos',
        barColor: '#005158',
        pressColor: 'rgba(255, 255, 255, 0.16)',
      },
      {
        key: 'chat',
        icon: 'comment',
        label: 'Chat',
        barColor: '#005158',
        pressColor: 'rgba(255, 255, 255, 0.16)',
      },
    ],
  };
  singOut = () => {
    Auth.signOut()
      .then(data => this.clearLocalStoage())
      .catch(err => console.log(err));
  };
  clearLocalStoage = async () => {
    try {
      console.log('apagando dado');
      await AsyncStorage.removeItem('UserToken');
      Actions.auth();
    } catch (error) {
      console.log(error);
    }
  };
  changeSelected = direction => {
    if (direction === 'right') {
      if (this.state.index === 3)
        return this.setState({ selectedOne: this.state.clas[0], index: 0 });
      const novoIndex = this.state.index + 1;
      this.setState({
        selectedOne: this.state.clas[novoIndex],
        index: this.state.index + 1,
      });
    } else {
      if (this.state.index === 0)
        return this.setState({ selectedOne: this.state.clas[3], index: 3 });
      const novoIndex = this.state.index - 1;
      this.setState({
        selectedOne: this.state.clas[novoIndex],
        index: this.state.index - 1,
      });
    }
  };

  render() {
    return (
      <HomeView
        selectedOne={this.state.selectedOne}
        changeSelected={this.changeSelected}
        tabs={this.state.tabs}
        singOut={this.singOut}
      />
    );
  }
}

export default homeController;
