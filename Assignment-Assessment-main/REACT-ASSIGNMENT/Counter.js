import { useState } from "react"

function Counter() {
    const [A, setA] = useState(0)


    return (
        <div>
            <h1>{A}</h1>
            <button onClick={() => { setA(A + 1) }}>Add</button>
            <button onClick={() => { setA(A - 1) }}>Remov</button>
            <button onClick={() => { setA(0) }}>Reset</button>

        </div>
    )
}

export default Counter
