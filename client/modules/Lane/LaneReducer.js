import { CREATE_LANE, CREATE_LANES, UPDATE_LANE, DELETE_LANE, EDIT_LANE } from './LaneActions';
import { DELETE_NOTE, CREATE_NOTE } from '../Note/NoteActions';

import omit from 'lodash/omit';

const initialState = {};

export default function lanes(state = initialState, action) {
  switch (action.type) {
    case CREATE_LANE:
    case UPDATE_LANE:
      return { ...state, [action.lane.id]: action.lane };
    case EDIT_LANE:
      {
        const lane = { ...state[action.id], editing: true };
        return { ...state, [action.id]: lane };
      }
    case CREATE_LANES:
      return { ...action.lanes };
    case DELETE_NOTE:
      {
        const newLane = { ...state[action.laneId] };
        newLane.notes = newLane.notes.filter(noteId => noteId !== action.noteId);

        return { ...state, [action.laneId]: newLane };
      }
    case CREATE_NOTE:
      {
        const newLane = { ...state[action.laneId] };
        newLane.notes = newLane.notes.concat(action.note.id);

        return { ...state, [action.laneId]: newLane };
      }
    case DELETE_LANE:
      {
        return omit(state, action.laneId);
      }
    default:
      return state;
  }
}
