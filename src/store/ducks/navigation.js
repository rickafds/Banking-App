import { NavigationActions } from 'react-navigation';

import { container } from '../../navigation/Navigator';

const tempNavState = container.router.getStateForAction(
  NavigationActions.navigate({ routeName: 'LoginScreen' })
);
const initialNavState = container.router.getStateForAction(tempNavState);

export default function reducer(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'AlterScreen':
      nextState = container.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.screen })
      );
      break;

    default:
      nextState = container.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

export function AlterScreen(screen) {
  return {
    type: 'AlterScreen',
    screen,
  };
}
