import { connect } from 'react-redux';
import Notes from './Notes';
import { editNote, updateNoteRequest, deleteNoteRequest, moveWithinLane } from './NoteActions';

const mapDispatchToProps = {
  editNote,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
  moveWithinLane,
};

export default connect(
  null,
  mapDispatchToProps,
)(Notes);

