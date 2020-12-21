import React from 'react';
import ghanaBanner from './banners/ghanaBanner.jpg'

function abroad() {
    return (
        <div class="pagePadding">
            <div id="bannerunderlay">
            <div>
                <img src={ghanaBanner} id="bannerimg" alt='backdground'></img>
            </div>
            <div class="fade-in-box">
                <div class="notcentered" id="generalbanner">
                </div>
            </div>
            <div class="fade-in-text">
                <div class="notcentered">
                    <div class="containergeneral">
                        <h2><b>Ghana</b></h2><br></br>
        
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default abroad