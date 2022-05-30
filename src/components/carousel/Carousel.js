import React, {Component} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    
    return (
      <div className='text-center p-28'>
        <h2 className='text-xl md:text-2xl lg:text-4xl mb-4 text-cyan-900'> Beautiful thoughts From Our Customers </h2>
        <Slider {...settings}>
        <div>
                <h3 className='text-lg md:text-xl lg:text-2xl text-cyan-900 mb-3'>
                    Rachael Omolade   
                </h3>

                <p className='italic'>
                    "Inspiration and creativity are at the heart of their work." 
                    The team values design traditions and works hard to keep them alive. 
                    It's a place where people work honestly."
                </p>
            </div>
            <div>
                <h3 className='text-lg md:text-xl lg:text-2xl text-cyan-900 mb-3'>
                    Rachael Omolade   
                </h3>

                <p className='italic'>
                    "Inspiration and creativity are at the heart of their work." 
                    The team values design traditions and works hard to keep them alive. 
                    It's a place where people work honestly."
                </p>
            </div>
            <div>
                <h3 className='text-lg md:text-xl lg:text-2xl text-cyan-900 mb-3'>
                    Rachael Omolade   
                </h3>

                <p className='italic'>
                    "Inspiration and creativity are at the heart of their work." 
                    The team values design traditions and works hard to keep them alive. 
                    It's a place where people work honestly."
                </p>
            </div>
            <div>
                <h3 className='text-lg md:text-xl lg:text-2xl text-cyan-900 mb-3'>
                    Rachael Omolade   
                </h3>

                <p className='italic'>
                    "Inspiration and creativity are at the heart of their work." 
                    The team values design traditions and works hard to keep them alive. 
                    It's a place where people work honestly."
                </p>
            </div>
            <div>
                <h3 className='text-lg md:text-xl lg:text-2xl text-cyan-900 mb-3'>
                    Rachael Omolade   
                </h3>

                <p className='italic'>
                    "Inspiration and creativity are at the heart of their work." 
                    The team values design traditions and works hard to keep them alive. 
                    It's a place where people work honestly."
                </p>
            </div>
        </Slider>
      </div>
    );
  }
}