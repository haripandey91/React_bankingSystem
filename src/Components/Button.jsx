import React from 'react'
import "../styles/button.scss"
const Button = (props) => {
   // console.log(props);
    
    return (
        <div className="custom-button">
            <button onClick={props.onClick} className={props.className}>{props.value}</button>
        </div>

    )
}

export default Button