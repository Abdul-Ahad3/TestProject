import React from 'react'
import Header from './Header'

function Home() {
  return (
    <div className='home'>
      <Header />
      <h1>WELCOME</h1>
      <div className='attendance'>
        <h2>Attendance</h2>
      </div>
      <div className='leave'> 
        <h2>Apply for leave</h2>
        <button className='applyButton'>Apply</button>
      </div>
    </div>
  )
}

export default Home;