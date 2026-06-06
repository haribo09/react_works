import { useState } from "react"

export default function InputValueEx() {
    const [inputValue, setInputValue] = useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    return(
        <div>
            <h2>입력값 출력</h2>
            <input 
                type="text"
                onChange={(event) => handleChange(event)}
            />
            <p>입력값: {inputValue}</p>
        </div>
    )
}