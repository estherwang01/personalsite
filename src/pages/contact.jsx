import React from "react";
import Navbar from "../components/navbar";
import ButtonMailto from "../components/MailTo";
import Button from "../components/Button";
 
const Contact = () => {
    return (
        <div>
            <Navbar />
            <div style={{textAlign: "center", margin: '100px'}}>
                <h2>How Can I Help You?</h2>
                <div style={{display: 'flex', justifyContent:'center'}}>
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
 
export default Contact;