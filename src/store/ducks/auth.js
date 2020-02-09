//Action Types

export const Types = {
  LOGIN_REQUEST: 'auth/REQUEST',
  LOGIN_SUCESS: 'auth/SUCESS',
  LOGIN_ERROR: 'auth/FAILED',
};

//Reducer

const initialState = {
  IsLoginRequest: false,
  IsLoginSucess: false,
  IsLoginFailed: false,
  Token: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        IsLoginRequest: true,
      };
    case Types.LOGIN_SUCESS:
      return {
        IsLoginSucess: true,
        IsLoginRequest: false,
      };

    default:
      return state;
  }
}
