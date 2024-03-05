import React from 'react';


function Button({ onClick }) {


    return (
        <>
            {btn.map((btnValue, index) => (
                <button key={index} className='btn' value={btnValue} onClick={() => { onClick(btnValue); console.log(btnValue); }}>
                    {btnValue}
                </button>
            ))}
        </>
    );
}

export default Button;
