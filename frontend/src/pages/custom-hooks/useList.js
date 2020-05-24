import React, {useState} from "react";

/* Stores a list of objects and supports pushing and popping
 * from it.
 */
export function useList(props) {
    const [list, setList] = useState([])

    /* pushes to end of list */
    function push(data) {
        setList(prevList => [...prevList, data])
    }

    /* pops the ith element */
    function pop(i) {
        if(!Number.isInteger(i)) { throw "i is not an integer!" }

        setList(prevList => {
            let newList = [...prevList]
            newList.splice(i, 1)
            return newList
        })
    }

    /* return list and modifying functions */
    return [list, push, pop]
}


