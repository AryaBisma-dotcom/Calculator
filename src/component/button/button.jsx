import React from 'react';


function Button({ onClick }) {
    const btn = [
        1, 2, 3, '+', 
        4, 5, 6, '-',
        7, 8, 9, '*',
        0, '.', '=', '/', 'del'
    ];

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
