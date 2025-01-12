const mongoose = require('mongoose')

const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://adesha:bJpLAP9KoxPe3kjA@namastenodejs.kk0cg.mongodb.net/devBook')
}

module.exports=connectDB