import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Gallery } from "react-grid-gallery";
import withScreenSizeCheck from "../components/screenSizeCheck";

import './Tab.css';
 
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

    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabId) => {
      setActiveTab(tabId);
    };
  
    return (
        <div style={{background:"#000", minHeight:"100vh"}}>
            <Navbar />
      <div className="tab-container">
      <div style={{textAlign: 'left', color: 'white', padding: '30px', fontSize: '13pt', width: '100%', margin: 'auto'}}>
        While programming is my area of work and study, I'm interested in a number of other areas. In my spare time, I'm a hobbyist artist, working
        primarily with acrylics and watercolor. Throughout my undergraduate years at Cornell University, I've developed a passion 
        for mathematics and theoretical computer science. As mentioned in other areas of my site, I also love teaching and have developed
        curriculum for a number of courses here at Cornell.  
        </div>
        <div className="tabs">
          <button onClick={() => openTab('tab1')} className={`tab-btn ${activeTab === 'tab1' ? 'active' : ''}`}>
            Artistic Work
          </button>
          <button onClick={() => openTab('tab2')} className={`tab-btn ${activeTab === 'tab2' ? 'active' : ''}`}>
            Mathematics/Theoretical CS
          </button>
          <button onClick={() => openTab('tab3')} className={`tab-btn ${activeTab === 'tab3' ? 'active' : ''}`}>
            Teaching/Curriculum Development
          </button>
        </div>
  
        <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? 'show' : ''}`}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'black'}}>
                <div style={{width: '800px', margin: 'auto'}}>
                <Gallery
                    images={imgs}
                    enableImageSelection={false}
                />
                </div>
                <br></br>
            </div>
        </div>
  
        <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? 'show' : ''}`}>
          <div style={{color:"white"}}>Under development. Acquiring permission from instructors of relevant courses due to academic integrity concerns.</div>
        </div>
  
        <div id="tab3" className={`tab-content ${activeTab === 'tab3' ? 'show' : ''}`}>
        <div style={{color:"white"}}>Under development. Acquiring permission from instructors of relevant courses due to academic integrity concerns.</div>
        </div>
      </div>
        </div>
    );
    
};
 
export default withScreenSizeCheck(Interests);

// import React, { useState } from 'react';
// import './Tab.css';

// const Interests = () => {
//   const [activeTab, setActiveTab] = useState('tab1');

//   const openTab = (tabId) => {
//     setActiveTab(tabId);
//   };

//   return (
//     <div className="tab-container">
//       <div className="tabs">
//         <button onClick={() => openTab('tab1')} className={`tab-btn ${activeTab === 'tab1' ? 'active' : ''}`}>
//           Tab 1
//         </button>
//         <button onClick={() => openTab('tab2')} className={`tab-btn ${activeTab === 'tab2' ? 'active' : ''}`}>
//           Tab 2
//         </button>
//         <button onClick={() => openTab('tab3')} className={`tab-btn ${activeTab === 'tab3' ? 'active' : ''}`}>
//           Tab 3
//         </button>
//       </div>

//       <div id="tab1" className={`tab-content ${activeTab === 'tab1' ? 'show' : ''}`}>
//         <h2>Content for Tab 1</h2>
//         <p>This is the content of Tab 1.</p>
//       </div>

//       <div id="tab2" className={`tab-content ${activeTab === 'tab2' ? 'show' : ''}`}>
//         <h2>Content for Tab 2</h2>
//         <p>This is the content of Tab 2.</p>
//       </div>

//       <div id="tab3" className={`tab-content ${activeTab === 'tab3' ? 'show' : ''}`}>
//         <h2>Content for Tab 3</h2>
//         <p>This is the content of Tab 3.</p>
//       </div>
//     </div>
//   );
// };

// export default Interests;