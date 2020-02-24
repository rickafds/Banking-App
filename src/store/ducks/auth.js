// Action Types

export const Types = {
  LOGIN_REQUEST: 'auth/REQUEST',
  LOGIN_SUCESS: 'auth/SUCESS',
  LOGIN_ERROR: 'auth/FAILED',
};

// Reducer

const initialState = {
  IsLoginRequest: false,
  IsLoginSucess: false,
  IsLoginFailed: false,
  user_data: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { IsLoginRequest: true };
    case Types.LOGIN_SUCESS:
      return {
        IsLoginSucess: true,
        IsLoginRequest: false,
        user_data: action.payload.data,
      };

    case Types.LOGIN_ERROR:
      return {
        IsLoginRequest: false,
        IsLoginFailed: true,
      };

    default:
      return state;
  }
}

// action creators

export function login(cpf, password) {
  return {
    type: Types.LOGIN_REQUEST,
    payload: {
      cpf,
      password,
    },
  };
}

export function loginSucess(data) {
  return {
    type: Types.LOGIN_SUCESS,
    payload: data,
  };
}

export function loginError() {
  return { type: Types.LOGIN_ERROR };
}
