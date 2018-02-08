import { connect } from 'react-redux';
import Lane from './Lane';
import { createNoteRequest } from '../Note/NoteActions';
import { editLane, updateLaneRequest, deleteLaneRequest, moveBetweenLanes, removeFromLane, pushToLane, changeLanesRequest } from './LaneActions';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../Kanban/itemTypes';

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => {
      return { ...state.notes[noteId] };
    }),
  };
};

const mapDispatchToProps = {
  editLane,
  moveBetweenLanes,
  removeFromLane,
  pushToLane,
  changeLanesRequest,
  addNote: createNoteRequest,
  updateLane: updateLaneRequest,
  deleteLane: deleteLaneRequest,
};

const noteTarget = {
  drop(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const { id: noteId, laneId: sourceLaneId } = sourceProps;
    if (targetProps.lane.id !== sourceLaneId) {
      targetProps.changeLanesRequest(sourceLaneId, targetProps.lane.id, noteId);
    }
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DropTarget(ItemTypes.NOTE, noteTarget, (dragConnect) => ({
    connectDropTarget: dragConnect.dropTarget(),
  }))
)(Lane);
