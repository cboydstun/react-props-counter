import React from 'react'

import CustomButton from './CustomButton'

export default function Counter(props) {
    return (
        <div>
            <p>You clicked {props.count} times</p>
            <CustomButton />
            <button onClick={() => props.setCount(props.count + 1)}>
                Click me
            </button> 
        </div>
    )
}
