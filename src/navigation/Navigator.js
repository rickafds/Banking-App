import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { connect } from 'react-redux';
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers';
import { Login, Home, ForgotPassword as Forgot, ForgotUpdate } from '@pages';
import { white } from '../utils/colors';

const middleware = createReactNavigationReduxMiddleware(
  state => state.navigation
);

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
        headerTransparent: true,
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTitle: false,
        title: 'Login',
      },
    },
    ForgotPassword: {
      screen: Forgot,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: {
          backgroundColor: { white },
          borderBottomWidth: 0,
        },
        headerTitle: false,
      },
    },
    ForgotUpdate: {
      screen: ForgotUpdate,
      navigationOptions: {
        headerTransparent: true,
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTitle: false,
      },
    },
  },
  {
    initialRouteName: 'ForgotUpdate',
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

const AppWithNavigationState = createReduxContainer(initNavigator, 'root');

const mapStateToProps = state => ({
  state: state.navigation,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

const container = createAppContainer(initNavigator);

export { container, AppNavigator, middleware };
