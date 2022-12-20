import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

/**
 * @TODO: Define all the actions (creator) for the users state
 */
const ActionType = {
  RECIEVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECIEVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ id, name, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ id, name, password });
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
