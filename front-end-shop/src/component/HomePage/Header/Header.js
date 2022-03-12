import React from "react";
import './Header.scss'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="nav-header">
                <div className="container">
                    <div className="main-menu">
                        <ul className="dropdown">
                            <li className="category">
                                <span className="title">Trang phục</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </li>
                            <li className="category">
                                <span className="title">Trang phục</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </li>
                            <li className="category">
                                <span className="title">Trang phục</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </li>
                            <li className="category">
                                <span className="title">Trang phục</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </li>
                            <li className="category">
                                <span className="title">Trang phục</span>
                                <i className="fa-solid fa-chevron-down"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;