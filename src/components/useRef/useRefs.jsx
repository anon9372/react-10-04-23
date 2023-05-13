import React, { useRef } from 'react'

const UseRefs = () => {

    const inputRef = useRef()


    const handleClick = () => {
        inputRef.current.focus()
    }
    return (
        <div>
            <input type='file' ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
        </div>
    )
}

export default UseRefs
