import React, {useState} from "react"
import Calendar from "react-calendar"
import {useHistory} from "react-router-dom"

import "react-calendar/dist/Calendar.css"
import "./css/Calendar.css"

function MyCalendar() {
    const [date, setDate] = useState(new Date())
    const history = useHistory()

    const onChange = date => {
        setDate(date)
        const currPath = history.location.pathname
        const parsedDate = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`
        history.push(`${currPath}/${parsedDate}`, "string")
    }

    return (
        <div className="calendar-page">
            <h1>Calendar Page</h1>
            <Calendar className="my-calendar"
                      onChange={onChange}
                      value={date}/>
        </div>
    )
}

export default MyCalendar