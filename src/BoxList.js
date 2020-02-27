import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from "uuid/v4";

function BoxList() {
    const [boxList, setBoxList] = useState([]);

    const deleteBox = boxId => {
        setBoxList(oldBoxList => oldBoxList.filter(box => box.id !== boxId))
    }
    // Write function to add boxes and pass to newBoxForm
    const addBox = box => {
        let newBox = {...box, id: uuid()};
        setBoxList(oldBoxList => [...oldBoxList, newBox])

    };

    const makeHTMLBoxes = () => {
        return (
            <div>
                {boxList.map(box => {
                    return (
                    <Box 
                        key={box.id} 
                        width={Number(box.width)} 
                        height={Number(box.height)} 
                        backgroundColor={box.backgroundColor}
                        deleteBox={() => deleteBox(box.id)}
                    />
                    );
                })}
            </div>
        )
    };

    return (<div>{makeHTMLBoxes()} <NewBoxForm addBox={addBox} /> </div>)
}

export default BoxList;