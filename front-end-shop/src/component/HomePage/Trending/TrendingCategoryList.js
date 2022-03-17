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
            <div className="trending-categoy-list">
                <div className="container">
                    <div className="top-content-des">
                        <div className="row">
                            <div className="col">
                                <div className="item">
                                    <div className="icon"><i className="fa-solid fa-truck-fast"></i></div>
                                    <div className="wrb">
                                        <span className="title">Free World Delivery</span>
                                        <div className="description">Orders Over $100</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <div className="icon"><i className="fa-solid fa-headset"></i></div>
                                    <div className="wrb">
                                        <span className="title">Best Online Support</span>
                                        <div className="description">Hours: 8AM -11PM</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <div className="icon"><i className="fa-solid fa-piggy-bank"></i></div>
                                    <div className="wrb">
                                        <span className="title">Win $100 To Shop</span>
                                        <div className="description">Enter Now</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item">
                                    <div className="icon"><i className="fa-solid fa-dollar-sign"></i></div>
                                    <div className="wrb" style={{ border: "none" }}>
                                        <span className="title">Money Back Guarantee</span>
                                        <div className="description">With A 30 Day</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bot-content-list">
                        <div className="row">
                            <div className="title col-6">
                                <h4>Trending categories</h4>
                                <p>Exclusive products have just arrived. Check them out</p>
                            </div>
                        </div>
                        <div className="list-catgory">
                            <div className="top-content">
                                <div className="larg-content">
                                    <div className="item">
                                        <div className="content">
                                            <div className="img" style={{ backgroundImage: `url(${imgBalo})` }}>
                                            </div>
                                            <div className="overlay">
                                                <span>Balo</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="small-content">
                                    <div className="left">
                                        <div className="item">
                                            <div className="content">
                                                <div className="img" style={{ backgroundImage: `url(${imgCothes})` }}>
                                                </div>
                                                <div className="overlay">
                                                    <span>Trang phục</span>
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
                                                    <span>Dao-dụng cụ</span>
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
                                                    <span>Balo</span>
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
                                                    <span>Balo</span>
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
                                                <span>Balo</span>
                                            </div>
                                        </div>
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