import React, { Component } from 'react';
import './TabsProduct.scss'
import ListProduct from '../ListProduct/ListProduct'
class TabProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div className='tabs'>
                <div className='tabs-header'>
                    <div className='header-title'>
                        <span>Popular Products</span>
                    </div>
                    <div className='tabs-btn'>
                        <div className='btn featured-product'><span>featured</span></div>
                        <div className='btn bestseller-product'><span>bestseller</span></div>
                        <div className='btn latest-product'><span>latest</span></div>
                    </div>
                </div>
                <div className='tabs-content'>
                    <ListProduct />
                </div>
            </div>
        );
    }
}

export default TabProduct;