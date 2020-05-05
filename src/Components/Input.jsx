import React from "react";
import "../styles/input.scss"
const Input = (props) => {
  return (
    <div className="input">
      <span className="input-label">
        <h3>{props.label}</h3>
      </span>
      <span className="input-content">
        <input
          type={props.type}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onClick={props.onclick}
        />
      </span>
    </div>
  );
}

export default Input;