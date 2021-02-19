import { combineReducers } from '@reduxjs/toolkit';

import ui from './ui';
import login from './login';
import appoints from './appoints';
import doctors from './doctors';

export default combineReducers({
  ...ui,
  ...login,
  ...appoints,
  ...doctors,
});
