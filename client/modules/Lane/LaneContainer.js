import { connect } from 'react-redux';
import Lane from './Lane';
import { createNoteRequest } from '../Note/NoteActions';
import { editLane, updateLaneRequest, deleteLaneRequest } from './LaneActions';

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => {
      return { ...state.notes[noteId] };
    }),
  };
};

const mapDispatchToProps = {
	editLane,
  addNote: createNoteRequest,
  updateLane: updateLaneRequest,
  deleteLane: deleteLaneRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lane);
