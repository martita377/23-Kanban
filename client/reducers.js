import { combineReducers } from 'redux';

import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';
import lanes from './modules/Lane/LaneReducer';
import notes from './modules/Note/NoteReducer';

export default combineReducers({
  app,
  lanes,
  notes,
  intl,
});
