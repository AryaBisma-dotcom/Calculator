import React from 'react'
import './App.css'
import Wrap from './component/wrapper/wrapper.jsx'
import Screen from './component/screen/screen.jsx'
import BtnBox from './component/btnBox/btnBox.jsx'

function App() {
  const [displayValue, setDisplayValue] = React.useState('0');
  
  return (
    <>
    <Wrap>
        {
            // Menampilkan hasil dan aritmatika
        }
            <Screen displayValue={displayValue}/>
        {
            // Menampilkan button button aritmatika
        }
            <BtnBox displayValue={displayValue} setDisplayValue={setDisplayValue} />
    </Wrap>
    </>
  )
}

export default App
