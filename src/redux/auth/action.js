import { login, putAccessToken, getOwnProfile, removeAccessToken, register } from "../../utils/api";
import { showLoadingActionCreator, hideLoadingActionCreator } from "../loading/action";

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
  };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoadingActionCreator());
    try {
      console.log('asyncSetAuthUser called with:', { email, password });
      const data = await login({ email, password });
      console.log('login response data:', data);
      const { token } = data;
      putAccessToken(token);
      const authUser = await getOwnProfile();
      console.log('authUser:', authUser);
      dispatch(setAuthUserActionCreator(authUser));
    } finally {
      dispatch(hideLoadingActionCreator());
    }
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoadingActionCreator());
    try {
      await register({
        name,
        email,
        password,
      });
    } finally {
      dispatch(hideLoadingActionCreator());
    }
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    removeAccessToken();
    dispatch(unsetAuthUserActionCreator());
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
  unsetAuthUserActionCreator,
  asyncRegisterUser,
}