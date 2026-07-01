import { setAuthUserActionCreator, unsetAuthUserActionCreator } from '../auth/action'
import { getOwnProfile } from '../../utils/api'

const ActionType = {
  SHOW_LOADING: 'SHOW_LOADING',
  HIDE_LOADING: 'HIDE_LOADING',
  SET_IS_PRELOAD: 'SET_IS_PRELOAD'
}

function showLoadingActionCreator () {
  return {
    type: ActionType.SHOW_LOADING
  }
}

function hideLoadingActionCreator () {
  return {
    type: ActionType.HIDE_LOADING
  }
}

function setIsPreloadActionCreator (isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload
    }
  }
}

function asyncPreloadProcess () {
  return async (dispatch) => {
    try {
      const authUser = await getOwnProfile()
      dispatch(setAuthUserActionCreator(authUser))
    } catch {
      dispatch(unsetAuthUserActionCreator())
    }
    dispatch(setIsPreloadActionCreator(false))
  }
}

export {
  ActionType,
  showLoadingActionCreator,
  hideLoadingActionCreator,
  asyncPreloadProcess
}
