// Action Types

export const Types = {
  FORGOT_REQUEST: 'forgot/REQUEST',
  FORGOT_SUCESS: 'forgot/SUCESS',
  FORGOT_ERROR: 'forgot/FAILED',
};

// Reducer
const initialState = {
  isForgotRequest: false,
  isForgotSucess: false,
  isForgotFailed: false,
};

export default function reducer(state = initialState, action) {
  const { FORGOT_REQUEST, FORGOT_SUCESS, FORGOT_ERROR } = Types;
  switch (action.type) {
    case FORGOT_REQUEST:
      return { isForgotRequest: true };
    case FORGOT_SUCESS:
      return {
        isForgotRequest: false,
        isForgotSucess: true,
      };
    case FORGOT_ERROR:
      return {
        isForgotFailed: true,
      };

    default:
      return state;
  }
}

// action

export function forgot(email) {
  return {
    type: Types.FORGOT_REQUEST,
    email,
  };
}

export function forgotSucess() {
  return {
    type: Types.FORGOT_SUCESS,
  };
}

export function forgotError() {
  return { type: Types.FORGOT_ERROR };
}
