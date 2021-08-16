const express = require('express')
const app = express();
app.use(cors())
app.listen(8080,()=>{
    console.log('server is live on port 8080');
})