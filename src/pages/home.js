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
                        <h2><b>Hello / 你好 / こんにちは！</b></h2><br/>
                        My name is Dorian, and I am a published researcher with quantative training with ~2.5 years of full time experience. 
                        I wish to apply my expertise to develop data-driven solutions to improve human health and empowering those
                        in developing countries as a researcher, or data scientist!
                    </div>
                </div>
            </div>
        </div>
            
        </div>
        </>
    )
}

export default home

