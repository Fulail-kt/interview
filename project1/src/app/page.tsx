'use client'

import axios from 'axios'
import React,{useState} from 'react'

export default function Home() {
  
  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPasword] = useState('')
  const handleSubmit = async () => {

    try {
      const res= axios.post('localhost:3001/api/v1/create',{name,email,password})
    } catch (error) {
      
      console.log(error)
    }


  }



  return (
    <>
      <div className='w-full flex justify-center items-center h-screen'>

        <form action="" onSubmit={handleSubmit} className='bg-white p-2 rounded-md '>
          <h1 className=' text-center text-black bg-purple-400 w-full'>User Data</h1>
          <div className='p-10 gap-y-8 flex flex-col'>
            <div>
              <input className='border border-purple-400 rounded-md p-3' onChange={(e:any)=>setPasword(e.target.value)} type="text" placeholder='name' />
            </div>
            <div><input className='border border-purple-400 rounded-md p-3' onChange={(e:any)=>setEmail(e.target.value)} type="text" placeholder='email' /></div>
            <div><input className='border border-purple-400 rounded-md p-3' onChange={(e:any)=>setPasword(e.target.value)} type="text" placeholder='password' /></div>
            <div className='flex justify-center w-full'><button className='bg-purple-400 rounded-full px-4 py-3' type='submit'>Submit</button></div>
          </div>
        </form>

      </div>
    </>
  );
}
