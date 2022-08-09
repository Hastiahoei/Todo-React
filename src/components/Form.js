import React from "react" ;
import {v4 as }



const Form =({input, setInput,todos, setTodos}) => {
    const onInputChange =(event) => {
        setInput(event.target.value);
    };

    const onFormSubmit =(event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input type ="text" placeholder = "Enter a Todo..." className="task-input"
            value={input}
            required
            onChange={onInputChange}
            />
            <button className=" button-add" type="submit">
            Add
            </button>
        </form>
    );
};

export default Form;