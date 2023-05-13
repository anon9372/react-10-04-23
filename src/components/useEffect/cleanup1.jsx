import React, { useEffect, useState } from 'react'


const Cleanup1 = () => {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        let newInterval = setInterval(() => {
            setNumber(number + 1)
        }, 1000)

        return () => {
            clearInterval(newInterval)
        }
    })

    return (
        <div>
            {number}
        </div>
    )
}

export default Cleanup1
