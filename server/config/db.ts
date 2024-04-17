import mongoose from "mongoose";

const databaseConnection=()=>{
   
    const db=mongoose.connect('mongodb://127.0.0.1:27017/grapQL').then(()=>{
        console.log('database connected')
    }).catch((e:any)=>{
        console.log('connection error',e.message)
    })
}

export default databaseConnection