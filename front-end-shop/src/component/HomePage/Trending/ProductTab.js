import React, { Component } from 'react'
import './ProductTab.scss'
import Card from '../../Card/Card';
export default class ProductTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0,
        }
    }

    selected = (id) => {
        this.setState({
            selectedTab: id
        })
    }
    render() {
        let { selectedTab } = this.state
        console.log(selectedTab);
        return (
            <div className='product-tab' style={{ height: '300px' }}>
                <div className='title-box container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='title'>
                                <span>Trending products</span>
                            </div>
                            <div className='tab-nav row'>
                                <div className='col-4'>
                                    <div
                                        className={`btn-nav effect ${selectedTab === 0 ? 'active' : null}`}
                                        onClick={() => this.selected(0)}
                                    >
                                        <span>New Products</span>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div
                                        className={`btn-nav effect ${selectedTab === 1 ? 'active' : null}`}
                                        onClick={() => this.selected(1)}
                                    >
                                        <span>Best Selling</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tab-content container'>
                    <div className='list-product' hidden={selectedTab !== 0}>
                        <Card />
                    </div>
                </div>
            </div>
        )
    }
}
