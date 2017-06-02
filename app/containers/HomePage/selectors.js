/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);
const makeSelectMessages = () => createSelector(
  selectHome,
  (homeState) => homeState.get('messages')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectMessages,
};
