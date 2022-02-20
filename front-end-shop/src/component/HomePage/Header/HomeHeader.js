import React from "react";
import './HomeHeader.scss'
import DropDown from "./DropDown/DropDown";
class HomeHeader extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="content-header">
                        <div className="left-content"></div>
                        <div className="between-content">
                            <DropDown />
                        </div>
                        <div className="right-content">
                            <div className="search-box">
                                <input type="text" placeholder="what are you looking for ?"></input>
                                <div className="btn">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <div className="btn">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className="btn">
                                <i className="fa-solid fa-earth-asia"></i>
                                <ul>
                                    <li>vn</li>
                                    <li>en</li>
                                </ul>
                            </div>
                            <div className="btn">
                                <i className="fa-solid fa-user"></i>
                                <ul>
                                    <li>login</li>
                                    <li>Register</li>
                                    <li>My account</li>
                                    <li>log out</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default HomeHeader