import React, { Component, Fragment } from 'react'
// import isi dari react bootstrap
import {Container, Row, Col, Card, Button} from 'react-bootstrap';  
import MegaMenu from './MegaMenu';
import HomeSlider from './HomeSlider';

export class HomeTopMobile extends Component {
  render() {
    return (
        <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
            <Row className="p-0 m-0 overflow-hidden">
              <Col lg={9} ms={9} sm={12}>
                  {/* include Slider.jsx  */}
                  <HomeSlider />
              </Col>
            </Row>
        </Container>
    </Fragment>
    )
  }
}

export default HomeTopMobile