import React from 'react'

import bannerimg from "./banners/projectBanner.jpg"
import imgproc from "./graphics/imgProcessing.png"
import colorRecog from "./graphics/colorRecognition.PNG";
import FMONgraph from "./graphics/2152Graph.png";
import mousevideo from './graphics/mouseVideoCut2.mp4';
import * as BsIcons from "react-icons/bs";


document.body.style.backgroundColor = "#BEC2F0 ";


function projects() {
    //document.title = "Dorian Yeh"
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
                        <h2><b>Coding Projects</b></h2><br></br>
        
                    </div>
                </div>
            </div>
        </div>

            <div id="centeredbox"　class="contentfade">
            <br/>
                <div>
                    <div>
                        <br></br><hr width="100%" color="black"></hr>
                        <a href="https://github.com/civond/FMOS-DeepLabCut-Pipeline" target="_blank" rel="noopener noreferrer">
                        <h2>FMOS DeepLabCut Pipeline <BsIcons.BsLink /></h2></a>
                        <hr width="100%" color="black"></hr><br/>
                    </div>
                    <div class="contentPadding" id="innercontentfade">
                    Using Dropbox's and Google Drive's API in Python, I designed a pipeline to streamline the tedious process of managing files 
                    across shared workspaces for use with DeepLabCut's Google Colab Notebook.
                    For added security, workspace OAuth tokens are hidden within local environmental variables.
                    <br></br>
                    <br></br>
                    <div>
                        <video autoPlay muted loop width="600px">
                            <source src={mousevideo} type="video/mp4"/>
                        </video>
                    </div>
                    </div>
                    
                </div>
                
                <div>
                    <div>
                        <br/><hr width="100%" color="black"></hr>
                        <a href="https://github.com/civond/FMON_DataManagement" target="_blank" rel="noopener noreferrer">
                        <h2>FMOS Performance Data Pipeline <BsIcons.BsLink /></h2></a>
                        <hr width="100%" color="black"></hr><br/>
                    </div>
                    <div class="contentPadding" id="innercontentfade">
                    To visualize historical mouse performance data, I wrote a Python script that compiles raw performance data into spreadsheet, 
                    which is then used to generate multiple figures using matplotlibs and pandas. 
                    Next, these figures are pushed to online GitHub repository via OAuth token.
                    <br/><br/><img src={FMONgraph} alt='img' id="projectimg"></img>
                    </div>
                </div>

                <div>
                    <div>
                    <br></br><hr width="100%" color="black"></hr>
                    <a href="https://github.com/civond/personalProjects/tree/main/imageProcessing" target="_blank" rel="noopener noreferrer">
                        <h2>Image Processing <BsIcons.BsLink /></h2></a>
                        <hr width="100%" color="black"></hr><br/>
                    </div>
                    <div class="contentPadding" id="innercontentfade">
                    Raw imaging data can contain various types of noise (Gaussian, salt and pepper, etc.). 
                    If your goal is to extract data from such images, being able to minimize noise can greatly improve the accuracy of the data produced.
                    In this example, I used Python OpenCV to "restore" the image quality of a noisy grayscale image using mathematical filters.
                    <br></br><br></br>
                
                    <b>A more in-depth explanation of what was done:</b>
                    <div id="bullets">
                        <ol>
                            <li>An image was first loaded using OpenCV and then converted to grayscale.</li>
                            <li>Next, a 'salt and pepper' effect (noise) was introduced into the grayscale image to produce a noisy image.</li>
                            <li>This image is then passed through various mathematical filters in an attempt to "restore the quality".
                                Notice how the contraharmonic mean filter appears almost identical to the original grayscale image in this case.
                            </li>
                            <li>A side-by-side comparison of the original with the processesed image.</li>
                            
                        </ol>
                    </div>
          
                    <br></br><img src={imgproc} id="projectimg" width="60%"></img>
                </div>
                </div>

                <div>
                    <div>
                    <br></br><hr width="100%" color="black"></hr>
                    <a href="https://github.com/civond/personalProjects/tree/main/Color_Recognition" target="_blank" rel="noopener noreferrer">
                        <h2>Color Recognition<BsIcons.BsLink /></h2></a>
                        <hr width="100%" color="black"></hr><br/>
                    </div>
                    <div class="contentPadding" id="innercontentfade">
                    Using Python OpenCV and pandas, I wrote a script that performs color recognition on any one pixel in an image
                     (Location = Xiangshan, Taipei). 
                    <br/><br/><img src={colorRecog} width="50%" alt='img' id="projectimg"></img>
                </div>
                </div>

                <div>
                    <div>
                    <br></br><hr width="100%" color="black"></hr>
                    <a href="https://github.com/civond/Portfolio-Website" target="_blank" rel="noopener noreferrer">
                        <h2>This ReactJS Website <BsIcons.BsLink /></h2></a>
                        <hr width="100%" color="black"></hr><br/>
                    </div>
                    <div class="contentPadding" id="innercontentfade">
                    This website was built from scratch using Reactjs, JavaScript, CSS, and HTML.
                    
                    </div>
                    <br></br>
                    
                </div>

            </div>
        </div>
        <div id="bottomBox">
        </div>
        </>
    )
}

export default projects
