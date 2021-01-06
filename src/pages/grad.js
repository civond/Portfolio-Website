import React from 'react'
import graduationBanner from './banners/graduationBanner.jpg';
import AboutComponent from '../components/aboutComponent';

function grad() {
    return (
        <div class="pagePadding">
            <div id="bannerunderlay">
            <div>
                <img src={graduationBanner} id="bannerimg" alt='backdground'></img>
            </div>
            <div class="fade-in-box">
                <div class="notcentered" id="generalbanner">
                </div>
            </div>
            <div class="fade-in-text">
                <div class="notcentered">
                    <div class="containergeneral">
                        <h2><b>About Me</b></h2><br></br>
        
                    </div>
                </div>
            </div>
        </div>
            <div id="centeredbox">
                
                <AboutComponent/>

            </div>

        </div>
    )
}

export default grad
