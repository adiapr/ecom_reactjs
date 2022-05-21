import React, { Component, Fragment } from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export class NewArrival extends Component {

//   perintah membuat tombol next and prevoius pada caraousel 
  constructor(props){
        super(props);
        this.next       = this.next.bind(this)
        this.previous   = this.previous.bind(this)
  }

  next(){
      this.slider.slickNext();
  }

  previous(){
      this.slider.slickPrev();
  }
  render() {
    var settings = {
        dots: false, //menampilkan titik dibawah slider
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
      <Fragment>
          <Container className='text-center'>
                <div className='section-title'>
                    <h2>
                        NEW ARRIVAL &nbsp;
                        <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}><i className="fa fa-angle-left"></i> &nbsp; </a>
                        <a className="btn btn-sm ml-2 site-btn" onClick={this.next}><i className="fa fa-angle-right"></i> </a>
                    </h2>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>
                <Row>
                    <Slider ref={c=>(this.slider=c)} {...settings}>
                        <div>
                            <Card>
                                <img className='center' src="https://rukminim2.flixcart.com/image/416/416/l2jcccw0/computer/t/d/y/-original-imagdus5pzpkunz5.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">HP Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home)</p>
                                    <p className="product-price-on-card">Harga : Rp.3.350.000,-</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <img className='center' src="https://rukminim2.flixcart.com/image/416/416/kyt0ya80/computer/d/d/f/-original-imagaybgwx7nmacr.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">HP Ryzen 3 Dual Core 3250U - (8 GB/256 GB SSD/Windows 10 Home)</p>
                                    <p className="product-price-on-card">Harga : Rp.3.350.000,-</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <img className='center' src="https://rukminim2.flixcart.com/image/416/416/kw104nk0/computer/r/c/6/inbook-x1-pro-thin-and-light-laptop-infinix-original-imag8shwc4mzhyks.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">Infinix INBook X1 Core i3 10th Gen - (8 GB/256 GB SSD/Windows 11 Home) </p>
                                    <p className="product-price-on-card">Harga : Rp.3.350.000,-</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                        <Card>
                                <img className='center' src="https://rukminim2.flixcart.com/image/416/416/kruyw7k0/computer/4/l/e/na-thin-and-light-laptop-lenovo-original-imag5k4qebx7ns6s.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">Lenovo IdeaPad 3 Core i3 10th Gen - (8 GB/256 GB SSD/Windows 11 Home)</p>
                                    <p className="product-price-on-card">Harga : Rp.3.350.000,-</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                        <Card>
                                <img className='center' src="https://rukminim2.flixcart.com/image/416/416/klfhk7k0/computer/w/u/x/na-thin-and-light-laptop-lenovo-original-imagyk4hedcydqx5.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">Lenovo Ideapad Slim 5i Core i5 11th Gen - (16 GB/512 GB SSD/Windows 10 Home) </p>
                                    <p className="product-price-on-card">Harga : Rp.3.350.000,-</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                        <Card>
                                <img className='center' src="https://rukminim2.flixcart.com/image/416/416/kn3i1zk0/computer/0/c/h/na-chromebook-hp-original-imagfusg6egrsfpr.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">HP Chromebook MediaTek Kompanio 500 - (4 GB/64 GB EMMC Storage/Chrome OS) </p>
                                    <p className="product-price-on-card">Harga : Rp.3.350.000,-</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                        <Card>
                                <img className='center' src="https://rukminim2.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">ASUS VivoBook 15 (2022) Core i5 11th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home) </p>
                                    <p className="product-price-on-card">Harga : Rp.3.350.000,-</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                        <Card>
                                <img className='center' src="https://rukminim2.flixcart.com/image/416/416/l2jcccw0/computer/q/t/6/-original-imagdv4ykwrjxbmh.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">ASUS Chromebook Flip Celeron Dual Core - (4 GB/64 GB EMMC Storage/Chrome OS)</p>
                                    <p className="product-price-on-card">Harga : Rp.3.350.000,-</p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Slider>
                </Row>

          </Container>
      </Fragment>
    )
  }
}

export default NewArrival