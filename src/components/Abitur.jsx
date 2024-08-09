import React from 'react';


const Abitur = () => {
// <img src={PhysikAbitur} alt="book cover" className="bookCover"/>
//                     <img src={GeographieAbitur} alt="book cover" className="bookCover"/>


    return (
        <div className="abiturContainer">
            <div className="bookWrapper">
                <div className="bookSolo">
                    <p className="title">Mathematik Abitur 2023 Zusammenfassung</p>
                    <p className="desc">Demnächst verfügbar - 15.02.2023</p>
                </div>
                <div className="bookSolo">
                    <p className="title">Physik Abitur 2023 Zusammenfassung</p>
                    <p className="desc">Demnächst verfügbar - 15.02.2023</p>
                </div>
                <div className="bookSolo">
                    <p className="title">Geographie Abitur 2023 Zusammenfassung</p>
                    <p className="desc">Demnächst verfügbar - 15.02.2023</p>
                </div>
            </div>
        </div>
    )
}

export default Abitur;