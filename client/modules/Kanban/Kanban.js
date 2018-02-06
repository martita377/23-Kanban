import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';

import styles from '../Lane/Lane.css';

const Kanban = (props) => (
  <div className={styles.Container}>
    <button
      className={styles.AddLane}
      onClick={() => props.createLane({
        name: 'New lane',
      })}
    >Add lane</button>
    <div className={styles.LaneContainer}>
      <Lanes lanes={props.lanes} />
    </div>
  </div>
);

Kanban.need = [() => { return fetchLanes(); }];

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func,
};

const mapStateToProps = (state) => ({
  lanes: Object.values(state.lanes),
});

const mapDispatchToProps = {
  createLane: createLaneRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);

