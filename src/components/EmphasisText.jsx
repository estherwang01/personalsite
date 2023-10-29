import React from "react";
import './Image.css'; 
 
const EmphasisText = (props) => {
    return (
        <div className="textContainer">
            {props.text}
        </div>
    );
};
 
export default EmphasisText;