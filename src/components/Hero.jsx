import React from 'react';


const Hero = () => {
    // for simple landingpage -> maybe flexbox? 
    //                     <img src={portrait} alt="portrait"/>

    return (
        <section>
            <div className="heroContainer">
                <div className="heroImage">
                </div>
                <div className="heroText">
                    <p>
                    Hi, my name is Alejandro Schultheiss, a math and physics enthusiast, I currently prepare for my Finals :)
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero;