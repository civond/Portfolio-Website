import React from 'react'
import taipei from "./graphics/taiwan.JPG";

function home() {
    return (
        <>
        <div>
            <img src={taipei} alt='img' id="backgroundimg"></img>

        <div>
            <div class="fade-in-box">
                <div class="centered" id="abouttextbox">
                </div>
            </div>
            
            <div class="fade-in-text">
                <div class="centered">
                    <div class="container">
                        <h2><b>About</b></h2><br></br>
                        Greetings world! My name is Dorian, and I am an aspiring Ph.D. student / data scientist!
                        <br></br>I am a published researcher with quantative training and ~19 months of full time experience. I aim to apply my background to create predictive 
                        models of neuronal activity to learn their contributions towards movement and behavior.
                    </div>
                </div>
            </div>
        </div>
            
        </div>
        </>
    )
}

export default home

