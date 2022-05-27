import React, { Component, Fragment } from 'react'
// import isi dari react bootstrap
import {Container, Row, Col, Card, Button} from 'react-bootstrap';  
import MegaMenu from './MegaMenu';
import HomeSlider from './HomeSlider';

export class HomeTop extends Component {
  render() {
    return (
      <Fragment>
          <Container className="p-0 m-0 overflow-hidden" fluid={true}>
              <Row>
                <Col lg={3} md={3} sm={12}>
                    {/* include MegaMenu.jsx  */}
                    <MegaMenu />
                </Col>

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

export default HomeTop