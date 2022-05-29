import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/login.css'
function Login() {
  
  const [user,setUser]=useState(false)

  const navigate=useNavigate()
  function handleClick(){
    alert('Welcome to Loffin!')
      navigate('/home')
      setUser(true)
      console.log('Logged in!')
  }
  function handleSignup(){
    navigate('/signup')
  }
  return (
    <div>
      {/* background video */}
        
        <div className='video'>
        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F08%2F20%2FGettyImages-1165807395-2000.jpg&q=60" className='logimage'/>
        </div>
      
      
        <h1 className='logo'>Loffin</h1>

        <div className='container'>
          <div className='content'>
            <h2  className='loginheading'>
              Login
            </h2>
            <form onSubmit={handleClick}  >
            <h3 id='email' >Email</h3>
            <input type='email' required/>
            <h3>Password</h3>
            <input type='password' required/><br/>
            <button type='submit' >Login</button>
            <div style={{padding:'5px'}}/>
            <h4 style={{fontFamily:'serif',color:'grey'}}>Create an account?<p className='signup' onClick={handleSignup}>Sign up!</p></h4>
            </form>
          </div>

        </div>
    </div>
  )
}

export default Login