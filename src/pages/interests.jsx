import React from "react";
import Navbar from "../components/navbar";
import { Gallery } from "react-grid-gallery";
 
const Interests = () => {
    function importAll(r) {
        return r.keys().map(r);
      }
      
    const images = importAll(require.context('../art/', false, /\.(png|jpe?g|svg)$/));
    
    const m = (elem) => {
        var tagged = {
            src: elem, 
            width: 400, 
            height: 'auto'
        }
        return tagged; 
    }

    const imgs = images.map(m); 
    

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'black'}}>
            <Navbar />
            <div style={{textAlign: 'left', color: 'white', padding: '30px', fontSize: '13pt', width: '800px', margin: 'auto'}}>
                Outside of programming, I'm a hobbyist artist. My favorite mediums include watercolor and acrylic paints.
                I love nature, hiking, and the Pacific Northwest where I'm from. 
                I'm also an avid Real Madrid fan, which is another place I draw inspiration from. 
                See below for some of my work!
            </div>
            <div style={{width: '800px', margin: 'auto'}}>
            <Gallery
                images={imgs}
                enableImageSelection={false}
            />
            </div>
            <br></br>
        </div>
    );
};
 
export default Interests;