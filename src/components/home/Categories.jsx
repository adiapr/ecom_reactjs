import React, { Component, Fragment } from 'react'

// import react-bootstrap 
import {Container, Row, Col, Card} from 'react-bootstrap';

export class Categories extends Component {
  render() {
    return (
        <Fragment>
            <Container className='text-center'>
                <div className='section-title'>
                    <h2>CATEGORIES</h2>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>
                <Row>
                    <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                        <Row>
                            <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" />
                                    <h5 className="category-name">GOCERY</h5>
                                    <Card.Body>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" />
                                    <h5 className="category-name">MOBILE</h5>
                                    <Card.Body>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
                                    <h5 className="category-name">OFFERS</h5>
                                    <Card.Body>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" />
                                    <h5 className="category-name">FASHION</h5>
                                    <Card.Body>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                        <Row>
                            <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" />
                                    <h5 className="category-name">EECTRONICS</h5>
                                    <Card.Body>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" />
                                    <h5 className="category-name">HOME</h5>
                                    <Card.Body>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" />
                                    <h5 className="category-name">APPLIANCES</h5>
                                    <Card.Body>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className='p-0' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                                <Card className="h-100 w-100 text-center">
                                    <img className='center' src="https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" />
                                    <h5 className="category-name">BABY </h5>
                                    <Card.Body>
                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default Categories