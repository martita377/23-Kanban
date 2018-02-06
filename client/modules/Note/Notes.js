import React, { PropTypes } from 'react';
import Note from './Note.js';
import styles from './Note.css';

import Edit from '../../components/Edit';

const Notes = ({ notes, laneId, editNote, updateNote, deleteNote }) => {
  return (
  <ul className={styles.Notes}>
    {notes.map((note, id) =>
      <Note
        id={note.id}
        key={note.id}
      >
        <Edit
          editing={note.editing}
          value={note.task}
          onValueClick={() => editNote(note.id)}
          onUpdate={(task) => updateNote({
            ...note,
            task,
            editing: false,
          }
          )}
          onDelete={() => deleteNote(note.id, laneId)}
        />
      </Note>
    )}
  </ul>
  );
};

Notes.propTypes = {
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
  editing: PropTypes.bool,
};

export default Notes;
