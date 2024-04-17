
import React,{useEffect, useState} from 'react'

import { gql, useQuery,useMutation } from '@apollo/client';


export default function Login() {

  
  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPasword] = useState('')


  console.log(data)

  const handleSubmit = async () => {

    try {
    
    } catch (error) {
      
      console.log(error)
    }


  }



  return (
    <>
      <div className='w-full flex justify-center items-center h-screen'>

        <form action="" onSubmit={handleSubmit} className='border border-purple-500 overflow-hidden rounded-3xl '>
          <div className='w-full flex justify-center items-center '>
              <h1 className='  text-center px-3 py-1.5  flex justify-center items-center mt- w-full bg-purple-500 '>Login</h1>
          </div>
          <div className='p-8 gap-y-8 flex flex-col'>
        
            <div><input className='border border-purple-500 rounded-md p-2' onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' /></div>
            <div><input className='border border-purple-500 rounded-md p-2' onChange={(e)=>setPasword(e.target.value)} type="text" placeholder='password' /></div>
          </div>
            <div className='flex mb-3 justify-center w-full'><button className='bg-purple-500 rounded-full px-4 py-1.5' type='submit'>Submit</button></div>
        </form>

      </div>
    </>
  );
}
