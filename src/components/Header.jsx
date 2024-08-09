import React, { useState } from 'react';
import DesygnedLogo from '../static/3dgifmaker05495.gif';


const Header = () => {
    const [menu, setMenu] = useState(false);

    const menudisplay = () => {
        setMenu((prevState) => {
          return !prevState;
        });
      };
//                      <img src={MathematikAbitur} alt="book cover" className="bookCover"/> 

    return (
        <nav>
            <div className="navContainer">
                <div className="logoContainer">
                    <a href="/"><img src={DesygnedLogo} alt="DesygnedLogo" className="bookCover"/></a>
                </div>
                <div className="menuContainer" onClick={ () => menudisplay() }>
                    <p>menü</p>
                </div>
            </div>

            <div className={menu ? "navlinks_open" : "navlinks"}>
                <a href="/publications">publications</a>
                <a href="/projects">projects</a>
                <a href="/about">about</a>
                <a href="/contact">contact</a>
                <a href="/abitur">abitur</a>
            </div>
        </nav>
    )
}

export default Header;