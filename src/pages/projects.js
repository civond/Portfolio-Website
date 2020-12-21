import React from 'react'

import bannerimg from "./banners/projectBanner.jpg"
import imgprocFigure1 from "./graphics/Figure1.png";
import imgprocFigure2 from "./graphics/Figure2.png";
import imgprocFigure3 from "./graphics/Figure3.png";
import imgprocFigure4 from "./graphics/Figure4.png";
import colorRecog from "./graphics/colorRecognition.PNG";
import FMONgraph from "./graphics/mouseFigure_1.png";


document.body.style.backgroundColor = "#BEC2F0 ";


function projects() {
    return (
        <>

        <div class="pagePadding">
        <div id="bannerunderlay">
            <div>
                <img src={bannerimg} id="bannerimg" alt='backdground'></img>
            </div>
            <div class="fade-in-box">
                <div class="notcentered" id="generalbanner">
                </div>
            </div>
            <div class="fade-in-text">
                <div class="notcentered">
                    <div class="containergeneral">
                        <h2><b>Projects</b></h2><br></br>
        
                    </div>
                </div>
            </div>
        </div>

            <div id="centeredbox">
                <br></br> This is a collection of programming projects of note that I have done<b><em> (all images are my own)</em></b>. 
                Particularly, I am interested in data visualization and image processing using Python. 
                However, I have working knowledge of JavaScript, CSS, and html (for obvious reasons lol).
                The code for these projects is available on my <a href="https://github.com/civond/personalProjects/" target="_blank" rel="noopener noreferrer">Github</a>.
                Feel free to poke through it if you would like, but keep in mind that I am not a professional software engineer~

                <div>
                    <div>
                        <br></br><h3>Image Processing</h3><hr width="100%" color="black"></hr>
                    </div>
                    This is a demonstration of the importance of image preprocessing. Raw imaging data can contain various types of noise (Gaussian, salt and pepper, etc.)
                    If your goal is to extract data from such images, being able to remove this noise will greatly improve the accuracy of your output.
                    Here, I "restored" the image quality of a noisy grayscale image using mathematical filters.
                    <a href="https://github.com/civond/personalProjects/tree/main/imageProcessing" 
                    target="_blank" rel="noopener noreferrer"> Code here</a>
                    <br></br><br></br>
                
                    <b>Here is a more in-depth explanation of what I did here:</b>
                    <div id="bullets">
                        <ol>
                            <li>An image was first loaded using OpenCV and then converted to grayscale.</li>
                            <li>Next, a 'salt and pepper' effect (noise) was introduced into the grayscale image to produce an image that I could work with.</li>
                            <li>The noisy image was then passed through various mathematical filters in an attempt to clean it up. 
                                Notice how the contraharmonic mean filter looks really similar to the original grayscale image!
                            </li>
                            <li>A side-by-side comparison of the original with the processesed image.</li>
                            
                        </ol>
                    </div>
          
                    <br></br><img src={imgprocFigure1} alt='img' id="90img"></img>
                    <br></br><img src={imgprocFigure2} alt='img' id="90img"></img>
                    <br></br><img src={imgprocFigure3} alt='img' id="90img"></img>
                    <br></br><img src={imgprocFigure4} alt='img' id="90img"></img>
                </div>

                <div>
                    <div>
                        <br></br><h3>Color Recognition</h3><hr width="100%" color="black"></hr>
                    </div>
                    This is a basic application of data science using pandas and OpenCV to perform color recognition on any one pixel (by double clicking).
                    Nothing super special, but cool nonetheless~ (This image was taken in Xiangshan, Taipei). 
                    <a href="https://github.com/civond/personalProjects/tree/main/Color_Recognition" 
                    target="_blank" rel="noopener noreferrer"> Code here</a>
                    <br></br><br></br><img src={colorRecog} alt='img' id="90img"></img>
                </div>

                <div>
                    <div>
                        <br></br><h3>FMON Performance Graphs</h3><hr width="100%" color="black"></hr>
                    </div>
                    In this project, I utilized pandas and matplotlibs to generate a simple graph to illustrate performance over time. 

                    <a href="https://github.com/civond/personalProjects/tree/main/FMON_PerformanceGraphs" 
                    target="_blank" rel="noopener noreferrer"> Code here </a>
                    <br></br>
                    <br></br><img src={FMONgraph} alt='img' id="90img"></img>
                </div>

                <div>
                    <div>
                        <br></br><h3>This React Website</h3><hr width="100%" color="black"></hr>
                    </div>
                    This website acts as a semi-professional portfolio for others to see, and is a great way to keep myself organized.

                    Having only rudimentary proficiency in JavaScript prior to this, it is an understatement to say that it was a <em><b>challenge </b></em> to make this website on my own.
                    However, I am lucky to have many software engineer friends that can answer my many questions about React and JavaScript! 
                    (insert image??)

                    <br></br>
                    
                </div>

            </div>
        </div>
        </>
    )
}

export default projects
