import React from "react";
import './FeaturedProduct.scss';
import Slider from 'react-slick'
class FeaturedProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduct: this.data_product
        }
    }
    data_product = [
        {
            id: 1,
            name: 'shoes1',
            description: 'hot sale',
            price: 500000,
            currency: 'VND',
            thumb: '../../../asset/5_a2c6bf24-4901-4a43-8eef-f5fe0ad5b8cc_270x350.jpg'
        },
        {
            id: 2,
            name: 'shoes2',
            description: 'hot sale',
            price: 500000,
            currency: 'VND',
            thumb: '../../../asset/5_a2c6bf24-4901-4a43-8eef-f5fe0ad5b8cc_270x350.jpg'
        },
        {
            id: 3,
            name: 'shoes3',
            description: 'hot sale',
            price: 500000,
            currency: 'VND',
            thumb: '../../../asset/5_a2c6bf24-4901-4a43-8eef-f5fe0ad5b8cc_270x350.jpg'
        }
    ]
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            rows: 4,
            slidesPerRow: 2
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="header">
                        <div className="title">
                            <h2>Featured Product</h2>
                        </div>
                        <div className="subtitle">
                            <span>
                                Cloth talk. It's on you how want to live. Everyone has a choice. I pick my choice, squeaky clean. I'm giving you cloth alert, cut from a speacial cloth.
                            </span>
                        </div>
                    </div>
                    <div className="list-product">
                        <div className="list-content">
                            <Slider {...settings} >
                                <div className="card-product-container">
                                    <div className="product-image">
                                        <div className="btn-box">
                                            <div className="btn" id="cart"><i className="fa-solid fa-cart-shopping"></i></div>
                                            <div className="btn" id="favorite"><i className="fa-solid fa-heart"></i></div>
                                            <div className="btn" id="compare"><i className="fa-solid fa-code-compare"></i></div>
                                            <div className="btn" id="view"><i className="fa-solid fa-eye"></i></div>
                                        </div>
                                    </div>
                                    <div className="product-description">
                                        <span className="name">shoes</span>
                                        <span className="price">12321</span>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeaturedProduct;