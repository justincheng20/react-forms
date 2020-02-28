import React from 'react';

function ToDo({ deleteToDo, text }) {
  
  return (
    <li >
        {text}
      <button onClick={deleteToDo}>X</button>
    </li>)
};



export default ToDo;