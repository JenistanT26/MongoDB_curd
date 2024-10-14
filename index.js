import express from 'express';
import moviesRoute from './rotues/movies.route.js'

const app=express();

const port=4000;

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/movies',moviesRoute)



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})