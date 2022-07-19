import { Action } from '@reduxjs/toolkit';
import * as actionTypes from './constants';
const defaltState = {
  userInfo: {}
};

const reducer = (state = defaltState, action: Action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USER_INFO:
      return state;
    default:
      return state;
  }
};

export default reducer;
