import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('앙뇽!');
    const onClickLeave = () => setMessage('잘가!');
    
    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color:'red'}} onClick={() => setColor('red')}>
                빠빨간맛
            </button>

            <button style={{color:'green'}} onClick={() => setColor('green')}>
                궁금해
            </button>
            <button style={{color:'blue'}} onClick={() => setColor('blue')}>
                허니
            </button>
        </div>
    );
};

export default Say;