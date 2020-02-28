import React, { useState } from 'react';
import ToDo from './toDo';
import NewToDoForm from './NewToDoForm';
import { v4 as uuid } from 'uuid';

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);

  // Function to delete toDoes; will be passed to each toDo
  const deleteToDo = toDoId => {
    
    setToDoList(oldToDoList => oldToDoList.filter(toDo => toDo.id !== toDoId))
  }

  // Function to add toDos; will be passed to NewtoDoForm
  const addToDo = toDo => {
    let newToDo = { ...toDo, id: uuid() };
    setToDoList(oldToDoList => [...oldToDoList, newToDo])

  };

  // Generate HTML of toDoes with event handler with deletetoDo 
  const makeHTMLtoDos = () => {
    return (
      <div>
        {toDoList.map(toDo => (
         <ToDo key = {toDo.id} deleteToDo={() => deleteToDo(toDo.id)} text={toDo.text}/>
        ))}
      </div>
    )
  };

  return (<div>{makeHTMLtoDos()} <NewToDoForm toDoFunction={addToDo} buttonText = "Add to do"/> </div>)
}

export default ToDoList;


// Copy, paste, replace, change case