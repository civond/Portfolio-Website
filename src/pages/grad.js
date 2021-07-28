import React from 'react'
import graduationBanner from './banners/graduationBanner.jpg';
import AboutComponent from '../components/aboutComponent';
import Links from '../components/Links'



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
            <div id="centeredbox" class="contentfade">
                <br/>
                <div>
                <hr width="100%" color="black"></hr>
                    <h2>Publications</h2><br/>
                    <div class="contentPadding">
                        <ol>
                            <li><a href = "https://elifesciences.org/articles/58523">Sniff-synchronized, gradient-guided olfactory search by freely moving mice (eLife, 2021).</a></li>
                        </ol>
                    
                </div></div><br/><br/><hr width="100%" color="black"></hr>
                <div id="columnContainer">
                   <div class="column" ><h2>Languages</h2>
                        <div class="contentPadding">
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                        </ul>
                        </div>
                    </div>
                    <div class="column"><h2>Platforms</h2>
                        <div class="contentPadding">
                        <ul>
                            <li>Linux</li>
                            <li>Windows</li>
                            <li>Docker</li>
                        </ul>
                        </div>
                    </div>
                    <div class="column"><h2>Tools</h2>
                        <div class="contentPadding">
                        <ul>
                            <li>DeepLabCut</li>
                            <li>Jupyter Notebooks</li>
                            <li>Google CoLabs</li>
                        </ul>
                        </div>
                    </div><br/>
                </div>
            </div>
            <div id="centeredbox" class="contentfade">
            <hr width="100%" color="black"></hr>
                    <h2>Links</h2>
                    
                    <Links/>
                    <hr width="100%" color="black"></hr>
                </div>
            <div id="bottomBox">
                </div>
        </div>
        
    )
}

export default grad
