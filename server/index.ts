import express from 'express'
import { routes } from './routes/routes.ts'
import cors from 'cors'
import databaseConnection from './config/db.ts'

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({origin:'localhost:3000'}))

app.use('/api/v1/',routes)
app.listen('3001',()=>{
    databaseConnection()
    console.log('server connected')
})