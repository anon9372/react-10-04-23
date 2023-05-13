import React from 'react'
import { useCountRenders } from './useCountRenders'

const Child = React.memo(({ increment }) => {
    useCountRenders()
    return (
        <div>
            <button onClick={() => increment(5)}>hello</button>;
        </div>
    )
})

export default Child
