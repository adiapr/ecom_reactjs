import React, { Component, Fragment } from 'react'
// import react-bootstrap 
import {Container, Row, Col, Card} from 'react-bootstrap';

export class Collection extends Component {
  render() {
    return (
        <Fragment>
            <Container className='text-center'>
                <div className='section-title'>
                    <h2>PRODUCT COLLECTION</h2>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>
                <Row>
                    <Col className='p-0' lg={3} sm={6}>
                        <Card className="image-box card w-100">
                            <img className='center' src="https://rukminim2.flixcart.com/image/150/150/kltryq80/selfie-stick/p/9/x/selfie-stick-r1-holdup-original-imagyv32ezbk4jds.jpeg?q=70" />
                            <Card.Body>
                                <p className="product-name-on-card">Selfie Sticks</p>
                                <p className="product-price-on-card">Harga : Rp.150.000,-</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='p-0' lg={3} sm={6}>
                        <Card className="image-box">
                            <img className='center' src="https://rukminim2.flixcart.com/image/150/150/l2nmnww0/screen-expander-phone/i/c/r/2x4-12-12-inches-hd-screen-magnifier-for-mobile-phone-magnifing-original-imagdyfhvg6cf3ny.jpeg?q=70" />
                            <Card.Body>
                                <p className="product-name-on-card">Screen Expander</p>
                                <p className="product-price-on-card">Harga : Rp.250.000,-</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='p-0' lg={3} sm={6}>
                        <Card className="image-box">
                            <img className='center' src="https://rukminim2.flixcart.com/image/150/150/k3ncakw0/flash/ring-flash/x/s/z/webster-led-selfie-ring-light-original-imafmj273p7tudcv.jpeg?q=70" />
                            <Card.Body>
                                <p className="product-name-on-card">Mobile Flash</p>
                                <p className="product-price-on-card">Harga : Rp.160.000,-</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='p-0' lg={3} sm={6}>
                        <Card className="image-box">
                            <img className='center' src="https://rukminim2.flixcart.com/image/150/150/l1nwnm80/battery-charger/n/u/x/-original-imagd6dcvfhgyawz.jpeg?q=70" />
                            <Card.Body>
                                <p className="product-name-on-card">Fast Charging</p>
                                <p className="product-price-on-card">Harga : Rp.65.000,-</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default Collection