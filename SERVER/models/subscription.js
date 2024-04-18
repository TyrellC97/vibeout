const mongoose = require('mongoose')

const SubSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
     },
     subscribeDate: {
        type : Date,
        required: true,
        default: Date.now
     }
    
})

const SubModel = mongoose.model("subscribers", SubSchema)
module.exports = SubModel