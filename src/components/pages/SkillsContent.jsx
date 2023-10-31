import React from 'react'
import './Card.css'
import { Link,Routes,Route } from 'react-router-dom'
import SkillsData from './SkillsData.json'

function SkillsContent() {
  return (
    <div>
        <div className='btn'>
          <button className='backbtn'>
          <Link to="/skills">
            <img src="https://cdn-icons-png.flaticon.com/128/507/507257.png?ga=GA1.1.650698357.1697128761" alt="backicon" />
            </Link>          
          </button>
        </div>
    </div>
  )
}

export default SkillsContent