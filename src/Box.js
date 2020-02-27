import React from 'react';

function Box({deleteBox, width, height, backgroundColor}) {
    const styles = {
        backgroundColor,
        width,
        height
    };
    return (
    <div style={styles}>
        <button onClick={deleteBox}>X</button>
    </div>)
};

// May need to pass params to deleteBox.

export default Box;