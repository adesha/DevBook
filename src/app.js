const express=require('express')

const app=express()

// this is wrong (order matters)
// app.use('/user',(req,res)=>{
//     res.send('Testing')
// })

// this will only handle GET call to /user
app.get('/user',(req,res)=>{
    res.send({firstName:'John',lastName:'Doe'})
})

app.post('/user',(req,res)=>{
    res.send('Saved to DB')
})

app.delete('/user',(req,res)=>{
    res.send('Deleted')
})

// this will match all the http method api calls to /test
app.use('/test',(req,res)=>{
    res.send('Testing')
})

// app.use((req,res)=>{
//     res.send("Hello")
// })


app.listen(3000,()=>{
    console.log('Server is running')
})