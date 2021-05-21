import React from 'react'

export default function Counter(props) {
    return (
        <div>
            <p>You clicked {props.count} times</p>
            <button onClick={() => props.setCount(props.count + 1)}>
                Click me
            </button> 
        </div>
    )
}
