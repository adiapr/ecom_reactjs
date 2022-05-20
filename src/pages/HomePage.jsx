import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'

export class HomePage extends Component {
  render() {
    return (
        <Fragment>
            {/* include file .jsx  */}
            <FeaturedProducts />
            <Categories />
        </Fragment>
    )
  }
}

export default HomePage
