import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class WelcomeScreen extends Component {
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('UserToken');
      if (value !== null) {
        // We have data!!
        console.log(value);
        return Actions.home();
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this._retrieveData();
  }
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={{ uri: 'https://s3.us-east-2.amazonaws.com/nzt-m/teste.png' }}
      >
        <View
          style={{
            width: '100%',
            height: '10%',
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',

              height: '02%',
            }}
          >
            <TouchableOpacity
              style={{
                width: '50%',
                flex: 1,
                justifyContent: 'center',
                backgroundColor: '#006972',
                borderWidth: 2,
                borderRadius: 4,
                borderColor: 'rgba(0,0,0,0.2)',
              }}
              onPress={() => Actions.register()}
            >
              <Text style={styles.registeText}>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '50%',
                flex: 1,
                backgroundColor: '#355154',
                justifyContent: 'center',
                borderWidth: 2,
                borderRadius: 4,
                borderColor: 'rgba(0,0,0,0.2)',
              }}
              onPress={() => Actions.login()}
            >
              <Text style={styles.registeText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  welcomeText: {
    fontFamily: 'Guthen',
    color: '#00edff',
    fontSize: 80,
  },
  registeText: {
    textAlign: 'center',
    fontFamily: 'Fredoka',
    color: '#fff',
    fontSize: 22,
  },
});
