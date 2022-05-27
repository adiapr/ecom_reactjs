import React, { Component, Fragment } from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../assets/images/slider1.jpg';
import Slider2 from '../../assets/images/slider2.jpg';
import Slider3 from '../../assets/images/slider3.jpg';

export class HomeSlider extends Component {
  render() {
    var settings = {
      dots: true, //menampilkan titik dibawah slider
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplayspeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={Slider1} alt="" className="slider-img" />
          </div>
          <div>
          <img src={Slider2} alt="" className="slider-img" />
          </div>
          <div>
          <img src={Slider3} alt="" className="slider-img" />
          </div>
        </Slider>
      </div>
    )
  }
}

export default HomeSlider
