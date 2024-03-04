import React from 'react'
import './btnBox.css'

function BtnBox({children}) {
  return (
    <div className='buttonBox'>{children}</div>
  )
}

export default BtnBox