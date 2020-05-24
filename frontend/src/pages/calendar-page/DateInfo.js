import React, {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom"

import DailyEntry from "./submit-form/DailyEntry";
import TodoList from "./submit-form/TodoList"
import {Context} from "../../ContextProvider"

import "./css/DateInfo.css"

/* stores state for daily information
 * e.g. journal entry, todos, reminders */
function DateInfo(props) {
    const {date} = useParams()
    const {entry, setEntry, todos} = useContext(Context)

    /* submits post request with current page state into mongoDB */
    async function submitEntry() {
        console.log("submitting")
        // post request to server to be stored on mongoDB
        const response = await fetch(`/daily-entries`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({date, entry, todos})
        })
        console.log(response)
    }

    /* get prev user entry if it exists */
    useEffect(() => {
        fetch(`/daily-entries/${date}`)
            .then(res => res.json())
            .then(data => setEntry(data.entry))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="date-info-page">
            <div className="jumbotron" id="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information.</p>
            </div>

            <form className="daily-form" onSubmit={submitEntry}>
                <DailyEntry/>
                <TodoList/>

                <button type="submit" className="btn btn-primary mb-2 submit-button">Submit</button>
            </form>
        </div>
    )
}

export default DateInfo