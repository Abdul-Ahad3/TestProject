import React from 'react'
import {Link} from 'react-router-dom'

function LogReg() {
  return (
    <table className='signInPage'>
        <tbody>
            <tr>
                <td className='container'>
                    <h1 className='lrTitle'>Login</h1>
                    <label className='lrLabel'>Email:</label>
                    <input className='lrIn' placeholder='abc123' type='email'/>
                    <br />
                    <label className='lrLabel'>Password: </label>
                    <input className='lrIn' type='password'/>
                    <br />
                    <button className='logButton'><Link to='/home'>Login</Link></button>
                </td>
                <td className='container'>
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
                    <button className='regButton'><Link to='/home'>Register</Link></button>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default LogReg