import React from "react";
import './AboutMe.css';

import { useSelector } from "react-redux";
import { selectMobileLayout } from "../../app/viewportSlice";

export default function AboutMe() {

    // create a variable mobileState that is set to a boolean based on the logic contained in viewport slice once the window dimensions are captured
    const mobileState = useSelector(selectMobileLayout);

    const mobileAction = () => {
        while (!mobileState) {
            return (
                <div className="AboutMePage" >
                        <h2>About Me</h2>
                        <div>
                            <div className="sectionOne" >
                                <p>
                                    Hello and welcome to my corner of the internet.  My name is Jeremiah Sparks and I am currently employed as a prep-cook at a local assisted / independent living facility.  In my free time I enjoy spending time with my family camping or going to sporting events.  I spend most of my time though dedicated to trying to better myself and my life through exercise, education, and a possitive attitude towards life.   
                                </p>
                                <img className="campingPhoto" src={'../../images/IMG_0872.PNG'} alt="" />
                            </div>
                            <div className="sectionTwo" >
                                <img className="monsterJamPhotoOne" src={'../../images/monsterJamPhotoOne.jpeg'} alt="" />
                                <p>
                                    In the middle of 2020 I was diagnosed with adult onset diabetes and was faced with a life or death decision, change my lifestyle or be doomed to slowly kill myself with my current lifestyle and eating habits.
                                </p>
                            </div>
                            <div className="sectionThree" >
                                <img className="dynamitePhoto" alt="" src={'../../images/dynamitePhoto.jpeg'} />
                            </div>
                        </div>
                </div>
            );
        }

        while (mobileState) {
            return (
                <div className="AboutMeMobilePage" >
                    <h2>About Me</h2>
                    <p>
                        Hello and welcome to my corner of the internet.  My name is Jeremiah Sparks and I am currently employed as a prep-cook at a local assisted / independent living facility.  In my free time I enjoy spending time with my family camping or going to sporting events.  I spend most of my time though dedicated to trying to better myself and my life through exercise, education, and a possitive attitude towards life.   
                    </p>
                    <img alt="" src={'../../images/IMG_0872.PNG'} className="campingPhotoMobile" />
                    <p>
                        In the middle of 2020 I was diagnosed with adult onset diabetes and was faced with a life or death decision, change my lifestyle or be doomed to slowly kill myself with my current lifestyle and eating habits.
                    </p>
                </div>
            );
        }
    }

    return mobileAction();
}