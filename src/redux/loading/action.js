import { setAuthUserActionCreator, unsetAuthUserActionCreator } from '../auth/action';
import { getOwnProfile } from '../../utils/api';

const ActionType = {
    SET_IS_PRELOAD: 'SET_IS_PRELOAD',
}

function setIsPreloadActionCreator(isPreload){
    return {
        type: ActionType.SET_IS_PRELOAD,
        payload: {
            isPreload,
        },
    };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      const authUser = await getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch {
      dispatch(unsetAuthUserActionCreator());
    }
    dispatch(setIsPreloadActionCreator(false));
  };
}

export {
    ActionType,
    setIsPreloadActionCreator,
    asyncPreloadProcess,
}