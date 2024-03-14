import React from 'react'
 
export default function Demo(props) {
    if (props.name === 'Manoj') {
        throw new Error("No specified entry");
    }
    return (
        <>
            <h1>{props.name}</h1>
        </>
    )
}