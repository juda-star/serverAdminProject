const express = require('express')
const cors =require('cors')
const app = express();
const {authPage,authCourse} = require('./Controller/userMiddlewares')
app.use(cors())

app.use(express.json())

app.get('/home',(req,res)=>{
res.json('Home Page');
});

app.get('/course/grades',authPage(['teacher','admin']),(req,res)=>{
    res.json({
        yehooda:60,
        kasia:70,
        hen:80,
        suanesh:90
    });
});

app.get('course/:number',authCourse,(req,res)=>{
    const courseNumber=req.params.number;
    res.json(`you have prmission to see course ${courseNumber}`)
});


app.listen(8080,()=>{
    console.log('server is live on port 8080');
})

