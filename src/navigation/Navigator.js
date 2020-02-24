import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Login, Home } from '@pages';

const Authenticated = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      header: null,
    },
  }
);

const Unauthenticated = createStackNavigator(
  {
    LoginScreen: {
      screen: Login,
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTitle: false,
      },
    },
  },
  {
    initialRouteName: 'LoginScreen',
    navigationOptions: {
      header: null,
      headerTransparent: true,
    },
  }
);

const initNavigator = createSwitchNavigator(
  {
    Auth: {
      screen: Authenticated,
    },
    Unau: {
      screen: Unauthenticated,
    },
  },
  {
    initialRouteName: 'Unau',
  }
);

export default createAppContainer(initNavigator);
