import express from 'express';
import moviesRoute from './rotues/movies.route.js'
import connectDB from './lib/db.js';

const app=express();

const port=4000;

app.use(express.json())

connectDB();

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/movies',moviesRoute)



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})