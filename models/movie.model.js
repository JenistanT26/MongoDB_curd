import { model, Schema } from "mongoose";


//writing the schema
const movieSchema=new Schema({
    title:String,
    desc:String
})

//creating the model
const movie=model('Movie',movieSchema)

export default movie;
