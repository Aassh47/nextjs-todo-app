"use client";

import React, { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([
        {todoText: "todo 1", completed: false }, 
        {todoText: "todo 2", completed:  true },
        {todoText: "todo 3", completed:  true },
        {todoText: "todo 4", completed:  false },
    ]);

    const onClickHandler = (meraElm: any) => {
        console.log("meraElm", meraElm);
         
        
        

        // map runs on array, and returns on array

        const newTodos = todos.map(todo =>{
            console.log("todos:", todo);
            if (todo.todoText == meraElm.todoText) {
                todo.completed = !todo.completed // False hai tou true kardo, true hai tou false kardo
            }
            
            return todo;
        });

        console.log(newTodos);

                setTodos(newTodos);
    };
    const addTodo = () => {
        const newTodo = { todoText: todo , completed: false} 
        const newTodos = [...todos, newTodo]
        setTodos(newTodos);
        setTodo("");
    };

    const deleteTodo = (meraTodo: any) => {
        const newTodos = todos.filter(todo=>{
            if (todo.todoText == meraTodo.todoText)
            return false;
            return true;
        });
        console.log("old todo",todos, "new todos", newTodos);
        setTodos(newTodos);
        
    };

    return (
    <>
     <div>Todo</div>
     <input placeholder="add todo text"
      value={todo} 
      onChange={(e)=> {
        setTodo(e.target.value);
        }}
        />
     <button onClick={addTodo}>Add</button>
     <ul>

        {todos.map(elm=>{
            return <li style={{color:elm.completed ? "green" : "red", 
            fontStyle: "oblique",
            listStyle: "none",
        }} 
        key={elm.todoText}
        > 
        <input 
        type="checkbox" 
        checked={elm.completed} 
        onChange = {() => {
            onClickHandler (elm);
        }} 
        />
            {elm.todoText}
            <button onClick={()=>{deleteTodo(elm)}}>
                Delete
            </button>
            </li>;

        })}
     </ul>
     </> 
    );   
}