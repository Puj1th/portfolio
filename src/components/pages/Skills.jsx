import React from 'react'
import Card from './Card'
import './Card.css'
function Skills() {
  return (
    <div>
      <div className='set'>
      < Card Title='Python'Image="https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png"/>
      < Card Title='Java'Image="https://assets-global.website-files.com/6377ac1a39ff1e65214224e5/64d26ed75e39c4c591e01c3d_64c96a772785e6db2d21f850_java-logo-transparent-free-png.png"/>
      
      < Card Title='R'Image="https://cdn.icon-icons.com/icons2/1381/PNG/512/rstudio_94807.png"/>
      < Card Title='Html'Image="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"/>
      < Card Title='Css'Image="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"/>
      </div>
      <div className='set'>
      
      < Card Title='Js'Image="https://logowik.com/content/uploads/images/3799-javascript.jpg"/>
      < Card Title='React'Image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png"/>
      < Card Title='ML'Image="https://img.freepik.com/premium-vector/brain-technology-unique-logo_414847-335.jpg?w=826"/>
      < Card Title='Data Structures'Image="https://hackr.io/tutorials/learn-data-structures-algorithms/logo/logo-data-structures-algorithms?ver=1587721467"/>
      < Card Title='OS'Image="https://southernword.org/wp-content/uploads/2018/01/placeholder-300x300.png"/>
      </div>
    </div>
  )
}

export default Skills