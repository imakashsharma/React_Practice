import React, { useEffect, useState } from 'react'
export const UseEffectExample = () => {
    const [count, setCount] = useState(1)
    useEffect(() => {
        console.warn(count);
    }, [count==5])
    return (
        <div>
            <h1>Use Effect Example{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Update State</button>
        </div>
    )
}
