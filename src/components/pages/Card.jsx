import React from 'react'
import './Card.css'
import SkillsContent from './SkillsContent'
import {Link,Routes,Route} from 'react-router-dom'
function Card(props) {
  return (
    <div>
       <Routes >
            <Route to={props.Title} element={<SkillsContent Title={props.Title} Image={props.Title}/>}></Route>
      </Routes>
    <div className='card'>
        <div>
          <Link to={props.Title}>
            <img src={props.Image} alt="image" height='300px' width='300px' />
          </Link>
             </div>
        <div>
            <p>{props.Title}</p>
        </div>
    </div>
    </div>
  )
}

export default Card