import React, {useContext} from "react";
import {Context} from "../../../ContextProvider"
import "../css/DailyEntry.css"

function DailyEntry(props) {
    const {changeEntry} = useContext(Context)

    return (
        <div className="entry-form">
            <h2 className="entry-header">Daily Entry</h2>
            <textarea className="entry" onChange={changeEntry} value={props.entry}/>
        </div>
    )
}

export default DailyEntry