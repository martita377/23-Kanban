import uuid from 'uuid';



// Export Constants
export const CREATE_LANE = 'CREATE_LANE';
export const UPDATE_LANE = 'UPDATE_LANE';
export const DELETE_LANE = 'DELETE_LANE';
// Export Actions
export function createLane(lane) {
  return {
    type: CREATE_LANE,
    lane: {
      id: uuid(),
      ...lane,
    }
  };
}

export function updateLane(lane) {
  return {
    type: UPDATE_LANE,
    lane,
  };
}

export function deleteLane(laneId) {
  return {
    type: DELETE_LANE,
    laneId
  };
}