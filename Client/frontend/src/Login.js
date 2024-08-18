import React from 'react'
import './App.css'

function Login() {
  return (
    <div className='container'>
        <h1 className='lrTitle'>Login</h1>
        <label className='lrLabel'>Email:</label>
        <input className='lrIn' placeholder='abc123' type='email'/>
        <br />
        <label className='lrLabel'>Password: </label>
        <input className='lrIn'/>
        <br />
        <button className='logButton'>Login</button>
    </div>
  )
}

export default Login;