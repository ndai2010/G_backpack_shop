import React from "react";
import HomeHeader from "./Header/HomeHeader";
import Banner from "./Header/Banner/Banner";
class HomePage extends React.Component {
    render() {
        return (
            <>
                <HomeHeader />
                <Banner />
            </>
        )
    }
}

export default HomePage