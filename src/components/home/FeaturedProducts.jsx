import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

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
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default FeaturedProducts
