import React from "react"
import './TrendingCategoryList.scss'
import imgBalo from "../../../asset/category/balo.jpg"
import imgCothes from "../../../asset/category/trangphuc.jpg"
class TrendingCategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="trending-categoy-list-carousel">
                <div className="container">
                    <div className="top-content">
                        <div className="larg-content">
                            <div className="item">
                                <div className="content">
                                    <div className="img" style={{ backgroundImage: `url(${imgBalo})` }}>
                                    </div>
                                    <div className="overlay">
                                        <h2>Balo</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="small-content">
                            <div className="left">
                                <div className="item">
                                    <div className="content">
                                        <div className="img" style={{ backgroundImage: `url(${imgBalo})` }}>
                                        </div>
                                        <div className="overlay">
                                            <h2>Balo</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="item">
                                    <div className="content">
                                        <div className="img" style={{ backgroundImage: `url(${imgBalo})` }}>
                                        </div>
                                        <div className="overlay">
                                            <h2>Balo</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bot-content">
                        <div className="small-content">
                            <div className="left">
                                <div className="item">
                                    <div className="content">
                                        <div className="img" style={{ backgroundImage: `url(${imgBalo})` }}>
                                        </div>
                                        <div className="overlay">
                                            <h2>Balo</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="item">
                                    <div className="content">
                                        <div className="img" style={{ backgroundImage: `url(${imgBalo})` }}>
                                        </div>
                                        <div className="overlay">
                                            <h2>Balo</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="larg-content">
                            <div className="item">
                                <div className="content">
                                    <div className="img" style={{ backgroundImage: `url(${imgBalo})` }}>
                                    </div>
                                    <div className="overlay">
                                        <h2>Balo</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrendingCategoryList