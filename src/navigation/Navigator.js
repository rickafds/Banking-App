import { createSwitchNavigator } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login, Home } from '@pages';
import { Routes } from './routes';

export const Unauthenticated = createStackNavigator(
  { [Routes.LOGIN]: { screen: Login } },
  { initialRouteName: Routes.LOGIN, navigationOptions: { header: null } }
);

export const Authenticated = createStackNavigator(
  { [Routes.HOME]: { screen: Home } },
  { initialRouteName: Routes.HOME, navigationOptions: { header: null } }
);

export const initNavigator = keepConnected =>
  createStackNavigator(
    {
      RootStack: createSwitchNavigator(
        {
          [Routes.UNAUTHENTICATED_AREA]: Unauthenticated,
          [Routes.AUTHENTICATED_AREA]: Authenticated,
        },
        {
          initialRouteName: keepConnected
            ? Routes.AUTHENTICATED_AREA
            : Routes.UNAUTHENTICATED_AREA,
        }
      ),
    },
    {
      initialRouteName: 'RootStack',
      navigationOptions: { header: null },

      cardStyle: {
        backgroundColor: 'transparent',
        opacity: 1,
      },
    }
  );
