const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://tyrellcoleman97:Jamesbond@cluster0.vgl0f8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


app.listen(3001, () => {console.log("server is listening on port 3001")}) 