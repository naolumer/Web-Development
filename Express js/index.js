import express from "express";
import students from './routes/student.js'
// import teachers from './routes/teachers.js'
import userCredentials from "./middlewares/logs.js";

const app = express();

// app.use('/students',students)
// app.use('/teachers',teachers)

// HTTP REQUEST METHODS
// GET => Retrieve Data
// POST => Create/Insert Data
// PUT => Completely Update Data
// PATCH => Partially Update Data
//  DELETE => Delete Data
// ALL  => Any HTTP request method

// Advanced Routing (String Pattern Path)
// app.get("/ab?cd",(req,res)=> {
//     res.send("If the user hits (acd) or (abcd) then this will run")
// })


// app.get("/", (req, res)=>{
//     res.send("Welcome to Express js")
// })

// // basic routing 
// app.get("/about",(req,res)=>{
//     res.send("<h1>ABOUT ME</h1>")
// });
// // Double Callback
// app.get('/double-cb',(req,res,next)=>{
//     console.log("first server up!");
//     next();
// }, (req,res)=> {
//     res.send("second callback")
// })
// const cb1 = (req,res,next) => {
//     console.log("first callback");
//     next();
// }
// const cb2 = (req,res) => {
//     console.log("second callback");
//     res.send("Array of callbacks")
// }
// const cb3 = (req,res) => {
//     console.log("third callback");
    
// }
// app.get("/array-cb",[cb1,cb2,cb3])

// putting it all together

// const cb1 = (req,res,next)=>{
//     console.log("callback first")
//     next();
// }
// const cb2 = (req,res,next)=>{
//     console.log("callback second")
//     next();
// }

// app.get("/all",[cb1,cb2],(req,res,next) => {
//     res.send("callback third")
// })

// 👇Ugly Code

// app.get("/student",(req,res)=> {
//     res.send("All students")
// })
// app.post("/student",(req,res)=> {
//     res.send("Add students")
// })
// app.put("/student",(req,res)=> {
//     res.send("Update student")
// })
// app.delete("/student",(req,res)=> {
//     res.send("Delete student")
// })

// 👇Refactorod Code

// app
//     .route('/student')
//     .get((req,res)=>res.send("All students"))
//     .post((req,res)=>{res.send("add student")})
//     .put((req,res)=>{res.send("update student")})

// Route Params
// app.get("/products/iphone/:model/:build", (req,res)=>{
//     const {model,build} = req.params;
//     res.send(`Iphone ${model} Pro Max with ${build} build`)
// })

// app.param("id",(req,res,next,id)=>{
//     console.log(`id:${id}`)
//     next()
// })
// app.get('/user/:id',(req,res)=> {
//     console.log("this is user id path");
//     res.send("response is ok!")
// })

// Express middleware's


// app.get('/', userCredentials,(req,res)=>{
//     res.send('<h1>Helo admin</h1>')
// })

// we can also use app.use(userCredentials) with app.get('/',(req,res)=>{} for any routes that exist)
app.listen(5000,()=>console.log("Server Up!"))

