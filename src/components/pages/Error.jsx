import React from 'react'
import './Error.css'


function Error() {
  return (
    <div className='main'>
        <div className='left'>
            <img src="https://st2.depositphotos.com/7954644/11762/v/600/depositphotos_117627328-stock-illustration-attention-warning-icon-on-a.jpg" alt="" />
        </div>
        <div className='right'>
          <h1>
            404 : Not Found
          </h1>
          <p>oops..there's nothing to see here</p>
        </div>
    </div>
  )
}

export default Error