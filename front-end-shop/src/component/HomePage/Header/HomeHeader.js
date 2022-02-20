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
                        <div className="right-content"></div>
                    </div>
                </div>
            </div >
        )
    }
}

export default HomeHeader