const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const SubModel = require('./models/subscription')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://tyrellcoleman97:Jamesbond@cluster0.vgl0f8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.get('/getSubs', (req, res) => {
    SubModel.find().then(subs => res.json(subs)).catch(err => res.json(err))
})


app.listen(3001, () => {console.log("server is listening on port 3001")}) 