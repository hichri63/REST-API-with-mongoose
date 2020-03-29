const express = require('express')
const mongoose = require ('mongoose')
const contact = require('./routes/cantact')
 



const app = express()
app.use(express.json())





const mongo_URI = "mongodb+srv://slim123:slim123@cluster0-tklna.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongo_URI,{useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if (err){
        throw err
    }
    else {
        console.log("data is connected")
    }
})

app.use('/api', contact)

app.listen(8080, (err) => {
    if(err) {
         throw err
        }
    else {
        console.log("server running on port 8080")
    }
  })