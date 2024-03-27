import mongoose from "mongoose";

const databaseConnection=()=>{
   
    const db=mongoose.connect('').then(()=>{
        console.log('database connected')
    }).catch((e:any)=>{
        console.log('connection error',e.message)
    })
}

export default databaseConnection