import { connect } from 'react-redux';
import Notes from './Notes';
import { editNote, updateNoteRequest, deleteNoteRequest } from './NoteActions';

const mapDispatchToProps = {
	editNote,
	updateNote: updateNoteRequest,
	deleteNote: deleteNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);

