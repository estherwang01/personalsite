import React from "react";
import './Button.css'; 
 
const Button2 = (props) => {
    return (
        <button className="button2" onClick={props.onClick}>
            {props.label}
        </button>
    );
};
 
export default Button2;