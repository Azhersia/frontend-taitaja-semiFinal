'use client'
import React, {useState} from 'react'
import { fetcher } from '@/lib/fetcher'
import { useRouter } from 'next/navigation'

export default function login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()
    const handleSubmit= async (e)=>{
        e.preventDefault()
        try {
          const response = await fetcher.post('/api/login/', { email, password });
          console.log(response) // Debugging
          if (response.status === 200) {
            window.location.href = '/admin';
          }
        } catch (error) {
          if (error.response && error.response.status === 401) {
            setError("Invalid email or password");
        } else {
            console.log(error)
            setError("Something went wrong. Please try again.");
        }
      }
    }
  return (
<div className='loginContainer'>
<div className='loginElements'>
    <h3 className='loginTitle'>Kirjaudu sisään</h3>

    <form onSubmit={handleSubmit} className='loginInputContainer'>
        <input className='loginInput' type="text" placeholder="Syötä käyttäjätunnus" onChange={({target})=>setEmail(target.value)} />
        <input className='loginInput' type="text" placeholder="Syötä salasana" onChange={({target})=>setPassword(target.value)} />

        <button className='loginButton buttonHover'>Kirjaudu sisään</button>
   </form>

    {error && <p className='error'>{error}</p>}
</div>
</div>
  )
}
