const express=require('express')

const app=express()

// this is wrong (order matters)
// app.use('/user',(req,res)=>{
    //route handler
//     res.send('Testing')
// })

// this will only handle GET call to /user
// app.get('/user',(req,res)=>{
//     res.send({firstName:'John',lastName:'Doe'})
// })

// app.post('/user',(req,res)=>{
//     res.send('Saved to DB')
// })

// app.delete('/user',(req,res)=>{
//     res.send('Deleted')
// })

// // this will match all the http method api calls to /test
// app.use('/test',(req,res)=>{
//     res.send('Testing')
// })

app.use('/user',
    (req,res,next)=>{
        //if no res.send then it will go infinite loop
        console.log('response')
        //res.send("response")
        //returns 'response'
        next()//goes to next route handler
    },
    (req,res)=>{
        console.log('response2')
        res.send("response2")
    }
)


app.listen(3000,()=>{
    console.log('Server is running')
})