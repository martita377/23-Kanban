import mongoose from 'mongoose';
import Note from './note';

const Schema = mongoose.Schema;

const laneSchema = new Schema({
  name: { type: 'String', required: true },
  notes: [{ type: Schema.ObjectId, ref: 'Note', required: true }],
  id: { type: 'String', required: true, unique: true },
}, { usePushEach: true });

function populateNotes(next) {
  this.populate('notes');
  next();
}

function deleteLaneWithNotes(next) {
  const notes = this.notes;
  notes.forEach(element => {
    Note.findByIdAndRemove(element._id)
    .exec();
  });
  next();
}

laneSchema.pre('find', populateNotes);
laneSchema.pre('findOne', populateNotes);
laneSchema.pre('remove', deleteLaneWithNotes);

export default mongoose.model('Lane', laneSchema);
