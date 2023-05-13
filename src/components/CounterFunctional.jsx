import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'

const CounterFunctional = () => {


    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Component did mount')
        return () => console.log('Component will unmount')
    }, [])

    useEffect(() => {
        console.log('Component is updated')
    }, [count])



    const handleIncrement = () => {
        setCount(prev => prev + 1)
    }
    return (
        <div>

            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>

        </div>
    )
}

export default CounterFunctional
