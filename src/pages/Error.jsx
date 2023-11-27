import React from 'react';
import ButtonMailto from "../components/MailTo";
import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <div style={{textAlign:"center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column", 
        minHeight:"100vh", overflow:"scroll", padding:"10px", boxSizing:"border-box"}}>
      <h2>Hi! This website is still undergoing construction and is unsupported on mobile and small screen sizes.</h2>
      <p>Please visit with a browser of width at least 1000px to see full content. Read below for a quick summary on who I am and relevant links!</p>
      <div style={{width:"60%", textAlign:"left", }}>
        <p>
        My name is Esther Wang and I'm a senior at Cornell University studying computer science. I have a background in object oriented Programming
                        and fullstack application development and will be joining Susquehanna International Group in Summer 2024 as a 
                        Software Engineer. <br></br><br></br>Some of my interests within computer science include algorithm analysis, programming languages, 
                        and compiler design and optimizations. I love logic puzzles, building things, and highly collaborative projects. 
                        I have experience working at startups and trading firms and have learned that I both love and thrive in fast paced 
                        environments. My past internships include working for SIG, Censys, and AI-Learners, holding fullstack roles at each. I'm also highly
                        involved in teaching at Cornell University, where I currently serve as a TA for the Analysis of Algorithms course. 
        </p>
        <div style={{display: 'flex',flexWrap:"wrap",  justifyContent:'center'}}>
                    <ButtonMailto label="Send Me an Email!" mailto="mailto:estherwang01@hotmail.com" />
                    <form method="get" action={require('../images/esther_wang_cv.pdf')} target="_blank">
                        <Button label="Download My Resume" />
                    </form>
                    <form method="get" action={require('../images/esther_wang_transcript.pdf')} target="_blank">
                        <Button label="Download My Transcript" />
                    </form>
                </div>
      </div>
    </div>
  );
};

export default ErrorPage;