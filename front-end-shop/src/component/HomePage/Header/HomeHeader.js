import React from "react";
import './HomeHeader.scss'
import DropDown from "./DropDown/DropDown";
class HomeHeader extends React.Component {
    render() {
        return (
            <div className="header" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="row">
                        <div className="content-header">
                            <div className="left-content"></div>
                            <div className="between-content">
                                <DropDown />
                            </div>
                            <div className="right-content">
                                <ul className="parent-dropdown-container">
                                    <div className="search-box right">
                                        <input type="text" placeholder="what are you looking for ?"></input>
                                        <div className="btn">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                    <li className="parent-dropdown right">
                                        <div className="title">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </div>
                                    </li>
                                    <li className="parent-dropdown right">
                                        <div className="title">
                                            <i className="fa-solid fa-earth-asia"></i>
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-content">
                                                <ul>
                                                    <li>vn</li>
                                                    <li>en</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="parent-dropdown right">
                                        <div className="title">
                                            <i className="fa-solid fa-users"></i>
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-content">
                                                <ul>
                                                    <li>
                                                        <i className="fa-solid fa-user-plus"></i>
                                                        Đăng kí
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-unlock"></i>
                                                        Đăng nhập
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-right-from-bracket"></i>
                                                        Đăng xuất
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-user-check"></i>
                                                        Tài khoản của tôi
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

export default HomeHeader