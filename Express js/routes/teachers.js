import express from "express";
const router = express.Router();

router.get('/all',(req,res)=>{
    res.send("All teachers")
})
router.post('/create',(req,res)=>{
    res.send("sign in new teacher")
})
router.put('/update',(req,res)=>{
    res.send("update teacher ID")
})
router.delete('/delete',(req,res)=>{
    res.send("remove teacher from the db")
})

export default router;