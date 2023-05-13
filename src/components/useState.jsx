import React, { useState } from 'react'

const UseState = () => {

    // const [value, setValue] = useState('Initial Value') 

    const [value, setValue] = useState(false)
    ///// some use State

    // let value = false
    // setValue (value => !value)

    console.log('value', value)

    return (
        <div>
            {value && <h1>Achivers IT</h1>}
            <button onClick={() => setValue(!value)}>Click Me</button>
        </div>
    )
}

export default UseState
