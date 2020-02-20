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

    case Types.LOGIN_ERROR:
      return {
        IsLoginRequest: false,
        IsLoginSucess: false,
        IsLoginFailed: true,
      };

    default:
      return state;
  }
}

//action creators

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
