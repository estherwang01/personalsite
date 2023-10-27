import React from "react";
import './Image.css'; 
 
const CaptionedImage = (props) => {
    return (
        <div className="imageContainer">
            <img src={props.link} width={props.width}></img>
            <div className="captionContainer">{props.caption}</div>
        </div>
    );
};
 
export default CaptionedImage;