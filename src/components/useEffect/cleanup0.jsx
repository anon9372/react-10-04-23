import { useEffect, useState } from "react";

function Cleanup1() {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        console.log("Effect runs");

        return () => {
            console.log("Wait before i clean up the prevous effect");
            console.log("Ok, you can run the effect");
        };
    }, [toggle]);

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
    );
}
export default Cleanup1;
