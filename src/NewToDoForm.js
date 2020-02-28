import React, { useState } from 'react';

function NewtoDoForm({ addToDo }) {
    const INITIAL_STATE = { text: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);


    const handleSubmit = evt => {
        evt.preventDefault();
        addToDo(formData);
        setFormData(INITIAL_STATE);
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (
        <form data-testid="NewToDoForm" onSubmit={handleSubmit}>
            <label htmlFor="text">To Do: </label>
            <input
                type="text"
                id="text"
                name="text"
                value={formData.toDo}
                onChange={handleChange}
            />
            <button>Add a new toDo!</button>
        </form>
    )
};

export default NewtoDoForm;