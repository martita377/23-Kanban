import { connect } from 'react-redux';
import Lane from './Lane';
import { createNote, createNoteRequest } from '../Note/NoteActions';
import { updateLaneRequest, deleteLaneRequest } from './LaneActions';

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => {
      return { ...state.notes[noteId] };
    }),
  };
};

const mapDispatchToProps = {
	                    addNote: createNoteRequest,
	                    updateLane: updateLaneRequest,
  deleteLane: deleteLaneRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lane);
