import React from "react";
import {Parallax, ParallaxLayer} from "@react-spring/parallax"
import "../App.css"; 
import Navbar from "../components/navbar";
import CaptionedImage from "../components/CaptionedImage";
import withScreenSizeCheck from "../components/screenSizeCheck";
 
const Intro = () => {
    return (
    <div>
        <Parallax pages={1.681} style={{top:0, left:0}} classname="animation parallax-remove-scrollbar">
        <ParallaxLayer offst={0} speed={0.5}>
            <div classname="animation_layer parallax" id="bg"></div>
        </ParallaxLayer>
        <ParallaxLayer offst={0} speed={0.75}>
            <div classname="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offst={0} speed={1.0}>
            <div classname="animation_layer parallax" id="tree2"></div>
        </ParallaxLayer>
        <ParallaxLayer offst={0} speed={1.25}>
            <div classname="animation_layer parallax" id="tree1"></div>
        </ParallaxLayer>
        <ParallaxLayer offst={0} speed={1.5} >
            <div classname="animation_layer parallax" id="top"></div>
            <div id="cover2"/>
            <Navbar />
            <div id="cover">
                <div style={{display:"flex", margin:"auto", alignItems:"center", justifyContent: "center"}}>
                    <CaptionedImage link={require('../images/cup.jpeg')} width={400} caption={""}/>
                    <div className="introText">
                        Hi! I'm a senior at Cornell University studying computer science. I have a background in object oriented Programming
                        and fullstack application development and will be joining Susquehanna International Group in Summer 2024 as a 
                        Software Engineer. <br></br>Some of my interests within computer science include algorithm analysis, programming languages, 
                        and compiler design and optimizations. I love logic puzzles, building things, and highly collaborative projects. 
                        I have experience working at startups and trading firms and have learned that I both love and thrive in fast paced 
                        environments. 
                    </div>
                </div>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed = {2.0} >
            <div style={{width:"100%", top:"0px", position:"relative"}}>
                <div style={{ width:"fit-content", padding:"0px", margin:"auto"}}>
                    <p style={{textAlign: "center", fontSize:'50pt'}}>
                            Nice to meet you! <br></br> I'm <b>Esther Wang</b>. 
                    </p>
                    <p style={{textAlign: "center", fontSize:'20pt', width:"500px", marginTop:"-50px"}}>
                            I'm a problem solver, programmer, math enthusiast, hobbyist artist, and foodie. Scroll down to hear more!
                    </p>
                </div>
            </div>
            </ParallaxLayer>
        </Parallax>
    </div>
        // <div>
        //     <h1>Intro page placeholder</h1>
        // </div>
    );
};
 
export default withScreenSizeCheck(Intro);