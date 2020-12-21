import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './ImageSlider.css';
import './Dots.css'

const ImageSlider = ({ slides }) => {
  //slides
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  //dots
  const [currentDot, setCurrentDot] = useState(0);


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setCurrentDot(currentDot === length - 1 ? 0 : currentDot + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setCurrentDot(currentDot === 0 ? length - 1 : currentDot - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div id="slidecomponentcontainer" class="slidecomponentcontainer2">
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      <div class="slidecontainer" id="slideid">
        {SliderData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
                <img src={slide.image} alt='travel' className='imageslide' />
              )}
            </div>
          );
        })}
      </div>
      <div class="dotcontainer">
      {SliderData.map((dot, index) => {
        return (
          <span className={index === currentDot ? 'dot active' : 'dot'} key={index}/>
        );
      })}
      </div>
    </section>
    </div>
  );
};

export default ImageSlider;