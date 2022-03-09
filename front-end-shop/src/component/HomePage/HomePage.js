import React, { Fragment } from "react";
import Header from "./Header/Header";
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="home-header container">
                    <div className="row">
                        <div className="uper-home-header">
                            <div className="left-nav"></div>
                            <div className="right-nav">
                                <div className="nav2">
                                    <div className="language-btn"></div>
                                    <div className="currency-btn"></div>
                                    <div className="search-btn"></div>
                                    <div className="account-btn"></div>
                                </div>
                            </div>
                        </div>
                        <div className="down-home-header">
                            <Header />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default HomePage;