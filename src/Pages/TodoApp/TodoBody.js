import React from 'react'

export default function TodoBody(props) {
    // console.log(props)
    return (

        <>
            <li className="Task-list">
                {/* <p id={props.id }>{props.text}</p> */}
                <div className="right">
                    <button className="complete-button" id={props.buttonId}
                    onClick={() => {
                        props.onStrike(props.id)
                    }}
                    >Complete</button>
                    <button className="delete-button"
                        onClick={() => {
                            props.onSelect(props.id)
                        }}>X</button>
                </div>
            </li>
        </>
    )
}
