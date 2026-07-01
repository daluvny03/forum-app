import { getAllUsers } from '../../utils/api'

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS'
}

function receiveUsersActionCreator (users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users
    }
  }
}

function asyncReceiveUsers () {
  return async (dispatch) => {
    const users = await getAllUsers()
    dispatch(receiveUsersActionCreator(users))
  }
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncReceiveUsers
}
