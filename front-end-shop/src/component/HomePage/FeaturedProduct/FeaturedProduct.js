import React from "react";
import "./FeaturedProduct.scss";
import Slider from "react-slick";
import imgProduct from "../../../asset/5.jpg";
class FeaturedProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: this.data_product,
    };
  }
  data_product = [
    {
      id: 1,
      name: "shoes1",
      description: "hot sale",
      price: 500000,
      currency: "VND",
      thumb: imgProduct,
    },
    {
      id: 2,
      name: "shoes2",
      description: "hot sale",
      price: 500000,
      currency: "VND",
      thumb: imgProduct,
    },
    {
      id: 3,
      name: "shoes3",
      description: "hot sale",
      price: 500000,
      currency: "VND",
      thumb: imgProduct,
    },
    {
      id: 4,
      name: "shoes4",
      description: "hot sale",
      price: 500000,
      currency: "VND",
      thumb: imgProduct,
    },
    {
      id: 5,
      name: "shoes5",
      description: "hot sale",
      price: 500000,
      currency: "VND",
      thumb: imgProduct,
    },
    {
      id: 6,
      name: "shoes6",
      description: "hot sale",
      price: 500000,
      currency: "VND",
      thumb: imgProduct,
    },
    {
      id: 1,
      name: "shoes1",
      description: "hot sale",
      price: 500000,
      currency: "VND",
      thumb: imgProduct,
    },
    {
      id: 2,
      name: "shoes2",
      description: "hot sale",
      price: 500000,
      currency: "VND",
      thumb: imgProduct,
    },
    {
      id: 3,
      name: "shoes3",
      description: "hot sale",
      price: 500000,
      currency: "VND",
      thumb: imgProduct,
    },
    {
      id: 4,
      name: "shoes4",
      description: "hot sale",
      price: 500000,
      currency: "VND",
      thumb: imgProduct,
    },
    {
      id: 5,
      name: "shoes5",
      description: "hot sale",
      price: 500000,
      currency: "VND",
      thumb: imgProduct,
    },
    {
      id: 6,
      name: "shoes6",
      description: "hot sale",
      price: 500000,
      currency: "VND",
      thumb: imgProduct,
    },
  ];
  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevState.listProduct !== this.data_product) {
      this.setState({
        listProduct: this.data_product,
      });
    }
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 2,
      slidesPerRow: 4,
    };
    let { listProduct } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="header">
            <div className="title">
              <h2>Featured Product</h2>
            </div>
            <div className="subtitle">
              <span>
                Cloth talk. It's on you how want to live. Everyone has a choice.
                I pick my choice, squeaky clean. I'm giving you cloth alert, cut
                from a speacial cloth.
              </span>
            </div>
          </div>
          <div className="list-product">
            <Slider
              {...settings}
              className="list-content"
              style={{ backgroundColor: "#f8f8f8" }}
            >
              {listProduct &&
                listProduct.length > 0 &&
                listProduct.map((item, index) => {
                  return (
                    <div className="card-product-container" key={index}>
                      <div
                        className="product-image"
                        style={{ backgroundImage: `url(${item.thumb})` }}
                      >
                        <div className="btn-box">
                          <div className="btn" id="cart">
                            <i className="fa-solid fa-cart-shopping"></i>
                          </div>
                          <div className="btn" id="favorite">
                            <i className="fa-solid fa-heart"></i>
                          </div>
                          <div className="btn" id="compare">
                            <i className="fa-solid fa-code-compare"></i>
                          </div>
                          <div className="btn" id="view">
                            <i className="fa-solid fa-eye"></i>
                          </div>
                        </div>
                      </div>
                      <div className="product-description">
                        <span className="name">{item.name}</span>
                        <span className="price">{item.price}</span>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
          <div className="view-all-collection">
            <span>View all item</span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedProduct;
