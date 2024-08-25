import React from 'react'
import Header from './Header'

function Home() {
  return (
    <div className='home'>
      <Header />
      <h1>WELCOME</h1>
      <div className='attendance'>Check attendance</div>
      <div className='leave'> Apply for leave</div>
    </div>
  )
}

export default Home;