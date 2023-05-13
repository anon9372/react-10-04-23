import React, { useEffect, useState } from 'react'

const UseEffectBasic = () => {

    const [value, setValue] = useState(0)
    const [secondValue, setSecondValue] = useState(0)

    useEffect(() => {
        console.log('Hello from useEffect')
    })

    useEffect(() => {
        console.log('Hello from useEffect from second value')
    })

    // const sayHello = () => {
    //     console.log('Hello')
    // }

    // sayHello()

    return (
        <>
            <div>
                <h1>Value: {value}</h1>
                <button onClick={() => setValue(value + 1)}>Click Me</button>
            </div>
            <div>
                <h1>Second Value: {secondValue}</h1>
                <button onClick={() => setSecondValue(secondValue + 1)}>Click Me</button>
            </div>
        </>
    )
}

export default UseEffectBasic
