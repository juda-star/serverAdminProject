const express = require('express')
const cors =require('cors')
const app = express();
app.use(cors())
app.listen(8080,()=>{
    console.log('server is live on port 8080');
})