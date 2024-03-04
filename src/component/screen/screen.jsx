import React from 'react'
import './screen.css' 

function screen({displayValue}) {
  return (
    <div className='Screen'>
      {displayValue}
    </div>
  )
}

export default screen