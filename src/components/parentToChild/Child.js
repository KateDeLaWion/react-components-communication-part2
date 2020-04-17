import React from 'react'

export default function Child (props) {
    return (
        <div>

            {/* first scenario */}
            {/* <button onClick={props.doWhatever}> {props.trade} </button> */}


            {/* second scenario */}
            <button onClick={props.doWhatever}> {props.trade} </button>
            <p>{props.xyz}</p>
            
        </div>
    )
}
