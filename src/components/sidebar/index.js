import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Auth } from 'aws-amplify';
import { Actions } from 'react-native-router-flux';

class SideBar extends Component {
  state = {
    userInfo: {
      birthdate: '',
      email: 'admin@gmail.com',
      name: '',
      phone_number: '+5519995407134',
      picture:
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8wGzbqNXi-GIcZLlzwDjJTGLRRVK8XDheU3zHnfGq-DTdWmHaPFmMIHl5ZA',
    },
  };
  componentDidMount() {
    var t = this.getItem();
    t
      ? Auth.currentUserInfo()
          .then(data => this.setState({ userInfo: data.attributes }))
          .catch(err => {
            Actions.auth();
          })
      : Actions.auth();
  }
  removeItem = async () => {
    try {
      await AsyncStorage.removeItem('UserToken');
      Actions.auth();
    } catch (error) {
      console.log(error);
    }
  };
  getItem = async () => {
    try {
      return await AsyncStorage.getItem('UserToken');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: '#3d3d3d', flex: 1, justifyContent: 'flex-start' },
        ]}
      >
        <View style={{ flex: 1, marginTop: '05%' }}>
          <Image
            style={{
              borderWidth: 2,
              borderColor: 'rgba(0,0,0,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 180,
              height: 180,
              backgroundColor: '#fff',
              borderRadius: 100,
            }}
            source={{ uri: this.state.userInfo.picture }}
          />
          <Text
            style={{
              color: 'white',
              fontFamily: 'Fredoka',
              fontSize: 24,
              marginTop: 10,
              textAlign: 'center',
            }}
          >
            {this.state.userInfo.name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            Auth.signOut()
              .then(data => {
                Auth.signOut()
                  .then(() => this.removeItem())
                  .catch(er => console.log(er));
              })
              .catch(err => console.log(err));
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Icon name="sign-out" size={30} color="white" />
            <Text
              style={{
                fontFamily: 'Fredoka',
                fontSize: 20,
                color: 'white',
                paddingLeft: 20,
              }}
            >
              Sair
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default SideBar;
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
