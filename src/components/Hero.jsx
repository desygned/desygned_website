import React from 'react';
import { useNavigate } from "react-router-dom"





const Hero = () => {

    const navigate = useNavigate();

    const fotoVideoPage = () => {
        navigate("/fotoundvideo");
    }

    const fashionPage = () => {
        navigate("/fashion")
    }

    const brandPage = () => {
        navigate("/brand")
    }

    const posterPackagingPage = () => {
        navigate("/posterundpackaging")
    }

    const uiuxPage = () => {
        navigate("uiux")
    }

    // for simple landingpage -> maybe flexbox? 
    //                     <img src={portrait} alt="portrait"/>

    return (
            <div className="heroContainer">
                <div className="Item" id="imageOne" onClick={() => fotoVideoPage()}>
                   <div className="black"><p>foto & video</p></div> 
                    
                </div>
                
                <div className="Item" id="imageTwo" onClick={() => fashionPage()}>
                    <div className="black"><p>fashion</p></div>
                    
                </div>
                
                <div className="Item" id="imageThree" onClick={() => brandPage()}> 
                    <div className='black'>  <p>brand</p></div>
                  
                </div>
                
                <div className="Item" id="imageFour" onClick={() => posterPackagingPage()}>
                    <div className='black'> <p>poster & packaging</p></div>
                </div>
                
                <div className="Item" id="imageFive" onClick={() => uiuxPage()}>
                    <div className='black'>                    <p>ui & ux</p>
                    </div>
                </div>
               

                <div className="Item" id="imageSix">
                </div>
            </div>
    )
}

export default Hero;