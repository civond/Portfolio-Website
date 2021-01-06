import React, { useState } from 'react';
import styled from 'styled-components';
import Neuroscience from './aboutPage/neuroscience.js';
import Gradapps from './aboutPage/gradapps.js';
import Background from './aboutPage/background.js';

const AboutComponent = () => {
    const theme = {
        orange: {
            default: '#EF8D0F',
            hover: '#6E716D',
            click: '#464646'
        },
        green: {
            default: '#0F5607',
            hover: '#252424 ',
            click: '#464646'
        },
        pink: {
            default: '#900C3F',
            hover: '#252424',
            click: '#464646'
        }
    };

    //Button Styling
    const Button = styled.button`
        background-color: ${props => theme[props.theme].default};
        color:white;
        padding:5px;
        border-radius:6px;
        border-color:${props => theme[props.theme].default};
        font-size:15px;
        box-shadow: 2px 2px lightgray;
        cursor:pointer; 
        margin-left:5px;
        margin-right:5px;
        margin-bottom:10px;
        transition: ease 350ms;
        opacity:0.65;
        &:hover {
            opacity:.85;
            background-color: ${props => theme[props.theme].hover};
            border-color:${props => theme[props.theme].hover};
        }
        &:active{
            background-color: ${props => theme[props.theme].click};
                }`

    //Button Names
    const types = ['Background', 'Grad Apps', 'Neuroscience Research'];

    //More Styling
    Button.defaultProps = {
        theme: 'orange'
     };

    const ButtonToggle = styled(Button)`
    background-color: ${props => theme[props.theme].default};
    ${({active}) => 
    active &&
    ` opacity: 1;
       ` }
   `;

    //This selects the button on click
    function ToggleGroup() {
        const [active, setActive] = useState(types[0]);

        //This changes the displayed content with button press
        function Togglecontent() {
            if (active === 'Background') {
                return (
                    <div class="buttonfade">
                        <Background/>
                    </div>
                )
            }
            else if (active === 'Grad Apps') {
                return (
                    <div class="buttonfade">
                        <Gradapps/>
                    </div>
                )
            }
            else if (active === 'Neuroscience Research'){
                return (
                    <div class="buttonfade">
                        <Neuroscience/>
                    </div>
                )
            }
        };
        function changetheColor() {
            if (types === 'Background') {
                Button.defaultProps = {
                    theme: 'green'
                 };
            }
        }
        return (  
        <div>
            {types.map(type => (
                <ButtonToggle
                active={active === type}
                onClick={() => setActive(type)}
                >
                    {type}
                </ButtonToggle>
            ))}
            <br/><br/>
                <Togglecontent/>
        </div>
        )};

    return(
        <>
            <div class="contentfade">
                <br/>
                <ToggleGroup/>
            </div>
        </>
    );
};
export default AboutComponent