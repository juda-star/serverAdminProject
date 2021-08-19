const express = require('express')
const cors =require('cors')
const app = express();
const userRouter = require('./Router/userRouter')
// const {authPage} = require('./Controller/userMiddlewares')
const db = require("./DB/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.on("error", () => {
    console.log("connection error");
  });
app.use(cors())

app.use(express.json())

// app.get('/home',(req,res)=>{
// res.send('Home Page');
// });

app.get('/api/admin',userRouter,(req,res)=>{
res.send('Home Page');
});

// app.get('/course/grades',authPage(['teacher','admin']),(req,res)=>{
//     res.send({
//         yehooda:60,
//         kasia:70,
//         hen:80,
//         suanesh:90
//     });
// });

// app.get('course/:number',(req,res)=>{
//     const courseNumber=req.params.number;
//     res.send(`you have prmission to see course ${courseNumber}`)
// });


app.listen(8080,()=>{
    console.log('server is live on port 8080');
})

