import React, { Fragment } from "react";
import './HomePage.scss'
import SlideShow from "./Banner/SlideShow";
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="home-header">
                    <div className="uper-header container">
                        <div className="right-content">
                            <i className="fa-solid fa-percent"></i>
                            <span>Get upto 25% Cashback on first Order : GET25OFF</span>
                        </div>
                        <div className="left-content">
                            <div className="account">
                                <div className="myaccount dropdown">
                                    <span>My Account</span>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div className="lang-curr-wrapper">
                                <div className="language dropdown">
                                    <span>English</span>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div className="currecy dropdown">
                                    <span>Currency</span>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="down-header">
                        <div className="container">
                            <div className="hotline">
                                <div className="btn-hotline">
                                    <i className="fa-solid fa-phone-volume"></i>
                                </div>
                                <div className="contract">
                                    <span>Free call us:</span>
                                    <div className="number">086 205 2426</div>
                                </div>
                            </div>
                            <div className="header-logo"></div>
                            <div className="header-cart">
                                <div className="btn-cart">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div className="cart-value">
                                    <span>Check out:</span>
                                    <div className="value">
                                        <span className="count">0</span>
                                        <span>items</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SlideShow />
            </Fragment >
        )
    }
}
export default HomePage;