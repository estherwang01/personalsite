import React from "react";
import './Project.css'; 
import EmphasisText from "./EmphasisText";
 
const Project = (props) => {
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
            <img src={props.link} width={props.width} style={{margin: 'auto', boxShadow: '1px 1px 2px grey'}}></img>
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
            <div className="captionContainer">{props.caption}</div>
        </div>
    );
};
 
export default Project;