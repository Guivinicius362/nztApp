import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from '../containers/auth/login/loginController';
import RegisterScreen from '../containers/auth/register/register';
import WelcomeScreen from '../containers/auth/welcome/welcomeScreen';
import HomeScreen from '../containers/home/home';
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="auth" initial hideNavBar>
          <Scene key="welcome" component={WelcomeScreen} initial hideNavBar />
          <Scene key="login" component={Login} title="Bem vindo!" hideNavBar />
          <Scene key="register" component={RegisterScreen} />
        </Scene>
        <Scene key="home" hideNavBar>
          <Scene key="feed" component={HomeScreen} />
        </Scene>
      </Scene>
    </Router>
  );
};
export default RouterComponent;
