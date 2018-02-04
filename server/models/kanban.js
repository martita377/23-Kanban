import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const kanbanSchema = new Schema({

},
	{ usePushEach: true }
);

export default mongoose.model('Kanban', kanbanSchema);
