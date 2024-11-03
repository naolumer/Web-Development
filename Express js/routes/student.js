import express from "express";
import {
    allStudents,
    CreateStudent,
    UpdateStudent,
    DeleteStudent
} from '../controllers/student.js'

const router = express.Router();

router.get('/all',allStudents)
router.post('/create',CreateStudent)
router.put('/update',UpdateStudent)
router.delete('/delete',DeleteStudent)

export default router;