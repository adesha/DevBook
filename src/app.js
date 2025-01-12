const express=require('express')
const connectDB=require('./config/database')
const app=express()
const User=require('./models/user')

app.post('/signup',async(req,res)=>{

    const user=new User({
        firstName:'Mike',
        lastName:'Ross',
        email:'mikeross@mail.com',
        password:'mike123'
    })

    await user.save()
    
    res.send('User Added successfully')
})

connectDB().then(()=>{
    console.log('Database connected')
    
    app.listen(3000,()=>{
        console.log('Server is running')
    })

}).catch((err)=>{
    console.error('Database connection failed')
})
