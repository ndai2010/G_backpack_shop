import React from "react";
import './HomeHeader.scss'
class HomeHeader extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="content">
                        <div className="left-content"></div>
                        <div className="between-content"></div>
                        <div className="right-content"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader