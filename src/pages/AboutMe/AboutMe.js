import React from "react";
import './AboutMe.css';
import campingPhoto from '../../images/IMG_0872.png';

export default function AboutMe() {
    return (
        <div className="AboutMePage" >
                <h2>About Me</h2>
                <div>
                    <div className="sectionOne" >
                        <p>
                            Hello and welcome to my corner of the internet.  My name is Jeremiah Sparks and I am currently employed as a prep-cook at a local assisted/independent living facility.  In my free time I enjoy spending time with my family camping or going to sporting events.  I spend most of my time though dedicated to trying to better myself in every aspect that I possibly can. 
                        </p>
                        <img className="campingPhoto" src={campingPhoto} alt="" />
                    </div>
                </div>
        </div>
    );
}