import express, { Request, Response } from 'express'
import userModal from '../model/userModel.ts'

export const routes=express.Router()


routes.post('/create',async(req:Request,res:Response)=>{

    try {
        const {email,name,password}=req.body

        if(!email || !name || !password ){
            return res.json({success:false,message:'field is missing'})
        }

        const created= await userModal.create(req.body)

        res.json({success:true,message:'user created successfully'})

    } catch (error) {
        console.log((error as Error).message)
        res.status(500).json({sucess:false,message:'server error'})
    }
})
routes.get('/allUsers',async(req:Request,res:Response)=>{
    try {

        const users= await userModal.find()

        res.json({success:true,message:'user retrive',users})

    } catch (error) {
        console.log((error as Error).message)
        res.status(500).json({sucess:false,message:'server error'})
    }
})


routes.patch('/update',async(req:Request,res:Response)=>{

    try {
        const {email,name,password}=req.body
        const id=req.params.id

        if(!email && !name && !password ){
            return res.json({success:false,message:'field is missing'})
        }

        const created= await userModal.findByIdAndUpdate({_id:id},{name:name,email:email,password:password})

        res.json({success:true,message:'user updated successfully'})

    } catch (error) {
        console.log((error as Error).message)
        res.status(500).json({sucess:false,message:'server error'})
    }
})