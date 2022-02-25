import React from "react";
import HomeHeader from "./Header/HomeHeader";
import Banner from "./Header/Banner/Banner";
import TopCategory from "./TopCategory/TopCategory";
import Footer from "./Footer/Footer";
class HomePage extends React.Component {
    render() {
        return (
            <>
                <HomeHeader />
                <Banner />
                <TopCategory />
                <Footer />
            </>
        )
    }
}

export default HomePage