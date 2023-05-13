import React, { useState } from 'react'

const Counter = () => {

    const [value, setValue] = useState(0)

    return (
        <div>
            <p>{value}</p>
            <button onClick={() => setValue(value + 1)}>Increment</button>
            <button onClick={() => setValue(value - 1)}>Decrement</button>
        </div>
    )
}

export default Counter
