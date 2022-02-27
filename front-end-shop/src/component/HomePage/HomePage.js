import React, { Fragment } from "react";
import './HomePage.scss'
import HomeHeader from "./Header/HomeHeader";
import Banner from "./Header/Banner/Banner";
import TopCategory from "./TopCategory/TopCategory";
import Footer from "./Footer/Footer";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
class HomePage extends React.Component {
    render() {
        return (
            <Fragment>
                <HomeHeader />
                <Banner />
                <TopCategory />
                <FeaturedProduct />
                <Footer />
            </Fragment>
        )
    }
}

export default HomePage