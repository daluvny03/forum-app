import { getLeaderboards } from "../../utils/api";

const ActionType = {
    RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
}
function setLeaderboardActionCreator(leaderboard) {
  return {
    type: ActionType.RECEIVE_LEADERBOARD,
    payload: {
      leaderboard,
    },
  };
}

function asyncPopulateLeaderboard() {
  return async (dispatch) => {
    const leaderboard = await getLeaderboards();
    dispatch(
      setLeaderboardActionCreator(
        leaderboard,
      ),
    );
  };
}

export {
    ActionType,
    setLeaderboardActionCreator,
    asyncPopulateLeaderboard,
}
