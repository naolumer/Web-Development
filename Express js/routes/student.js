import express from "express";
const router = express.Router();

router.get('/all',(req,res)=>{
    res.send("All students")
})
router.post('/create',(req,res)=>{
    res.send("sign in new student")
})
router.put('/update',(req,res)=>{
    res.send("update student ID")
})
router.delete('/delete',(req,res)=>{
    res.send("remove student from the db")
})

export default router;