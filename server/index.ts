import express from 'express'
import {ApolloServer} from '@apollo/server'
import {gql} from 'apollo-server-express'
import { expressMiddleware } from '@apollo/server/express4';
import userModal from './model/userModel';
import databaseConnection from './config/db';
import cors from 'cors'

const app=express()

const typeDefs = gql`
 type User {
    id: ID,
    name: String,
    password: String,
    email: String
 }

 input UserInput {
    name: String
    password: String
    email: String
 }

 type Query {
    getUsers: [User]
    getUser(id: ID): User!
 }

 type Mutation {
    createUser(user: UserInput): User!
 }
`;

const resolvers = {
 Query: {
    getUsers: async () => {
      return await userModal.find();
    },
    getUser: async (_: any, { email }: any) => {
      return await userModal.findOne({email:email});
    },
 },
 Mutation:{
    createUser:async (_:any,{user}:any)=>{
        const {email,password,name}=user
        if(!email||!password||!name){
            throw new Error('field missing')
        }
        const existingUser=await userModal.findOne({email:email})
        if (existingUser) {
            throw new Error('User already exists');
          }
    
          const newUser = new userModal({
            ...user
          });
    
          return await newUser.save();

    }
 }
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(3001,async()=>{
    await server.start()
    app.use('/graphql',cors({origin:'*'}),expressMiddleware(server))
    databaseConnection()
console.log("server running")
})