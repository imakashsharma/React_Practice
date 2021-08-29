import React, { useState } from 'react'
export const HooksExample = () => {
    const [count, setCount] = useState(10)
    return (
        <div>
            <h1>
                Hooks in Functional Component {count}
            </h1>
            <button onClick={() => { setCount(count + 1) }}>
                Increment
            </button>
        </div>
    )
}