import { login, putAccessToken, getOwnProfile, removeAccessToken } from "../../utils/api";

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

async function asyncSetAuthUser({
  email,
  password,
}) {
  return async (dispatch) => {
    const { accessToken }
      = await login({
        email,
        password,
      });
    putAccessToken(
      accessToken,
    );
    const authUser
      = await getOwnProfile();
    dispatch(
      setAuthUserActionCreator(
        authUser,
      ),
    );
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    removeAccessToken();

    dispatch(
      unsetAuthUserActionCreator(),
    );
  };
}

export {
    ActionType,
    setAuthUserActionCreator,
    asyncSetAuthUser,
    asyncUnsetAuthUser,
    unsetAuthUserActionCreator,
}