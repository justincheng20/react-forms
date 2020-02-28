import React, { useState } from 'react';
import NewToDoForm from './NewToDoForm';

function ToDo({ deleteToDo, text }) {
    const [toDo, setToDo] = useState(text);
    const [toDoFormVisibility, setToDoFormVisibility] = useState(false)
    
    const editToDo = toDo => {
        setToDo(toDo.text);
        toggleToDoVisibility();
    };

    const toggleToDoVisibility = () => {
        
        setToDoFormVisibility(!toDoFormVisibility);
    };
    return (
        <li >
            {toDo}
            <button onClick={toggleToDoVisibility}>Edit</button>
            {toDoFormVisibility ? <NewToDoForm toDoFunction={editToDo} buttonText = "Edit to do"/> : null }
            <button onClick={deleteToDo}>X</button>
        </li>)
};



export default ToDo;