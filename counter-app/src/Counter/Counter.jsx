import { useState } from 'react';

const Counter = () => {
    // init count with 0.
    const [count, setCount] = useState(0);
    
    // function called by onclick
    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
};

export default Counter;