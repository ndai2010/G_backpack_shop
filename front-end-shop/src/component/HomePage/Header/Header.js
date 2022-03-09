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
                    <div className="row">
                        <div className="header-logo"></div>
                        <div className="main-menu"></div>
                        <div className="header-cart"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;