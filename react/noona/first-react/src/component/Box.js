import React from 'react'

const Box = (props) => {
    console.log(props);
    return (
        <div>
            <div className="box">
                <p>Box{props.num}</p>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Box
