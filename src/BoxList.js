import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

function BoxList() {
  const [boxList, setBoxList] = useState([]);

  // Function to delete boxes; will be passed to each Box
  const deleteBox = boxId => {
    setBoxList(oldBoxList => oldBoxList.filter(box => box.id !== boxId))
  }

  // Function to add boxes; will be passed to NewBoxForm
  const addBox = box => {
    let newBox = { ...box, id: uuid() };
    setBoxList(oldBoxList => [...oldBoxList, newBox])

  };

  // Generate HTML of boxes with event handler with deleteBox 
  const makeHTMLBoxes = () => {
    return (
      <div>
        {boxList.map(box => (
          <Box
            key={box.id}
            data-testid = "box"
            width={Number(box.width)}
            height={Number(box.height)}
            backgroundColor={box.backgroundColor}
            deleteBox={() => deleteBox(box.id)}
          />
        ))}
      </div>
    )
  };

  return (<div>{makeHTMLBoxes()} <NewBoxForm addBox={addBox} /> </div>)
}

export default BoxList;