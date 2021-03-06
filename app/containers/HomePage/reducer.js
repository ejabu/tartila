/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
} from './constants';
//
// The initial state of the App
const initialState = fromJS({
  messages: [],

});



function chatReducer(state=initialState, action=undefined) {
  switch (action.type) {

    case "FETCH_MESSAGES":
      return state.update('messages', messages => messages.concat(action.messages));
    default:
      return state;
  }
}
export default chatReducer;
