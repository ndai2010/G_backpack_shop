import React from "react";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card-product-container">
        <div className="product-image" style={{ backgroundImage: `url()` }}>
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
          <span className="name"></span>
          <span className="price"></span>
        </div>
      </div>
    );
  }
}

export default ProductCard;
