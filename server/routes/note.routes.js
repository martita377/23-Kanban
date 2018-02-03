import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new Note
router.route('/notes').post(NoteController.addNote);

// Delete a note
router.route('/notes/:noteId').delete(NoteController.deleteNote);

// Edit a note
router.route('/notes/:noteId/task').post(NoteController.updateTask);

export default router;
