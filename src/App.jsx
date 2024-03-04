import React from 'react'
import './App.css'
import Wrap from './component/wrapper/wrapper.jsx'
import Screen from './component/screen/screen.jsx'
import BtnBox from './component/btnBox/btnBox.jsx'
import Button from './component/button/button.jsx'

function App() {
  const [displayValue, setDisplayValue] = React.useState('0');
  const [clickedEqual, setClickedEqual] = React.useState(false);

  const handleButtonClick = (value) => {
    if (value === 'del') {
        setDisplayValue('0');
    } else if (value === '=') {
        try {
            const result = (eval(displayValue).toString());
            setDisplayValue(result);
            setClickedEqual(true);
        } catch (error) {
            setDisplayValue('Error');
        }
    } else {
        if (clickedEqual) {
            setDisplayValue(value.toString());
            setClickedEqual(false);
        } else {
            setDisplayValue((prev) => {
                if (prev === '0' || prev === 'Error') {
                    return value.toString();
                } else {
                    return prev.toString() + value.toString();
                }
            });
        }
    }    
};
  

  return (
    <>
    <Wrap>
      <Screen displayValue={displayValue}/>
      <BtnBox>
      <Button onClick={handleButtonClick}/>
      </BtnBox>
      </Wrap>
    </>
  )
}

export default App
