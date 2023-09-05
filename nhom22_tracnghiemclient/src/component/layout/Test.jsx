import axios from "axios"
import { API_URL } from "../../configapi"
import { useEffect, useState } from "react"
import { useRef } from "react"
const Test = () => {
    const ref = useRef(null)
    const onClick = () => {
        let content = ref.current.textContent
        let value=ref.current.value

        alert(content)
        alert(value)
        console.log(content)
    }
    return (
        <div className='App'>
            <h1 ref={ref}>How to getting content from the DOM tree</h1>
            <input type="text" name="" id="" ref={ref} />
            <button onClick={onClick}>Getting Content</button>
        </div>
    )
}
export default Test