import { useEffect, useState, useMemo } from "react"

const UseMemo = ({ marks }) => {
    const [count, setCount] = useState(0);

    const filterMarks = useMemo(() => marks.filter((mark) => mark > 10), [marks]);

    // const filterMarks = marks.filter((mark) => mark > 10);
    const increment = () => setCount(count + 1);

    useEffect(() => {
        console.log("render APp")
    }, [filterMarks]);

    return (
        <>
            <button onClick={increment}> Increment</button>
            <h1> Learn UseMemo</h1>
        </>
    )
}
export default UseMemo


// In other words, useCallback gives you referential equality between renders for functions. And useMemo gives you referential equality between renders for values.