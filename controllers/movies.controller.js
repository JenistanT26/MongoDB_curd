import Movie from "../models/movie.model.js"


export const getMovies =(req,res)=>{

    res.send('hello world')
}

export const deleteMovies= (req,res)=>{
    res.send('deleted')
}

export const postMovies= async(req,res)=>{
    console.log(req.body)

    //validate the data
     const newmovie= new Movie({
        title:req.body.title,
        desc:req.body.desc
    })

    try{
        const movie=await newmovie.save()
        return res.status(201).json(movie)
    }
    catch(err){
        return res.status(500).json(err)
    }
    
}

export const putMovies=(req,res)=>{
    res.send('put')
}