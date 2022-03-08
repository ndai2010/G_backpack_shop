import React from "react";
import './ContentProduct.scss'
class ContentProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="product-shop" style={{ backgroundColor: "white" }}>
                <div className="container">
                    <div className="row">
                        <div className="title-header">
                            <span>balo</span>
                        </div>
                        <div className="archive-products">
                            <div className="left-content">
                                <div>header</div>
                            </div>
                            <div className="right-content">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentProduct