
const allStudents = (req,res)=>{
    res.send("All students")};


const CreateStudent = (req,res)=>{
    res.send("create/add student")};
    
const UpdateStudent = (req,res)=>{
    res.send("update student")};
    
const DeleteStudent = (req,res)=>{
    res.send("delete student")};

export {allStudents,CreateStudent,UpdateStudent,DeleteStudent}