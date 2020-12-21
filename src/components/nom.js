import React, { useState , useEffect }from 'react'



const ScrollLock=() => {

    useEffect(() => {

        var myScrollStartHandler = function( event ){
            console.log( 'logs on every scroll move' );
        };

        if (window.scrollY >= 400 ) { 
            console.log( 'hello comrade' )
            console.log( window.scrollY ) 
        }
        console.log(window.scrollY)
        
        
    }, [window])


    return (
        <div id="f">
            this is a ftest
        </div>
)}

export default ScrollLock