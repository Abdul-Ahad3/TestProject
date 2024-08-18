import React from 'react'
import './App.css'

function Register() {
  return (
    <div className='container'>
        <h1 className='lrTitle'>Register</h1>
        <label className='lrLabel'>Name: </label>
        <input className='lrIn' placeholder='John Doe' type='text'/>
        <br />
        <label className='lrLabel'>E-mail: </label>
        <input className='lrIn' type='email' placeholder='xyz123@xmail.com'/>
        <br />
        <label className='lrLabel'>Password: </label>
        <input className='lrIn' type='password'/>
        <br />
        <button className='regButton'>Register</button>
    </div>
  )
}

export default Register;