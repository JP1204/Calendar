import React, {Component, createContext, useState} from "react";
import {useForm} from "./pages/custom-hooks/useForm";
import {useList} from "./pages/custom-hooks/useList";

const Context = React.createContext({})

function ContextProvider(props) {
    const [entry, changeEntry, setEntry] = useForm()
    const [todos, addTodo, removeTodo] = useList()

    let contextValue = {
        entry,
        setEntry,
        changeEntry,

        todos,
        addTodo,
        removeTodo
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}



export {Context, ContextProvider}