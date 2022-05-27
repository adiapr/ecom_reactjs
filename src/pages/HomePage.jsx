import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import HomeTop from '../components/home/HomeTop'
import NewArrival from '../components/home/NewArrival'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'

export class HomePage extends Component {
  render() {
    return (
        <Fragment>
            {/* include file .jsx  */}
            {/* <NavMenuDesktop /> */}
            <NavMenuMobile />
            <HomeTop />
            <FeaturedProducts />
            <NewArrival />
            <Categories />
            <Collection />  
        </Fragment>
    )
  }
}

export default HomePage
