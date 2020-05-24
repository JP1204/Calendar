import React, {useContext, useRef} from "react"
import {useForm} from "../../custom-hooks/useForm";

import {Context} from "../../../ContextProvider"

import "../css/TodoList.css"

function TodoList(props) {
    const [todoInput, changeTodoInput, setTodoInput] = useForm()
    const {todos, addTodo, removeTodo} = useContext(Context)
    const [todoFormRef] = useRef(null)

    /* get idx to be deleted and calls context fxn */
    function deleteTodo(e) {
        e.preventDefault()
        const {name} = e.target
        const todo_idx = parseInt(name, 10)
        removeTodo(todo_idx)
    }

    /* adds todo to list and refocuses onto todo input form */
    function pushTodo(e) {
        addTodo(todoInput)
        setTodoInput("")
        setFormFocus()
    }

    /* map todo task to <li> */
    const todoList = todos.map((todo, index) => {
        return(
            <li key={index}>
                {todo}
                <button onClick={deleteTodo} name={index} className="closeBtn">
                    x
                </button>
            </li>
        )
    })

    return (
        <>
            <div className="todo-form">
                <div className="header">
                    <h2 style={{margin:"5px"}}>My To Do List</h2>
                    <input type="text" id="myTodoInput" placeholder="Add Task..."
                           value={todoInput} onChange={(e) => changeTodoInput(e)}
                           ref={todoFormRef}
                    />
                    <span onClick={pushTodo} className="addBtn">Add</span>
                </div>

                <ul className="todo-list">
                    {todoList}
                </ul>
            </div>
        </>
    )
}

export default TodoList