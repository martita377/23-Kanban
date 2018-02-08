/* eslint-disable consistent-return */
import Note from '../models/note';
import Lane from '../models/lane';
import uuid from 'uuid';

export function addNote(req, res) {
  const { note, laneId } = req.body;

  if (!note || !note.task || !laneId) {
    return res.status(400)
      .end();
  }

  const newNote = new Note({
    task: note.task,
  });

  newNote.id = uuid();
  newNote.save((err, saved) => {
    if (err) {
      res.status(500)
        .send(err);
    }
    Lane.findOne({ id: laneId })
      .then(lane => {
        lane.notes.push(saved);
        return lane.save();
      })
      .then(() => {
        res.json(saved);
      });
  });
}

export function deleteNote(req, res) {
  Note.findOne({ id: req.params.noteId }).exec((err, note) => {
    if (err) {
      res.status(500)
        .send(err);
    }
    if (note) {
      Lane.findOne({ notes: note._id }).exec((error, lane) => {
        if (error) {
          res.status(500)
            .send(err);
        }
        lane.notes.pull(note);
        return lane.save();
      });
    } else {
      res.status(500)
        .send(err);
    }
  });
}

export function updateTask(req, res) {
  Note.findOneAndUpdate({ id: req.body.id }, { task: req.body.task }, { new: true })
    .exec((err, updated) => {
      if (err) {
        return res.status(500)
          .send(err);
      }
      res.json(updated);
    });
}

