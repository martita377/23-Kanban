import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Note.css';

class Note extends Component {
  render() {
    return;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Note.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
