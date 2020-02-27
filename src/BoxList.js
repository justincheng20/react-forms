import React, { useState } from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm'

function BoxList() {
    const [boxList, setBoxList] = useState([{id:1, width: 100, height:100, backgroundColor:"orange"}]);

    function deleteBox(boxId) {
        // Write later
    }
    // Write function to add boxes and pass to newBoxForm

    const makeHTMLBoxes = () => {
        return (
            <div>
                {boxList.map(box => (
                    <Box 
                    key={box.id} 
                    width={box.width} 
                    height={box.height} 
                    backgroundColor = {box.backgroundColor}
                        
                    />
                ))}
            </div>
        )
    };

    return (<div>{makeHTMLBoxes()} <NewBoxForm /> </div>)
}

export default BoxList;