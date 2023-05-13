import { useState, useCallback } from 'react';
import Child from './child';
function UseCallback() {
    const [count, setCount] = useState(0);

    const incrementCount = useCallback(() => {
        setCount(count => count + 1);
    }, [setCount]);

    return (
        <div>
            <Child onClick={incrementCount} />
            <p>Count: {count}</p>
        </div>
    );
}

export default UseCallback