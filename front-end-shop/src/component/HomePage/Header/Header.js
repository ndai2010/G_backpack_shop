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
                <div className="hotline"></div>
                <div className="main-nav"></div>
                <div className="account"></div>
            </div>
        )
    }
}
export default Header;