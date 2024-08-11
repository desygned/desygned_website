import React from 'react';
import Footer from './Footer';

const FotoVideo = () => {
    return (
        <>
        <div className="serviceWrapper"></div> 
        <div className="textWrapper">
            <p className="textHeader">(bewegte) bilder</p> 
            <p>Wir bewegen Bilder und Bilder bewegen uns. Vom <span>Imagefilm</span> über Dokumentarfilme bis zu Vlogs.
                Wir übernehmen die gesamte Film- und Fotoproduktion
            </p>
            <ul>
                  <li>imagefilme</li>
                  <li>dokumentarfilme</li>
                  <li>bilder</li>
                  <li>vfx</li>
                  <li>sfx</li>
                  <li>image processing / editing</li>
                  <li>social media content</li>
                  <li>video editing</li>
                  <li>vlogs</li>
                  <li>interviews</li>
                  <li>hochzeiten</li>
            </ul>   
        </div> 
        <Footer />
        </>
    )
}

export default FotoVideo;