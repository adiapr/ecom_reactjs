import React, { Component, Fragment } from 'react'

// import isi dari react bootstrap
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

export class FeaturedProducts extends Component {
  render() {
    return (
        <Fragment>
            <Container className='text-center'>
                <div className='section-title'>
                    <h2>FEATURED PRODUCT</h2>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>
                <Row>
                    {/* jia di bootstrap yaitu col-md-4 dst */}
                    {/* untuk membuat pengaturan padding membuat atribut className baru  */}
                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="image-box">
                            <img className='center' src="https://rukminim2.flixcart.com/image/416/416/l2nmnww0/cases-covers/o/s/8/-original-imagdygxvrzpjync.jpeg?q=70" />
                            <Card.Body>
                                <p className="product-name-on-card">Realme C31 (Light Silver, 32 GB)  (3 GB RAM)</p>
                                <p className="product-price-on-card">Harga : Rp.3.350.000,-</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="image-box">
                            <img className='center' src="https://rukminim2.flixcart.com/image/416/416/kzhbfrk0/mobile/s/z/w/-original-imagbgxfgrqpqmpy.jpeg?q=70" />
                            <Card.Body>
                                <p className="product-name-on-card">OPPO K10 (Black Carbon, 128 GB)  (8 GB RAM)</p>
                                <p className="product-price-on-card">Harga : Rp.3.100.000,-</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="image-box">
                            <img className='center' src="https://rukminim2.flixcart.com/image/416/416/ku5ufm80/mobile/s/i/q/sport-9a-redmi-original-imag7chxqqu7h5hs.jpeg?q=70" />
                            <Card.Body>
                                <p className="product-name-on-card">Redmi 9A Sport (Coral Green, 32 GB)  (3 GB RAM)</p>
                                <p className="product-price-on-card">Harga : Rp.1.110.000,-</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="image-box">
                            <img className='center' src="https://rukminim2.flixcart.com/image/416/416/l0sgyvk0/mobile/k/x/c/-original-imagcg22czc3ggvw.jpeg?q=70" />
                            <Card.Body>
                                <p className="product-name-on-card">SAMSUNG Galaxy F23 5G (Aqua Blue, 128 GB)  (6 GB RAM)</p>
                                <p className="product-price-on-card">Harga : Rp.7.313.000,-</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="image-box">
                            <img className='center' src="https://rukminim2.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70" />
                            <Card.Body>
                                <p className="product-name-on-card">APPLE iPhone 11 (White, 128 GB)</p>
                                <p className="product-price-on-card">Harga : Rp.350.000,-</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Card className="image-box">
                            <img className='center' src="https://rukminim2.flixcart.com/image/416/416/ky7lci80/mobile/f/y/1/-original-imagahvnztbdzb89.jpeg?q=70" />
                            <Card.Body>
                                <p className="product-name-on-card">ASUS ROG 5s (Storm White, 256 GB)  (12 GB RAM)</p>
                                <p className="product-price-on-card">Harga : Rp.4.999.000,-</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default FeaturedProducts
