import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE, CREATE_NOTES, EDIT_NOTE, MOVE_WITHIN_LANE } from './NoteActions';

import omit from 'lodash/omit';

const initialState = {};

function moveNotes(array, sourceNoteId, targetNoteId) {
  const sourceIndex = array.indexOf(sourceNoteId);
  const targetIndex = array.indexOf(targetNoteId);
  const arrayCopy = [...array];

  arrayCopy.splice(targetIndex, 0, arrayCopy.splice(sourceIndex, 1)[0]);
  return arrayCopy;
}

export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
    case UPDATE_NOTE:
      return { ...state, [action.note.id]: action.note };
    case EDIT_NOTE: {
      const note = { ...state[action.id], editing: true };
      return { ...state, [action.id]: note };
    }
    case DELETE_NOTE:
      return omit(state, action.noteId);
    case CREATE_NOTES:
      return { ...action.notes };
    case MOVE_WITHIN_LANE: {
      const newLane = { ...state[action.laneId] };
      newLane.notes = moveNotes(newLane.notes, action.sourceId, action.targetId);

      return { ...state, [action.laneId]: newLane };
    }
    default:
      return state;
  }
}
