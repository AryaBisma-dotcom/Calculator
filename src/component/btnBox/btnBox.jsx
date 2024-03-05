import React from "react"

import { ARITMATIC_LISTS } from "./btnBox.constant"

import "./btnBox.css"

function BtnBox({ children, displayValue, setDisplayValue }) {
    // nyimpen datanya
    const [clickedEqual, setClickedEqual] = React.useState(false)

    // logic
    const handleButtonClick = (value) => {
        // jika sudah klik sama dengan tampilkan hasil
        if (clickedEqual) {
            setDisplayValue(value.toString())
            setClickedEqual(false)
        } else {
            setDisplayValue((prev) => {
              if (prev === "0" || prev === "Error") {
                  return value.toString()
              } else {
                  return prev.toString() + value.toString()
              }
            })
        }
        
        // jika klik delete reset ke 0
        if (value === "del") {
            setDisplayValue("0")
            return
        }
        
        if (value === "=") {
          try {
              const result = new Function(
                  "return " + displayValue
              )().toString()
              setDisplayValue(result)
              setClickedEqual(true)
          } catch (error) {
              setDisplayValue("Error")
          }
        }

    }

    // tampilannya
    return (
        <div className="buttonBox">
            {ARITMATIC_LISTS.map((btnValue, index) => (
                <button
                    key={index}
                    className="btn"
                    value={btnValue}
                    onClick={() => {
                        handleButtonClick(btnValue)
                    }}>
                    {btnValue}
                </button>
            ))}
        </div>
    )
}

export default BtnBox
