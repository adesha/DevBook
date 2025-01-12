const express=require('express')
const connectDB=require('../config/database')
const app=express()


connectDB().then(()=>{
    console.log('Database connected')
    
    app.listen(3000,()=>{
        console.log('Server is running')
    })

}).catch((err)=>{
    console.error('Database connection failed')
})
