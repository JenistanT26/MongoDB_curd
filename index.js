import express from 'express';

const app=express();

const port=4000;

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/movies',(req,res)=>{
    
}
)

app.delete('/movies/id',(req,res)=>{
    
}
)

app.post('/movies',(req,res)=>{
    
}
)

app.put('/movies/id',(req,res)=>{
    
}
)





app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})