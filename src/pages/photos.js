import React from 'react'
import photosBanner from "./banners/photosBanner.jpg";
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';

function photos() {
    return (
        <div class="pagePadding">
        <div id="bannerunderlay">
            <div>
                <img src={photosBanner} id="bannerimg" alt='backdground'></img>
            </div>
            <div class="fade-in-box">
                <div class="notcentered" id="generalbanner">
                    <div class="containergeneral"></div>
                </div>
            </div>
            <div class="fade-in-text">
                <div class="notcentered">
                    <div class="containergeneral">
                        <h2><b>Photography</b></h2><br></br>
        
                    </div>
                </div>
            </div>
        </div>
        <div class="contentfade">
            <div>
                <ImageSlider slides={SliderData}/>
            </div>
            <br></br>
            <div id="centeredbox">
                All photos are my own.
            </div>

        </div>
    </div>
    )}

export default photos

