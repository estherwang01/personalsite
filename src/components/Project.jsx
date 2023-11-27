import React, { useState } from "react";
import './Project.css'; 
import EmphasisText from "./EmphasisText";
import Button2 from "./Button2"; 
 
const Project = (props) => {
    const [buttonState, SetButtonState] = useState(true)

    const getTech = () =>{
        var tech = []; 
        props.tech.forEach(elem => {
            tech.push(
                <EmphasisText text={elem} />
            )
        })
        return tech; 
    }

    return (
        <div className="projectContainer">
            <div style={{height:'400px', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                <img src={props.link} width={'70%'} style={{margin: 'auto', boxShadow: '1px 1px 2px grey'}}></img>
            </div>
            <div className="titleContainer">
                <h3 id="heading">
                    <a href={props.url}>
                    {props.title}
                    </a>
                </h3>
            </div>
            <div style={{display: "flex"}}>
                {getTech()}
            </div>
            <div className="captionContainer">{props.short}</div>
            {buttonState ? 
            <div style={{position: "absolute", bottom:"0px", right: "0px"}}>
                <Button2 label={"Read More!"} onClick={(e) => {SetButtonState(false)}} />
            </div> : 
            <div className="captionContainer">
                {props.caption}
                <div style={{position: "absolute", bottom:"0px", right: "0px"}}>
                    <Button2 label={"Read Less"} onClick={(e) => {SetButtonState(true)}}/>
                </div>   
            </div>}
            
        </div>
    );
};
 
export default Project;