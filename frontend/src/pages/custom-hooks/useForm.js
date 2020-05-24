import React, {useState} from "react"

/* stores form and event handlers for changing value of form */
export function useForm() {
    const [form, setForm] = useState("")

    function changeForm(e) {
        const {value} = e.target
        setForm(value)
    }

    return [form, changeForm, setForm]
}