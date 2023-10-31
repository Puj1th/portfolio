import React from 'react'
import './Home.css'
function Home() {
  return (
    <div>
      <div className='main'>
        <div className='left'>
          <h1>
            Hey ! I am <br />
            <span className='name'>Pujith Paida</span>
          </h1>
          <p>A 20 year old undergrad interested in completely dissimilar skills right from cooking to programming .</p>
        </div>
        <div className='right'>
          <img src="https://img.freepik.com/premium-vector/serious-concentrated-developer-programming-sites_316839-2216.jpg" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Home