import React from "react";
import '../App.css'; 
import Navbar from "../components/navbar";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import CaptionedImage from "../components/CaptionedImage";
import withScreenSizeCheck from "../components/screenSizeCheck";
 
const Experience = () => {
    return (
        <div>
            <Navbar />
            <div style={{display: "flex", alignContent:"center"}}>
                <div style={{width:"30vw"}}></div>
                <div className="imagesContainer">
                    <CaptionedImage link={require('../images/sig.png')} 
                    caption={"Networking with coworkers at Susquehanna International Group. Here, I'm talking discussing crypto trading strategies with some of my peers."} 
                    width={400}/>
                    <CaptionedImage link={require('../images/2112.jpg')} 
                    caption={"My students and I are pictured here shortly after a project competition I hosted for CS2112. Students wrote code that controlled \'critters\' which competed in a number of events. "} 
                    width={400}/>

                    <CaptionedImage link={require('../images/stemun.JPG')} 
                    caption={"Since before high school, I've absolutely loved teaching. From the creation of curriculum, to the one on one interactions, to the public speaking, it's always helped me to understand content deeper and form interesting connections with my students. "} 
                    width={400}/>
                    {/* <img src={require('../images/sig.png')} width={300}/> */}
                </div>
                <div className="timelineContainer" id="experiences">
                <Timeline >
                        <TimelineItem>
                            <TimelineOppositeContent color="textSecondary">
                            June 2023 - August 2023
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent width={700}>
                                    <div className="timelineItem">
                                    <b>Software Engineering Intern </b> at <a href="https://sig.com/">Susquehanna International Group</a>. 
                                Here, I developed fullstack applications using C#. I created, expanded, and improved performance of various 
                                microservices built with gRPC. Queries often involved extracting information from MongoDB, processing data, 
                                and returning it in a useful format for creating data visualizations on the frontend. UI components were built in C#
                                as well, using the WPF framework. 
                                In this role, I contributed ~6000 lines of code and 3 major features to both the frontend and backend components 
                                of SIG's options trading software. 
                                    </div>
                            </TimelineContent>
                        </TimelineItem>
                    
                        <TimelineItem>
                            <TimelineOppositeContent color="textSecondary">
                            February 2023 - May 2023
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="timelineItem">
                                <b>Teaching Assistant</b> for <a href="https://www.cs.cornell.edu/courses/cs2802/2020fa/">
                                    Honors Discrete Mathematics</a> at Cornell University. 
                                In this role, I helf weekly office hours, graded problem sets and exams, and 
                                led weekly recitation sections. Material of the course included 
                                binary relations, graph theory, probability and combinatorics, and finite automata. 
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent color="textSecondary">
                            September 2022 - December 2022
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <div className="timelineItem">
                                <b>Teaching Assistant</b> for <a href="https://www.cs.cornell.edu/courses/cs2112/2022fa/">
                                    Honors Object Oriented Programming and Data Structures</a> at Cornell University. 
                                In this role, I helf weekly office hours, graded projects and exams, and led weekly recitation 
                                sections. Helping students ranged from explaining high level concepts,
                                to aiding in debugging Java code, to setting up JUnit testing suites. 
                                This course covered standard OOP topics such as inheritence, polymorphism, generics, and 
                                encapsulation, as well as more advanced content such as building parsers and interpreters, 
                                fault injection, concurrency, and design patterns.  
                                </div>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent color="textSecondary">
                            June 2022-August 2022
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <div className="timelineItem">
                                <b>Software Engineering Intern</b> at <a href="https://censys.com/">Censys</a>. 
                                In this role, I developed fullstack applications built with a PostgreSQL/gRPC/Golang 
                                backend and Typescript React frontend. A significant feature which I planned and designed from 
                                loose specification was a manual tagging system for users on various dashboards. 
                                To deliver this feature, I contributed around 1000 lines of code on the backend, building up 
                                a new service which effeciently stored and retrieved relevant data from Postgres databases. 
                                I also wrote around 2000 lines of code on the frontend, developing the necessary UI components
                                to achieve this goal while also producing reusable elements for other planned similar features. 
                                </div>   
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem>
                            <TimelineOppositeContent color="textSecondary">
                            February 2021 - August 2021
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className="timelineItem">
                                    <b>Software Engineer</b> at <a href="https://ai-learners.com">AI-Learners</a>, a startup hoping to 
                                    improve online education services for kids with disabilities. In this role, I developed
                                    webpages using Javascript React. One of my primary projects was developing a customizable avatar feature
                                    from scratch which allows users to personalize their profiles. I also led the efforts to both design and 
                                    create a first-time user website guided tour. I also implemented a number of configurable charts and graphs using d3.js 
                                    which allowed parents and educators to better monitor the progress of their students. As one of roughly 5 software
                                    developers, I was responsible for delivering high quality code from scratch, as well as fast turnaround times, 
                                    handling constantly changing requirements, and working with designers and outreach teams to design specifications. 
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                </Timeline>
                </div>
                <div style={{width:"20vw"}}></div>
            </div>
        </div>
    );
};
 
export default withScreenSizeCheck(Experience);